import { serviceDefinitions } from "../data/services";
import type {
  PackageEstimate,
  ServiceConfig,
  ServiceEstimate,
  ServiceItem,
} from "../types";

const basePrice: Record<string, [number, number]> = {
  "lead-generation": [5, 10],
  "meeting-booking": [70, 100],
  closer: [200, 450],
  collection: [90, 170],
};

const industryFactor: Record<string, number> = {
  "SaaS / Software": 1.0,
  "Professional Services": 1.05,
  "Marketing / Agencies": 1.0,
  "Finance / FinTech": 1.18,
  Healthcare: 1.22,
  Manufacturing: 1.12,
  "Real Estate": 1.08,
  "E-commerce": 0.96,
  Other: 1.08,
};

const countryFactor: Record<string, number> = {
  "United States": 1.1,
  "United Kingdom": 1.07,
  Canada: 1.05,
  Australia: 1.06,
  Europe: 1.12,
  India: 0.86,
  "Middle East": 1.14,
  Other: 1.1,
};

const companyFactor: Record<string, number> = {
  "1–10": 0.9,
  "11–50": 0.98,
  "51–200": 1.08,
  "201–500": 1.18,
  "501–1,000": 1.28,
  "1,001+": 1.4,
};

const marketFactor: Record<string, number> = {
  "Broad market": 0.92,
  "Specific niche": 1,
  "Highly competitive niche": 1.18,
  "Enterprise / strategic": 1.32,
};

function solutionFactor(id: string) {
  if (
    id.includes("highly") ||
    id.includes("decision") ||
    id.includes("full-cycle") ||
    id.includes("overdue") ||
    id.includes("full-management")
  ) {
    return 1.25;
  }

  if (
    id.includes("appointment") ||
    id.includes("demo")
  ) {
    return 1.12;
  }

  return 1;
}

function boundedVolume(value: number) {
  if (!Number.isFinite(value)) return 1;
  return Math.min(1000, Math.max(1, Math.round(value)));
}

function resultConversion(serviceId: string, customerValue: number) {
  if (serviceId === "closer") return 1;
  if (serviceId === "collection") return 0.85;
  if (customerValue >= 10000) return 0.12;
  if (customerValue >= 5000) return 0.1;
  return 0.08;
}

function monthlyCustomerRevenue(config: ServiceConfig) {
  if (config.billingModel === "one-time") {
    return config.customerValue;
  }

  if (config.billingModel === "quarterly") {
    return config.customerValue / 3;
  }

  if (config.billingModel === "annual") {
    return config.customerValue / 12;
  }

  return config.customerValue;
}

export function calculateService(
  config: ServiceConfig,
): ServiceEstimate {
  const [baseMin, baseMax] = basePrice[config.serviceId];

  const factor =
    (industryFactor[config.industry] ?? 1.08) *
    (countryFactor[config.country] ?? 1.1) *
    (companyFactor[config.companySize] ?? 1.08) *
    (marketFactor[config.market] ?? 1) *
    solutionFactor(config.solutionId);

  const costPerResultMin = Math.round(baseMin * factor);
  const costPerResultMax = Math.round(baseMax * factor);

  const volume = boundedVolume(config.targetVolume);

  const monthlySpendMin = costPerResultMin * volume;
  const monthlySpendMax = costPerResultMax * volume;

  const conversionRate = resultConversion(
    config.serviceId,
    config.customerValue,
  );

  const acquisitionCostMin = Math.round(
    costPerResultMin / conversionRate,
  );

  const acquisitionCostMax = Math.round(
    costPerResultMax / conversionRate,
  );

  const customerRevenuePerMonth = monthlyCustomerRevenue(config);

  // Model customer acquisition against one new customer.
  // The chart is intentionally an illustrative scenario, not a forecast.
  const averageAcquisitionCost =
    (acquisitionCostMin + acquisitionCostMax) / 2;

  const paybackMonths =
    customerRevenuePerMonth > 0
      ? averageAcquisitionCost / customerRevenuePerMonth
      : null;

  const chart = Array.from({ length: 7 }, (_, index) => {
    const month = index + 1;
    const revenue = customerRevenuePerMonth * month;

    return {
      month,
      revenue,
      cost: averageAcquisitionCost,
    };
  });

  return {
    costPerResultMin,
    costPerResultMax,
    monthlySpendMin,
    monthlySpendMax,
    acquisitionCostMin,
    acquisitionCostMax,
    conversionRate,
    customerRevenuePerMonth,
    paybackMonths,
    profitable: paybackMonths !== null && paybackMonths <= 1,
    chart,
  };
}

export function calculatePackage(
  items: ServiceItem[],
): PackageEstimate {
  const estimates = items
    .map((item) => {
      if (!item.enabled) return null;
      return calculateService(item.config);
    })
    .filter(Boolean) as ServiceEstimate[];

  const monthlySpendMin = estimates.reduce(
    (sum, estimate) => sum + estimate.monthlySpendMin,
    0,
  );

  const monthlySpendMax = estimates.reduce(
    (sum, estimate) => sum + estimate.monthlySpendMax,
    0,
  );

  const bonus = 200;

  return {
    monthlySpendMin,
    monthlySpendMax,
    bonus,
    firstEngagementMin: Math.max(0, monthlySpendMin - bonus),
    firstEngagementMax: Math.max(0, monthlySpendMax - bonus),
  };
}

export function getService(serviceId: string) {
  return serviceDefinitions.find((service) => service.id === serviceId);
}
