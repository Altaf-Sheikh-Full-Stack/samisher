import BONUS from "../../Data/Bonus";
import ConversionRates from "../../Data/ConversionRates";
import Difficulty from "../../Data/Difficulty";
import ResultProfiles from "../../Data/ResultProfiles";
import type Answers from "../../Types/Answers";
import GetPrimaryService from "./GetPrimaryService";
import GetSelectedServices from "./GetSelectedServices";

const CalculateEstimate = (answers: Answers) => {
    const services = GetSelectedServices(answers);
    const primary = GetPrimaryService(answers);
    const profile = ResultProfiles[primary] ?? ResultProfiles.lead_generation;

    const factor = [
        Difficulty.industry[String(answers.industry)] ?? 1,
        Difficulty.country[String(answers.country)] ?? 1,
        Difficulty.company_size[String(answers.company_size)] ?? 1,
        Difficulty.market[String(answers.market)] ?? 1,
    ].reduce((total, value) => total * value, 1);

    const serviceCount = Math.max(1, services.length);
    const multiServiceFactor = serviceCount === 1 ? 1 : 1 + (serviceCount - 1) * 0.28;

    let low = profile.defaultCost[0] * factor * multiServiceFactor;
    let high = profile.defaultCost[1] * factor * multiServiceFactor;

    if (services.includes("closing") && primary !== "closing") {
        low += 120 * factor;
        high += 220 * factor;
    }

    low = Math.max(25, low);
    high = Math.max(low + 10, high);

    const sellingPrice = Number(answers.selling_price) || 0;
    const conversion = ConversionRates[String(answers.conversion)] ?? 0.1;
    const revenuePerResult = primary === "closing" ? sellingPrice : sellingPrice * conversion;
    const avgCost = (low + high) / 2;

    const breakEvenResults = revenuePerResult > avgCost && sellingPrice > 0
        ? Math.ceil(avgCost / revenuePerResult)
        : null;

    return {
        primary,
        profile,
        low,
        high,
        avgCost,
        sellingPrice,
        conversion,
        revenuePerResult,
        breakEvenResults,
        viable: breakEvenResults !== null,
        discountedLow: Math.max(0, low - BONUS),
        discountedHigh: Math.max(0, high - BONUS),
        credit: Math.min(BONUS, avgCost),
        potentialRevenueLow: revenuePerResult * 8,
        potentialRevenueHigh: revenuePerResult * 20,
        resultsLow: 8,
        resultsHigh: 20,
    };
}

export default CalculateEstimate