import { closingOptions, getService, marketOptions } from "./data";
import type { Estimate, MonthPoint, PricingInputs } from "./types";

export const PROJECTION_MONTHS = 12;
export const BREAK_EVEN_SCAN_MONTHS = 24;

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export function buildEstimate(inputs: PricingInputs): Estimate | null {
  const service = getService(inputs.serviceId);
  if (!service) return null;

  const resultType =
    service.resultTypes.find((type) => type.id === inputs.resultTypeId) ?? null;

  const marketFactor =
    marketOptions.find((option) => option.key === inputs.market)?.factor ?? 1;
  const volume = clamp(Math.round(inputs.volume) || 30, 1, 1000);
  const customerValue = Math.max(0, Number(inputs.customerValue) || 0);

  // Per-result price band, weighted by how hard the audience is to reach.
  const pricePerResultMin = Math.round(
    (resultType?.price[0] ?? service.resultTypes[0].price[0]) * marketFactor,
  );
  const pricePerResultMax = Math.round(
    (resultType?.price[1] ?? service.resultTypes[0].price[1]) * marketFactor,
  );

  const monthlyCostMin = pricePerResultMin * volume;
  const monthlyCostMax = pricePerResultMax * volume;
  const monthlyCostMedian = Math.round(
    ((pricePerResultMin + pricePerResultMax) / 2) * volume,
  );

  // How many results actually turn into paying customers.
  const conversionRate = service.asksConversion
    ? closingOptions.find((option) => option.key === inputs.closingKey)?.rate ??
      0.2
    : (service.fixedConversion ?? 1);

  const customersPerMonth = volume * conversionRate;

  const valueModeIsRecurring = inputs.valueMode === "recurring";
  const customerValuePerMonth = customerValue;

  // Realistic churn: roughly 9 in 10 clients stay each month, so the client
  // pool grows then flattens instead of compounding forever.
  const RETENTION_RATE = 0.9;

  const points: MonthPoint[] = [];
  let activeClients = 0;
  let cumulativeCost = 0;
  let cumulativeValue = 0;
  let breakEvenMonth: number | null = null;

  for (let month = 1; month <= BREAK_EVEN_SCAN_MONTHS; month++) {
    // Recurring: each new client keeps producing every month, while the
    // existing pool churns at a normal B2B rate.
    // One-time: the deal value arrives once, on the month it is won.
    if (valueModeIsRecurring) {
      activeClients = activeClients * RETENTION_RATE + customersPerMonth;
    }
    const monthlyValue = valueModeIsRecurring
      ? activeClients * customerValuePerMonth
      : customersPerMonth * customerValuePerMonth;

    cumulativeCost += monthlyCostMedian;
    cumulativeValue += monthlyValue;

    if (breakEvenMonth === null && cumulativeValue >= cumulativeCost) {
      breakEvenMonth = month;
    }

    points.push({
      month,
      monthlyCost: monthlyCostMedian,
      cumulativeCost,
      monthlyValue,
      cumulativeValue,
    });
  }

  const pointAt = (month: number) => points[month - 1] ?? points[points.length - 1];

  const totalCost12Months = pointAt(12).cumulativeCost;
  const totalValue12Months = pointAt(12).cumulativeValue;
  const profitAfter6Months =
    pointAt(6).cumulativeValue - pointAt(6).cumulativeCost;
  const profitAfter12Months = totalValue12Months - totalCost12Months;

  return {
    serviceName: service.label,
    resultLabel: resultType?.label ?? service.resultTypes[0].label,
    unit: service.unit,

    pricePerResultMin,
    pricePerResultMax,

    monthlyCostMin,
    monthlyCostMax,
    monthlyCostMedian,

    resultsPerMonth: volume,
    conversionRate,
    customersPerMonth,

    customerValuePerMonth,
    breakEvenMonth,
    profitAfter12Months,
    profitAfter6Months,
    totalValue12Months,
    totalCost12Months,
    // Monthly run-rate value in months 6 and 12 (what this later looks like).
    netPerMonthAtMonth6: pointAt(6).monthlyValue - monthlyCostMedian,
    netPerMonthAtMonth12: pointAt(12).monthlyValue - monthlyCostMedian,

    points: points.slice(0, PROJECTION_MONTHS),
  };
}

export function buildPreview(inputs: PricingInputs) {
  const service = getService(inputs.serviceId);
  if (!service) return null;

  const marketFactor =
    marketOptions.find((option) => option.key === inputs.market)?.factor ?? 1;
  const resultType =
    service.resultTypes.find((type) => type.id === inputs.resultTypeId) ?? null;

  const min = Math.round((resultType?.price[0] ?? 0) * marketFactor);
  const max = Math.round((resultType?.price[1] ?? 0) * marketFactor);
  const volume = clamp(Math.round(inputs.volume) || 0, 1, 1000);

  return {
    serviceName: service.label,
    resultLabel: resultType?.label ?? null,
    unit: service.unit,
    resultsPerMonth: volume,
    pricePerResultMin: min,
    pricePerResultMax: max,
    monthlyCostMin: min * volume,
    monthlyCostMax: max * volume,
  };
}