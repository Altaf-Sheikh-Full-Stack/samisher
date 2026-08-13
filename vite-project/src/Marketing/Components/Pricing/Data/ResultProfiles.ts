import type  ResultProfile  from '../Types/ResultProfile'


const ResultProfiles: Record<string, ResultProfile> = {
    lead_generation: {
        label: "Qualified Lead",
        defaultCost: [70, 110],
        valueFactor: 0.22,
    },
    meeting_booking: {
        label: "Qualified Meeting",
        defaultCost: [140, 220],
        valueFactor: 0.55,
    },
    closing: {
        label: "Closed Deal",
        defaultCost: [450, 800],
        valueFactor: 1,
    },
    collection: {
        label: "Collected Payment",
        defaultCost: [90, 180],
        valueFactor: 0.35,
    },
}

export default ResultProfiles