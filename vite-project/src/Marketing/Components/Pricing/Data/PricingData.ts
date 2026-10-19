import img1 from '../../../../assets/Hero/Component 23.svg'
import img2 from '../../../../assets/Hero/Component 24.svg'
import img3 from '../../../../assets/Hero/Component 25.svg'
import img4 from '../../../../assets/Hero/Component 26.svg'

export interface Pricing {
    icons: string
    name: string
    summery: string
    item: string[]
    bcolor: string
    color: string

    // Pricing logic
    type: 'lead' | 'meeting' | 'deal' | 'invoice'

    // configurable rates
    basePrice?: number
    unitPrice?: number
}

const pricingData: Pricing[] = [
    {
        icons: img4,
        name: 'Scout',
        type: 'lead',

        summery:
            'Find high quality lead and accurate intent',

        item: [
            '100+ Channel',
            'Intent manager',
            'Prospect verification'
        ],

        bcolor: '#0B3CFF',
        color: 'white',

        // $0.20 per lead
        unitPrice: 0.20
    },

    {
        icons: img3,
        name: 'Scheduler',
        type: 'meeting',

        summery:
            'Book meetings with Decision-Makers',

        item: [
            'All in Scout',
            'Meeting booking'
        ],

        bcolor: '#FE05EE',
        color: 'white',

        // $20 minimum/base price
        basePrice: 20,

        // Example: $2 per booked meeting
        unitPrice: 2
    },

    {
        icons: img2,
        name: 'Closer',
        type: 'deal',

        summery:
            'Close deal',

        item: [
            '$20 base campaign price',
            'Pay per closed deal'
        ],

        bcolor: '#D0FE04',
        color: 'black',

        basePrice: 20,

        // Example rate — easy to change later
        unitPrice: 50
    },

    {
        icons: img1,
        name: 'Collector',
        type: 'invoice',

        summery:
            'Pay based on invoices successfully sent.',

        item: [
            '$20 base campaign price',
            'Pay per invoice'
        ],

        bcolor: '#05FF0E',
        color: 'black',

        basePrice: 20,

        // Example rate
        unitPrice: 10
    }
]

export default pricingData