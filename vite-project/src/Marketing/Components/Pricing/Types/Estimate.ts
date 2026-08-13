import type ResultProfile from "./ResultProfile";

type Estimate = {
  primary: string;
  profile: ResultProfile;
  low: number;
  high: number;
  avgCost: number;
  sellingPrice: number;
  conversion: number;
  revenuePerResult: number;
  breakEvenResults: number | null;
  viable: boolean;
  discountedLow: number;
  discountedHigh: number;
  credit: number;
  potentialRevenueLow: number;
  potentialRevenueHigh: number;
  resultsLow: number;
  resultsHigh: number;
};

export type {Estimate as default}