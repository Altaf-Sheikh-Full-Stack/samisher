import dummy from '../../../assets/Services/dummy.svg'

export interface SubService {
    title: string
    desc: string
    image: string
}

export interface Service {
    title: string
    subservices: SubService[]
}

export interface Industry {
    label: string
    services: Service[]
}

export const industries: Industry[] = [
    {
        label: 'B2B SaaS',
        services: [
            {
                title: 'Lead Generation',
                subservices: [
                    { title: 'Marketing Qualified Leads', desc: 'Leads showing early interest and engagement with your marketing.', image: dummy },
                    { title: 'Sales Qualified Leads', desc: 'Prospects vetted for sales readiness and a relevant business need.', image: dummy },
                    { title: 'Appointment-Ready Leads', desc: 'Qualified contacts ready to take the next step with your sales team.', image: dummy },
                ],
            },
            {
                title: 'Meeting Booking',
                subservices: [
                    { title: 'Demo Meetings', desc: 'Product demonstrations with prospects ready to see your solution.', image: dummy },
                    { title: 'Discovery Meetings', desc: 'Early-stage conversations to uncover needs, fit, and opportunity.', image: dummy },
                    { title: 'Decision-Maker Meetings', desc: 'Meetings booked with the people who can influence or approve the deal.', image: dummy },
                ],
            },
            {
                title: 'Closing',
                subservices: [
                    { title: 'Outbound Closing', desc: 'Move proactively sourced opportunities through a focused sales process.', image: dummy },
                    { title: 'Inbound Closing', desc: 'Convert prospects who come to you through marketing and referrals.', image: dummy },
                    { title: 'Full-Cycle Sales', desc: 'Support the complete journey from first touch to signed customer.', image: dummy },
                ],
            },
        ],
    },
    {
        label: 'IT Services',
        services: [
            {
                title: 'Lead Generation',
                subservices: [
                    { title: 'IT Decision-Maker Leads', desc: 'Qualified contacts at companies that buy IT and managed services.', image: dummy },
                    { title: 'Sales Qualified Leads', desc: 'Prospects vetted for sales readiness and a relevant business need.', image: dummy },
                ],
            },
            {
                title: 'Meeting Booking',
                subservices: [
                    { title: 'Discovery Meetings', desc: 'Early-stage conversations to uncover needs, fit, and opportunity.', image: dummy },
                    { title: 'Demo Meetings', desc: 'Product demonstrations with prospects ready to see your solution.', image: dummy },
                ],
            },
            {
                title: 'Closing',
                subservices: [
                    { title: 'Outbound Closing', desc: 'Move proactively sourced opportunities through a focused sales process.', image: dummy },
                    { title: 'Full-Cycle Sales', desc: 'Support the complete journey from first touch to signed customer.', image: dummy },
                ],
            },
        ],
    },
    {
        label: 'AI Companies',
        services: [
            {
                title: 'Lead Generation',
                subservices: [
                    { title: 'Sales Qualified Leads', desc: 'Prospects vetted for sales readiness and a relevant business need.', image: dummy },
                    { title: 'Highly Qualified Leads', desc: 'High-fit prospects matched against your ideal customer profile.', image: dummy },
                ],
            },
            {
                title: 'Meeting Booking',
                subservices: [
                    { title: 'Demo Meetings', desc: 'Product demonstrations with prospects ready to see your solution.', image: dummy },
                    { title: 'Discovery Meetings', desc: 'Early-stage conversations to uncover needs, fit, and opportunity.', image: dummy },
                ],
            },
            {
                title: 'Closing',
                subservices: [
                    { title: 'Outbound Closing', desc: 'Move proactively sourced opportunities through a focused sales process.', image: dummy },
                    { title: 'Inbound Closing', desc: 'Convert prospects who come to you through marketing and referrals.', image: dummy },
                ],
            },
        ],
    },
    {
        label: 'B2B Agencies',
        services: [
            {
                title: 'Lead Generation',
                subservices: [
                    { title: 'Appointment-Ready Leads', desc: 'Qualified contacts ready to take the next step with your sales team.', image: dummy },
                    { title: 'Marketing Qualified Leads', desc: 'Leads showing early interest and engagement with your marketing.', image: dummy },
                ],
            },
            {
                title: 'Meeting Booking',
                subservices: [
                    { title: 'Discovery Meetings', desc: 'Early-stage conversations to uncover needs, fit, and opportunity.', image: dummy },
                    { title: 'Decision-Maker Meetings', desc: 'Meetings booked with the people who can influence or approve the deal.', image: dummy },
                ],
            },
            {
                title: 'Closing',
                subservices: [
                    { title: 'Inbound Closing', desc: 'Convert prospects who come to you through marketing and referrals.', image: dummy },
                    { title: 'Full-Cycle Sales', desc: 'Support the complete journey from first touch to signed customer.', image: dummy },
                ],
            },
        ],
    },
    {
        label: 'B2B Consulting',
        services: [
            {
                title: 'Lead Generation',
                subservices: [
                    { title: 'Sales Qualified Leads', desc: 'Prospects vetted for sales readiness and a relevant business need.', image: dummy },
                    { title: 'Highly Qualified Leads', desc: 'High-fit prospects matched against your ideal customer profile.', image: dummy },
                ],
            },
            {
                title: 'Meeting Booking',
                subservices: [
                    { title: 'Discovery Meetings', desc: 'Early-stage conversations to uncover needs, fit, and opportunity.', image: dummy },
                    { title: 'Decision-Maker Meetings', desc: 'Meetings booked with the people who can influence or approve the deal.', image: dummy },
                ],
            },
            {
                title: 'Closing',
                subservices: [
                    { title: 'Outbound Closing', desc: 'Move proactively sourced opportunities through a focused sales process.', image: dummy },
                    { title: 'Inbound + Outbound', desc: 'Unify both motions so no qualified opportunity is left behind.', image: dummy },
                ],
            },
        ],
    },
]
