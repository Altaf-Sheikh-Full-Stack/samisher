import findLow from '../../../assets/Process/SCOUT/Low/FInd.webp'
import intentLow from '../../../assets/Process/SCOUT/Low/Intent.webp'
import verifyLow from '../../../assets/Process/SCOUT/Low/Verify.webp'
import findHigh from '../../../assets/Process/SCOUT/High/FInd (1).webp'
import intentHigh from '../../../assets/Process/SCOUT/High/Intent (1).webp'
import verifyHigh from '../../../assets/Process/SCOUT/High/Verify (1).webp'


import icon1 from '../../../assets/Hero/Component 23.svg'
import icon2 from '../../../assets/Hero/Component 24.svg'
import icon3 from '../../../assets/Hero/Component 25.svg'
import icon4 from '../../../assets/Hero/Component 26.svg'


interface ProcessData {
    name: string
    icon: string
    color: string
    background: string
    title: string
    button: [string, string, string]
    high: [string, string, string]
    low: [string, string, string]
    alt: [string]
}



const ProcessData: ProcessData[] = [
    {
        name: 'SCOUT',
        icon: icon1,
        color: '#ec4899',
        background: 'linear-gradient(180deg, #f9a8d4 0%, #ec4899 28%, #be185d 62%, #831843 100%)',
        title: 'From Zero to Qualified Leads Powered by AI',
        button: ['Find Prospect', 'Verify details', 'Find Intent', ],
        high: [findHigh,verifyHigh, intentHigh,  ],
        low: [findLow, verifyLow, intentLow],
        alt: ['AI-powered lead generation workflow'],
    },

    {
        name: 'SCHEDULER',
        icon: icon2,
        color: '#3b82f6',
        background: 'linear-gradient(180deg, #93c5fd 0%, #60a5fa 22%, #2563eb 58%, #1e3a8a 100%)',
        title: 'From Zero to Qualified Leads Powered by AI',
        button: ['Find Prospect', 'Verify details', 'Find Intent'],
        high: [findHigh,verifyHigh, intentHigh,  ],
        low: [findLow, verifyLow, intentLow],
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
