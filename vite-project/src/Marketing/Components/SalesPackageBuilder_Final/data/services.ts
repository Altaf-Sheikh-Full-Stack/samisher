import type { ServiceDefinition } from "../types";
import img1 from '../../../../assets/Pricing/Slice 2 (2).png';
import img2 from '../../../../assets/Pricing/Slice 2 (3).png';


export const serviceDefinitions: ServiceDefinition[] = [
  {
    id: "lead-generation",
    name: "Lead Generation",
    img: img1,
    description: "Qualified prospects that match your target customer profile.",
    resultUnit: "leads",
    solutions: [
      { id: "mql", label: "Marketing Qualified Leads (MQL)" },
      { id: "sql", label: "Sales Qualified Leads (SQL)" },
      { id: "highly-qualified", label: "Highly Qualified Leads" },
      { id: "appointment-ready", label: "Appointment-Ready Leads" },
      { id: "custom", label: "Custom / Other" },
    ],
  },
  {
    id: "meeting-booking",
    name: "Meeting Booking",
    img: img2,
    description: "Qualified sales conversations placed on your calendar.",
    resultUnit: "meetings",
    solutions: [
      { id: "qualified-sales", label: "Qualified Sales Meetings" },
      { id: "decision-maker", label: "Decision-Maker Meetings" },
      { id: "demo", label: "Demo Meetings" },
      { id: "discovery", label: "Discovery Meetings" },
      { id: "appointment-setting", label: "Appointment Setting" },
      { id: "custom", label: "Custom / Other" },
    ],
  },
  {
    id: "closer",
    name: "Closer Service",
    img: img1,
    description: "Sales execution from opportunity through close.",
    resultUnit: "deals",
    solutions: [
      { id: "inbound-closing", label: "Inbound Closing" },
      { id: "outbound-closing", label: "Outbound Closing" },
      { id: "inbound-outbound", label: "Inbound + Outbound" },
      { id: "full-cycle", label: "Full-Cycle Sales" },
      { id: "custom", label: "Custom / Other" },
    ],
  },
  {
    id: "collection",
    name: "Collection Service",
    img: img1,
    description: "Payment follow-up and recovery for outstanding receivables.",
    resultUnit: "collections",
    solutions: [
      { id: "payment-follow-up", label: "Payment Follow-Up" },
      { id: "invoice-collection", label: "Invoice Collection" },
      { id: "overdue-recovery", label: "Overdue Payment Recovery" },
      { id: "recurring-collection", label: "Recurring Payment Collection" },
      { id: "full-management", label: "Full Collection Management" },
      { id: "custom", label: "Custom / Other" },
    ],
  },
];

export const industryOptions = [
  "SaaS / Software",
  "Professional Services",
  "Marketing / Agencies",
  "Finance / FinTech",
  "Healthcare",
  "Manufacturing",
  "Real Estate",
  "E-commerce",
  "Other",
];

export const countryOptions = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Europe",
  "India",
  "Middle East",
  "Other",
];

export const companySizeOptions = [
  "1–10",
  "11–50",
  "51–200",
  "201–500",
  "501–1,000",
  "1,001+",
];

export const marketOptions = [
  "Broad market",
  "Specific niche",
  "Highly competitive niche",
  "Enterprise / strategic",
];

export const decisionMakerOptions = [
  "Relevant contact",
  "Manager",
  "Director / VP",
  "Founder / C-Level",
  "Procurement",
  "Multiple decision-makers",
];

export const closingSourceOptions = [
  "Leads we generate",
  "Meetings we book",
  "Your existing leads",
  "Your existing pipeline",
  "Combination",
];

export const collectionAgeOptions = [
  "Current / due soon",
  "1–30 days overdue",
  "31–90 days overdue",
  "91–180 days overdue",
  "180+ days overdue",
];
