export interface Job {
  title: string
  type: string
  location: string
  compensation: string
  role: string[]
  requirements: string[]
  perks: string[]
}

const CareerData: Job[] = [
  {
    title: 'Sales Development Representative (SDR)',
    type: 'Commission-only',
    location: 'Remote · Worldwide',
    compensation: 'Earn $80k–$480k+ / year',

    role: [
      'Target prospects across the USA, UK & AU',
      'Prospect via calls, email & LinkedIn',
      'Book qualified sales meetings',
      'Work directly with founders',
    ],

    requirements: [
      '1+ year B2B outbound experience',
      'Strong communication skills',
      'CRM experience',
    ],

    perks: [
      'Unlimited earning potential',
      '$80k+ potential in year one',
      'Dedicated sales coaching',
      'Work from anywhere',
    ],
  },


  // {
  //   title: 'Senior SDR',
  //   type: 'Full-time',
  //   location: 'Remote · USA, UK, AU',
  //   compensation: 'Earn $60k – $110k+ / yr',
  //   role: [
  //     'Own outbound strategy for key accounts',
  //     'Deliver 20+ meetings per month',
  //     'Mentor junior SDRs',
  //     'Build team playbooks',
  //   ],
  //   requirements: [
  //     '3+ yrs B2B outbound sales',
  //     'Multi-channel outreach experience',
  //     'Coaching & communication skills',
  //   ],
  //   perks: [
  //     'Top Seniors earn $110k+',
  //     'Launch your own playbooks',
  //     'Path to SDR Manager',
  //     'Conference budget paid',
  //   ],
  // },
  // {
  //   title: 'Account Executive',
  //   type: 'Full-time',
  //   location: 'Remote · USA, UK, AU',
  //   compensation: 'Earn $70k – $150k+ / yr',
  //   role: [
  //     'Run discovery calls & demos',
  //     'Manage multi-account pipeline',
  //     'Build proposals & close',
  //     'Partner with SDRs on handoff',
  //   ],
  //   requirements: [
  //     '3+ yrs closing B2B deals',
  //     'Proven revenue attainment',
  //     'Discovery & negotiation skills',
  //   ],
  //   perks: [
  //     'Top AEs earn $150k+',
  //     'President\u2019s Club trip',
  //     'Full SDR & ops support',
  //     'Exposure to multiple industries',
  //   ],
  // },
  // {
  //   title: 'Sales Closer',
  //   type: 'Full-time',
  //   location: 'Remote · Global',
  //   compensation: 'Earn $4k – $8k+ / month',
  //   role: [
  //     'Close qualified leads',
  //     'Run structured discovery calls',
  //     'Prepare proposals & follow up',
  //     'Hit monthly targets',
  //   ],
  //   requirements: [
  //     '2+ yrs high-velocity closing',
  //     'Strong phone presence',
  //     'Resilient & clean follow-up',
  //   ],
  //   perks: [
  //     'Paid per signed deal',
  //     'Short deal cycles — close in weeks',
  //     'Path to AE + equity',
  //     'Flexible US/UK overlap',
  //   ],
  // },
  // {
  //   title: 'SDR Manager',
  //   type: 'Full-time',
  //   location: 'Remote · USA, UK, AU',
  //   compensation: 'Earn $90k – $120k+ / yr',
  //   role: [
  //     'Scale team from 6 to 20+',
  //     'Hire, onboard & coach SDRs',
  //     'Set targets & review pipeline',
  //     'Own performance dashboards',
  //   ],
  //   requirements: [
  //     '4+ yrs sales, 2+ leading SDRs',
  //     'Built high-performing teams',
  //     'Data literacy & coaching',
  //   ],
  //   perks: [
  //     'Quarterly team bonus',
  //     'Equity after 6 months',
  //     'Executive coaching budget',
  //     'Own a scaling function',
  //   ],
  // },
  // {
  //   title: 'Sales Ops Analyst',
  //   type: 'Full-time',
  //   location: 'Remote · Global',
  //   compensation: 'Earn $55k – $75k+ / yr',
  //   role: [
  //     'Own CRM admin & data quality',
  //     'Build team & client dashboards',
  //     'Automate SDR workflows',
  //     'Analyze outreach performance',
  //   ],
  //   requirements: [
  //     '2+ yrs sales ops or analytics',
  //     'Strong Excel / Sheets',
  //     'CRM experience',
  //   ],
  //   perks: [
  //     'Bonus tied to team results',
  //     'See the full sales engine',
  //     'Remote-first global team',
  //     'Certification budget',
  //   ],
  // },
]

export default CareerData