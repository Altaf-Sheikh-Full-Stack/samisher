import type {
  ClosingKey,
  MarketKey,
  ServiceDefinition,
  ServiceId,
} from "./types";

/**
 * Fair per-result price bands. These are the honest, transparent Samisher
 * numbers you pay when a result is actually delivered.
 */
export const services: ServiceDefinition[] = [
  {
    id: "meetings",
    label: "Qualified meetings",
    headline: "Book conversations that can buy",
    copy: "Real prospects on your calendar — phone-verified, based in your market.",
    icon: "📅",
    unit: "meeting",
    unitPlural: "meetings",
    defaultValueMode: "recurring",
    valueLabel: "What is one new client worth to you per month?",
    valueHint: "The recurring monthly revenue one won customer brings.",
    valueExample: "e.g. 1,500",
    asksConversion: true,
    resultTypes: [
      {
        id: "qualified",
        label: "Qualified sales meetings",
        hint: "Verified fit, right buyer, engineering the call.",
        price: [20, 50],
        badge: "Most popular",
      },
      {
        id: "decision-maker",
        label: "Decision-maker meetings",
        hint: "Owner, Director or C-Suite who can say yes.",
        price: [50, 70],
      },
      {
        id: "demo",
        label: "Demo meetings",
        hint: "Your product in front of a matching audience.",
        price: [25, 50],
      },
      {
        id: "discovery",
        label: "Discovery meetings",
        hint: "The first warm conversation, quality-vetted.",
        price: [10, 30],
      },
      {
        id: "appointment",
        label: "Appointment setting",
        hint: "Volume of booked time from a targeted list.",
        price: [20, 50],
      },
    ],
  },
  {
    id: "leads",
    label: "Qualified leads",
    headline: "Pipeline of people who fit your ICP",
    copy: "Leads that match your profile, enriched and ready to contact.",
    icon: "🎯",
    unit: "lead",
    unitPlural: "leads",
    defaultValueMode: "recurring",
    valueLabel: "What is one new client worth to you per month?",
    valueHint: "The recurring monthly revenue from one won customer.",
    valueExample: "e.g. 1,500",
    asksConversion: true,
    resultTypes: [
      { id: "mql", label: "Marketing qualified leads", hint: "Matches your profile, early intent.", price: [3, 5] },
      { id: "sql", label: "Sales qualified leads", hint: "With verified contact details ready to call.", price: [5, 8] },
      { id: "highly-qualified", label: "Highly qualified leads", hint: "Budget signals and a clear fit for your offer.", price: [7, 11] },
      { id: "appointment-ready", label: "Appointment-ready leads", hint: "Pre-engaged and expecting your follow-up.", price: [8, 13] },
    ],
  },
  {
    id: "closer",
    label: "Deals closed",
    headline: "A full-cycle closer at your side",
    copy: "Your pipeline gets worked to the yes — not just filled.",
    icon: "✍️",
    unit: "deal",
    unitPlural: "deals",
    defaultValueMode: "oneTime",
    valueLabel: "Average value of one closed deal?",
    valueHint: "The revenue you book when a deal closes.",
    valueExample: "e.g. 5,000",
    asksConversion: false,
    fixedConversion: .20,
    resultTypes: [
      { id: "inbound", label: "Inbound closing", hint: "You provide the calls; we turn some into deals.", price: [120, 220] },
      { id: "outbound", label: "Outbound closing", hint: "We work contacts to find the buyer.", price: [220, 380] },
      { id: "full-cycle", label: "Full-cycle sales", hint: "From first touch to signed contract.", price: [170, 320] },
      { id: "custom", label: "Custom scope", hint: "Enterprise motion, crafted on a call.", price: [140, 260] },
    ],
  },
  {
    id: "collections",
    label: "Payments collected",
    headline: "Get paid for work already done",
    copy: "Follow-up and recovery for money conversations left unfinished.",
    icon: "💶",
    unit: "collection",
    unitPlural: "collections",
    defaultValueMode: "oneTime",
    valueLabel: "Average amount on one overdue payment?",
    valueHint: "The cash you get back when one invoice is paid.",
    valueExample: "e.g. 3,000",
    asksConversion: false,
    fixedConversion: 0.85,
    resultTypes: [
      { id: "follow-up", label: "Payment follow-up", hint: "Gentle but persistent reminder sequences.", price: [12, 22] },
      { id: "invoice", label: "Invoice collection", hint: "Real conversations with payers to fix schedules.", price: [40, 80] },
      { id: "overdue", label: "Overdue recovery", hint: "Escalation and renewal of stuck invoices.", price: [80, 150] },
      { id: "full", label: "Full receivables management", hint: "Everything between the trial and cash in the bank.", price: [110, 200] },
    ],
  },
];

/** Market realism — tighter targets cost less, harder fish cost more. */
export const marketOptions: {
  key: MarketKey;
  label: string;
  hint: string;
  factor: number;
}[] = [
  {
    key: "pinpoint",
    label: "Pinpointed audience",
    hint: "We know exactly who buys and where to find them",
    factor: 1,
  },
  {
    key: "mixed",
    label: "Clearly defined, mixed",
    hint: "A few segments, all easy to describe on a call",
    factor: 1.08,
  },
  {
    key: "exec",
    label: "Executives & long cycles",
    hint: "Directors, doctors or partners — hard to reach",
    factor: 1.22,
  },
];

/** Honest conversion presets: "× of 10 results become a paying client". */
export const closingOptions: {
  key: ClosingKey;
  label: string;
  hint: string;
  rate: number;
}[] = [
  { key: "0.1", label: "1 in 10", hint: "Cold pool, no pre-qualification", rate: 0.1 },
  { key: "0.2", label: "2 in 10", hint: "Decent pitch and follow-up", rate: 0.2 },
  { key: "0.3", label: "3 in 10", hint: "Great offer, strong close", rate: 0.3 },
  { key: "0.4", label: "4 in 10", hint: "High-converting offer", rate: 0.4 },
];

export function getService(id: ServiceId | null) {
  if (!id) return null;
  return services.find((service) => service.id === id) ?? null;
}