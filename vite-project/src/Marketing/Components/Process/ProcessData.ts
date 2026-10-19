
import find from '../../../assets/Process/SCOUT/Component 125.svg'
import intent from '../../../assets/Process/SCOUT/Component 126.svg'
import verify from '../../../assets/Process/SCOUT/Component 127.png'

import Outreach from '../../../assets/Process/SCHEDULER/Component 128.svg'
import FollowUp from '../../../assets/Process/SCHEDULER/Component 129.svg'
import Meeting from '../../../assets/Process/SCHEDULER/Component 130.svg'

import icon1 from '../../../assets/Hero/Component 23.svg'
import icon2 from '../../../assets/Hero/Component 24.svg'




interface ProcessData {
    name: string
    icon: string
    color: string
    background: string
    title: [string, string, string]
    button: [string, string, string]
    img: [string, string, string]
    alt: [string]
}



const ProcessData: ProcessData[] = [
    {
        name: 'SCOUT',
        icon: icon1,
        color: '#ec4899',
        background: 'linear-gradient(180deg, #f9a8d4 0%, #ec4899 28%, #be185d 62%, #831843 100%)',
        title: ['Find warm prospects across 100+ channels.', 'Verify millions of contacts in seconds.', 'Discover detailed prospect intent data.'],
        button: ['Find Prospect', 'Verify details', 'Find Intent', ],
        img: [find, intent, verify  ],
        alt: ['AI-powered lead generation workflow'],
    },

    {
        name: 'SCHEDULER',
        icon: icon2,
        color: '#3b82f6',
        background: 'linear-gradient(180deg, #93c5fd 0%, #60a5fa 22%, #2563eb 58%, #1e3a8a 100%)',
        title: ['Reach millions with personalized messages.', 'Personalized follow up to increase sales chance.', 'Booked meeting with right Decision-Maker.'],
        button: ['Outreach', 'Follow Up', 'Book meeting'],
        img: [Outreach, FollowUp, Meeting   ],
        alt: ['AI-powered lead generation workflow'],
    },

    // {
    //     name: 'CLOSER',
    //     icon: scoutHigh,
    //     color: '#10b981',
    //     background: 'linear-gradient(180deg, #6ee7b7 0%, #34d399 28%, #059669 62%, #064e3b 100%)',
    //     title: 'From Zero to Qualified Leads Powered by AI',
    //     button: ['Find Prospect', 'Verify details', 'Find Intent', 'Execute Outreach'],
    //     high: [scoutHigh],
    //     low: [scoutLow],
    //     alt: ['AI-powered lead generation workflow'],
    // },


    // {
    //     name: 'COLLECTOR',
    //     icon: scoutHigh,
    //     color: '#ef4444',
    //     background: 'linear-gradient(180deg, #fca5a5 0%, #f87171 28%, #dc2626 62%, #7f1d1d 100%)',
    //     title: 'From Zero to Qualified Leads Powered by AI',
    //     button: ['Find Prospect', 'Verify details', 'Find Intent', 'Execute Outreach'],
    //     high: [scoutHigh],
    //     low: [scoutLow],
    //     alt: ['AI-powered lead generation workflow'],
    // },
   
]

export default ProcessData
