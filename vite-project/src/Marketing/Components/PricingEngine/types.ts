export type ServiceId = "meetings" | "leads" | "closer" | "collections";

export type ValueMode = "recurring" | "oneTime";

export type MarketKey = "pinpoint" | "mixed" | "exec";

export type ClosingKey = "0.1" | "0.2" | "0.3" | "0.4";

/** A specific result the customer buys (e.g. "Decision-maker meeting"). */
export interface ResultType {
  id: string;
  label: string;
  hint: string;
  /** Fair per-result price range in USD. */
  price: [number, number];
  badge?: string;
}

export interface ServiceDefinition {
  id: ServiceId;
  label: string;
  headline: string;
  copy: string;
  icon: string;
  unit: string;
  unitPlural: string;
  resultTypes: ResultType[];
  /** Default value model (recurring subscription vs one-time payment). */
  defaultValueMode: ValueMode;
  valueLabel: string;
  valueHint: string;
  valueExample: string;
  /** Whether we ask the "how many become paying customers" question. */
  asksConversion: boolean;
  /** Conversion used when we don't ask (e.g. every closed deal counts). */
  fixedConversion?: number;
}

export interface PricingInputs {
  serviceId: ServiceId | null;
  resultTypeId: string | null;
  market: MarketKey | null;
  volume: number;
  customerValue: number;
  valueMode: ValueMode;
  closingKey: ClosingKey | null;
}

export interface MonthPoint {
  month: number;
  monthlyCost: number;
  cumulativeCost: number;
  monthlyValue: number;
  cumulativeValue: number;
}

export interface Estimate {
  serviceName: string;
  resultLabel: string;
  unit: string;

  /** Per-result price range. */
  pricePerResultMin: number;
  pricePerResultMax: number;

  /** Monthly investment range. */
  monthlyCostMin: number;
  monthlyCostMax: number;
  /** Median monthly investment used for the projection charts. */
  monthlyCostMedian: number;

  resultsPerMonth: number;
  /** Chosen conversion rate (0–1) or the fixed rate for that service. */
  conversionRate: number;
  /** Expected paying customers per month. */
  customersPerMonth: number;

  customerValuePerMonth: number;

  breakEvenMonth: number | null;
  profitAfter12Months: number;
  profitAfter6Months: number;
  totalValue12Months: number;
  totalCost12Months: number;
  netPerMonthAtMonth6: number;
  netPerMonthAtMonth12: number;

  points: MonthPoint[];
}