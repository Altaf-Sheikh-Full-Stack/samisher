



const Difficulty: Record<string, Record<string, number>> = {
    industry: {
        software: 0.95,
        professional: 1.0,
        agency: 0.95,
        finance: 1.12,
        healthcare: 1.18,
        manufacturing: 1.1,
        other: 1.05,
    },
    country: {
        us: 1.0,
        uk: 0.98,
        ca: 0.98,
        au: 1.02,
        eu: 1.05,
        india: 0.82,
        other: 1.08,
    },
    company_size: {
        small: 0.88,
        mid: 1.0,
        large: 1.12,
        enterprise: 1.28,
    },
    market: {
        broad: 0.9,
        niche: 1.0,
        competitive: 1.15,
        enterprise: 1.3,
    },
}


export default Difficulty