import dummy from '../../../assets/Services/dummy.svg'

export interface SubService {
    title: string
    desc: string
    image: string
}

export interface ServiceItem {
    label: string
    title: string
    subservices: SubService[]
}

export const services: ServiceItem[] = [
    {
        label: 'Lead Type',
        title: 'Lead Generation',
        subservices: [
            { title: 'Marketing Qualified Leads (MQL)', desc: 'Leads showing early interest and engagement with your marketing.', image: dummy },
            { title: 'Sales Qualified Leads (SQL)', desc: 'Prospects vetted for sales readiness and a relevant business need.', image: dummy },
            { title: 'Highly Qualified Leads', desc: 'High-fit prospects matched against your ideal customer profile.', image: dummy },
            { title: 'Appointment-Ready Leads', desc: 'Qualified contacts ready to take the next step with your sales team.', image: dummy },
        ],
    },
    {
        label: 'Closing Model',
        title: 'Closing',
        subservices: [
            { title: 'Inbound Closing', desc: 'Convert prospects who come to you through marketing and referrals.', image: dummy },
            { title: 'Outbound Closing', desc: 'Move proactively sourced opportunities through a focused sales process.', image: dummy },
            { title: 'Inbound + Outbound', desc: 'Unify both motions so no qualified opportunity is left behind.', image: dummy },
            { title: 'Full-Cycle Sales', desc: 'Support the complete journey from first touch to signed customer.', image: dummy },
        ],
    },
    {
        label: 'Meeting Type',
        title: 'Meeting Booking',
        subservices: [
            { title: 'Qualified Sales Meetings', desc: 'Conversations with prospects who meet your agreed qualification criteria.', image: dummy },
            { title: 'Decision-Maker Meetings', desc: 'Meetings booked with the people who can influence or approve the deal.', image: dummy },
            { title: 'Demo Meetings', desc: 'Product demonstrations with prospects ready to see your solution.', image: dummy },
            { title: 'Discovery Meetings', desc: 'Early-stage conversations to uncover needs, fit, and opportunity.', image: dummy },
            { title: 'Appointment Setting', desc: 'A reliable calendar of well-matched conversations for your team.', image: dummy },
        ],
    },
    {
        label: 'Collection Type',
        title: 'Collections',
        subservices: [
            { title: 'Payment Follow-Up', desc: 'Keep payments moving with timely, professional follow-up.', image: dummy },
            { title: 'Invoice Collection', desc: 'Track and collect outstanding invoices with a clear process.', image: dummy },
            { title: 'Overdue Payment Recovery', desc: 'Re-engage overdue accounts and work toward recovery.', image: dummy },
            { title: 'Recurring Payment Collection', desc: 'Maintain predictable recurring collections and customer communication.', image: dummy },
            { title: 'Full Collection Management', desc: 'A complete service for managing collection activity end to end.', image: dummy },
        ],
    },
]
