
interface PriceProp {
    product: string;
    price: string;
    icon:string;
    item: string[];
}

const PriceData: PriceProp[] = [
    {
        product: 'Scout',
        price: '$0.01',
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