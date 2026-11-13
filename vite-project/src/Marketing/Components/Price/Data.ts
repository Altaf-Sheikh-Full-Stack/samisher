
interface PriceProp {
    product: string;
    price: string;
    paid:string;
    icon:string;
    item: string[];
}

const PriceData: PriceProp[] = [
    {
        product: 'Scout',
        price: '$0.01',
        paid: 'per lead',
        icon: '',
        item: [
            'Leads (Social + Referrals + Internet)',
            'Contacts (Email + Phone)',
            'Buying Intent and Signals',
            'Pain Points',
            'Right Decision Makers',
        ],
    },
    {
        product: 'Scheduler',
        price: '$0.10',
        paid: 'per meeting',
        icon: '',
        item: [
            'Reach Prospects',
            'Personalized Outreach',
            'Automated Follow-Ups',
            'Qualify Leads',
            'Book Meetings',
        ],
    },
    {
        product: 'Closer',
        price: '$1.00',
        paid: 'per deal',
        icon: '',
        item: [
            'Run Demos',
            'Solve Pain Points',
            'Show Value',
            'Handle Objections',
            'Close Deals',
        ],
    },
    {
        product: 'Revenue',
        price: '$0.01',
        paid: 'per invoice',
        icon: '',
        item: [
            'Send Invoices',
            'Track Payments',
            'Payment Reminders',
            'Collect Revenue',
            'Retain Customers',
        ],
    },
];

export default PriceData