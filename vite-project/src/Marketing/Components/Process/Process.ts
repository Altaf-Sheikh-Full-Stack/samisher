import scoutLow from '../../../assets/Process/SCOUT/Low/SCOUNT_LOW.webp'
import scoutHigh from '../../../assets/Process/SCOUT/High/SCOUT_HIGH.webp'

interface ProcessData  {
    id: string
    label: string
    color: string
    background: string
    title: string
    button: [string, string, string, string]
    high: [string]
    low: [string]
    image: string
    imageAlt: string
}



const ProcessData: ProcessData[] = [
    {
        id: 'lead',
        label: 'Lead generation',
        color: '#ec4899',
        background: 'linear-gradient(180deg, #f9a8d4 0%, #ec4899 28%, #be185d 62%, #831843 100%)',
        title: 'From Zero to Qualified Leads Powered by AI',
        button: ['Find Prospect', 'Verify details', 'Find Intent', 'Execute Outreach'],
        high: [scoutHigh],
        low: [scoutLow],
        image: scoutHigh,
        imageAlt: 'AI-powered lead generation workflow',
    },

     {
        id: 'lead',
        label: 'Lead generation',
        color: '#ec4899',
        background: 'linear-gradient(180deg, #f9a8d4 0%, #ec4899 28%, #be185d 62%, #831843 100%)',
        title: 'From Zero to Qualified Leads Powered by AI',
        button: ['Find Prospect', 'Verify details', 'Find Intent', 'Execute Outreach'],
        high: [scoutHigh],
        low: [scoutLow],
        image: scoutHigh,
        imageAlt: 'AI-powered lead generation workflow',
    },

    // {
    //     id: 'meeting',
    //     label: 'Meeting booking',
    //     color: '#3b82f6',
    //     background: 'linear-gradient(180deg, #93c5fd 0%, #60a5fa 22%, #2563eb 58%, #1e3a8a 100%)',
    //     title: 'Turn conversations into booked meetings',
    //     points: ['Higher conversion rates', 'AI scheduling', 'Smoother coordination', 'Human follow-up'],
    //     pointImages: [meetingImg, meetingScheduleImg, meetingCoordinationImg, meetingImg],
    //     image: meetingImg,
    //     imageAlt: 'Meeting booking calendar',
    // },
    // {
    //     id: 'closer',
    //     label: 'Closer',
    //     color: '#10b981',
    //     background: 'linear-gradient(180deg, #6ee7b7 0%, #34d399 28%, #059669 62%, #064e3b 100%)',
    //     title: 'Turn qualified interest into closed revenue',
    //     points: ['AI-powered qualification', 'Human-driven closing', 'Seamless integration', 'Improved conversion rates'],
    //     pointImages: [closerImg, closerQualificationImg, closerImg, closerImg],
    //     image: closerImg,
    //     imageAlt: 'Sales closing workflow',
    // },
    // {
    //     id: 'collection',
    //     label: 'Collections',
    //     color: '#ef4444',
    //     background: 'linear-gradient(180deg, #fca5a5 0%, #f87171 28%, #dc2626 62%, #7f1d1d 100%)',
    //     title: 'Turn outstanding invoices into collected revenue',
    //     points: ['Payment follow-up', 'Invoice collection', 'Overdue recovery', 'Recurring payment collection'],
    //     pointImages: [collectionImg, collectionImg, collectionImg, collectionImg],
    //     image: collectionImg,
    //     imageAlt: 'Invoice collection workflow',
    // },
]

export default ProcessData