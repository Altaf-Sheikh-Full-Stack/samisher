import pricingData, { type Pricing } from "./Data/PricingData";

export const PRICING_ASSUMPTIONS = {
    LEAD_TO_MEETING_RATE: 0.02,
    MEETING_TO_DEAL_RATE: 0.2,
    DEAL_TO_INVOICE_RATE: 0.4,
    INVOICE_TO_COLLECTION_RATE: 0.6,
} as const;

export type CalculatedPricingItem = Pricing & {
    price: number;
    quantity: number;
    unitLabel: string;
};

export const formatCurrency = (value: number): string => {
    if (value >= 1000000) {
        return `$${(value / 1000000).toFixed(1).replace(/\.0$/, "")}M`;
    }

    if (value >= 1000) {
        return `$${(value / 1000).toFixed(1).replace(/\.0$/, "")}K`;
    }

    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(value);
};

export const calculatePricing = ({
    revenueTarget,
    avgSellingPrice,
}: {
    revenueTarget: number;
    avgSellingPrice: number;
}): CalculatedPricingItem[] => {
    const target = Number(revenueTarget);
    const sellingPrice = Number(avgSellingPrice);

    if (!target || !sellingPrice) {
        return [];
    }

    const dealsRequired = Math.ceil(target / sellingPrice);

    const leadsRequired = Math.ceil(
        dealsRequired / PRICING_ASSUMPTIONS.LEAD_TO_MEETING_RATE,
    );

    const meetingsRequired = Math.ceil(
        dealsRequired / PRICING_ASSUMPTIONS.MEETING_TO_DEAL_RATE,
    );

    const closeRequired = Math.ceil(
        dealsRequired / PRICING_ASSUMPTIONS.DEAL_TO_INVOICE_RATE,
    );

    const invoiceRequired = Math.ceil(
        dealsRequired / PRICING_ASSUMPTIONS.INVOICE_TO_COLLECTION_RATE,
    );

    return pricingData.map((service) => {
        let price = 0;
        let quantity = 0;
        let unitLabel = "";

        switch (service.type) {
            case "lead": {
                quantity = leadsRequired;
                price = quantity * (service.unitPrice ?? 0);
                unitLabel = "lead";
                break;
            }

            case "meeting": {
                quantity = meetingsRequired;
                price = (service.basePrice ?? 0) + quantity * (service.unitPrice ?? 0);
                unitLabel = "meeting";
                break;
            }

            case "deal": {
                quantity = closeRequired;
                price = (service.basePrice ?? 0) + quantity * (service.unitPrice ?? 0);
                unitLabel = "deal";
                break;
            }

            case "invoice": {
                quantity = invoiceRequired;
                price = (service.basePrice ?? 0) + quantity * (service.unitPrice ?? 0);
                unitLabel = "invoice";
                break;
            }

            default:
                break;
        }

        return {
            ...service,
            price,
            quantity,
            unitLabel,
        };
    });
};
