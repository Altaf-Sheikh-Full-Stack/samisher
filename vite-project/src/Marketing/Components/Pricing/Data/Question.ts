import type Question from "../Types/Question"


const Questions: Question[] = [
    {
        id: "services",
        title: "What do you want us to handle?",
        subtitle: "Select every sales function you want managed.",
        type: "multi",
        options: [
            ["lead_generation", "Lead Generation"],
            ["meeting_booking", "Meeting Booking"],
            ["closing", "Closer Service"],
            ["collection", "Collection Service"],
        ],
    },
    {
        id: "industry",
        title: "What industry are you targeting?",
        subtitle: "Industry affects how difficult the target market is to reach.",
        options: [
            ["software", "Software / SaaS"],
            ["professional", "Professional Services"],
            ["agency", "Agencies"],
            ["finance", "Finance / Fintech"],
            ["healthcare", "Healthcare"],
            ["manufacturing", "Manufacturing"],
            ["other", "Other / Custom"],
        ],
    },
    {
        id: "country",
        title: "Which country are you selling in?",
        subtitle: "Market accessibility can affect the estimated cost per result.",
        options: [
            ["us", "United States"],
            ["uk", "United Kingdom"],
            ["ca", "Canada"],
            ["au", "Australia"],
            ["eu", "Europe"],
            ["india", "India"],
            ["other", "Other"],
        ],
    },
    {
        id: "company_size",
        title: "What company size are you targeting?",
        subtitle: "Larger accounts generally require more targeted outreach.",
        options: [
            ["small", "1–50 employees"],
            ["mid", "51–250 employees"],
            ["large", "251–1,000 employees"],
            ["enterprise", "1,001+ employees"],
        ],
    },
    {
        id: "market",
        title: "What type of market are you targeting?",
        subtitle: "Tell us how specific or competitive your target market is.",
        options: [
            ["broad", "Broad market"],
            ["niche", "Specific niche"],
            ["competitive", "Highly competitive niche"],
            ["enterprise", "Enterprise / strategic accounts"],
        ],
    },
    {
        id: "solution",
        title: "What specific result do you want?",
        subtitle: "We use this to estimate the right pay-per-result unit.",
        conditional: true,
    },
    {
        id: "selling_price",
        title: "What do you typically charge your customer?",
        subtitle: "An approximate selling price helps us estimate potential customer revenue.",
        type: "number",
        placeholder: "e.g. 2500",
    },
    {
        id: "conversion",
        title: "What percentage of qualified results usually become customers?",
        subtitle: "If you're unsure, use your best estimate. We'll keep the model conservative.",
        options: [
            ["low", "5%"],
            ["medium", "10%"],
            ["high", "15%"],
            ["very_high", "20%+"],
        ],
    },
]


export default Questions