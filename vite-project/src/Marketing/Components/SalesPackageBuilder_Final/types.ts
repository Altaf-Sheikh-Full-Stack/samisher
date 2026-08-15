export type ServiceId =
  | "lead-generation"
  | "meeting-booking"
  | "closer"
  | "collection";

export type BillingModel =
  | "one-time"
  | "monthly"
  | "quarterly"
  | "annual";

export interface SolutionDefinition {
  id: string;
  label: string;
}

export interface ServiceDefinition {
  id: ServiceId;
  name: string;
  img:string;
  description: string;
  resultUnit: string;
  solutions: SolutionDefinition[];
}

export interface ServiceConfig {
  serviceId: ServiceId;
  solutionId: string;

  industry: string;
  country: string;
  companySize: string;
  market: string;

  targetVolume: number;

  customerValue: number;
  billingModel: BillingModel;
  customerLifetimeMonths: number;

  decisionMaker?: string;
  closingSource?: string;

  collectionAge?: string;
  collectionAmount?: number;
}

export interface ServiceItem {
  id: string;
  serviceId: ServiceId;
  solutionId: string;
  enabled: boolean;
  config: ServiceConfig;
}

export interface ChartPoint {
  month: number;
  revenue: number;
  cost: number;
}

export interface ServiceEstimate {
  costPerResultMin: number;
  costPerResultMax: number;
  monthlySpendMin: number;
  monthlySpendMax: number;

  acquisitionCostMin: number;
  acquisitionCostMax: number;
  conversionRate: number;

  customerRevenuePerMonth: number;
  paybackMonths: number | null;
  profitable: boolean;

  chart: ChartPoint[];
}

export interface PackageEstimate {
  monthlySpendMin: number;
  monthlySpendMax: number;
  bonus: number;
  firstEngagementMin: number;
  firstEngagementMax: number;
}
