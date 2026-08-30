import { useState, type CSSProperties, type KeyboardEvent, type ReactNode } from 'react'
import Button from '../../../System/Button/Button'
import Box from '../../../System/Layouts/Box/Box'
import Text from '../../../System/Texts/Text'
import leadImg from '../../../assets/Process/Lead/ChatGPT Image Aug 10, 2026, 07_04_09 PM.png'
import intentImg from '../../../assets/Process/Intent/ChatGPT Image Aug 11, 2026, 03_25_34 PM.png'
import meetingImg from '../../../assets/Process/Meeting/ChatGPT Image Aug 11, 2026, 08_25_23 PM.png'
import closerImg from '../../../assets/Process/Closer/ChatGPT Image Aug 11, 2026, 10_49_29 PM.png'
import collectionImg from '../../../assets/Funnel/ChatGPT Image Aug 12, 2026, 08_09_01 PM.png'
import './Process.css'

type Step = {
    id: string
    label: string
    color: string
    background: string
    title: string
    points: [string, string, string, string]
    image: string
    imageAlt: string
}

const STEPS: Step[] = [
    {
        id: 'lead',
        label: 'Lead generation',
        color: '#ec4899',
        background: 'linear-gradient(180deg, #f9a8d4 0%, #ec4899 28%, #be185d 62%, #831843 100%)',
        title: 'From Zero to Qualified Leads Powered by AI',
        points: ['AI prospecting', 'Human qualification', 'Faster bookings', 'Clear reporting'],
        image: leadImg,
        imageAlt: 'AI-powered lead generation workflow',
    },
    {
        id: 'intent',
        label: 'Intent',
        color: '#f97316',
        background: 'linear-gradient(180deg, #fdba74 0%, #fb923c 28%, #ea580c 62%, #9a3412 100%)',
        title: 'Target the buyers already in market',
        points: ['Spot active buyers', 'Prioritize hot leads', 'Trigger faster outreach', 'Improve close rates'],
        image: intentImg,
        imageAlt: 'Buyer intent targeting',
    },
    {
        id: 'meeting',
        label: 'Meeting booking',
        color: '#3b82f6',
        background: 'linear-gradient(180deg, #93c5fd 0%, #60a5fa 22%, #2563eb 58%, #1e3a8a 100%)',
        title: 'Turn conversations into booked meetings',
        points: ['Higher conversion rates', 'AI scheduling', 'Smoother coordination', 'Human follow-up'],
        image: meetingImg,
        imageAlt: 'Meeting booking calendar',
    },
    {
        id: 'closer',
        label: 'Closer',
        color: '#10b981',
        background: 'linear-gradient(180deg, #6ee7b7 0%, #34d399 28%, #059669 62%, #064e3b 100%)',
        title: 'Turn qualified interest into closed revenue',
        points: ['AI-powered qualification', 'Human-driven closing', 'Seamless integration', 'Improved conversion rates'],
        image: closerImg,
        imageAlt: 'Sales closing workflow',
    },
    {
        id: 'collection',
        label: 'Collections',
        color: '#ef4444',
        background: 'linear-gradient(180deg, #fca5a5 0%, #f87171 28%, #dc2626 62%, #7f1d1d 100%)',
        title: 'Turn outstanding invoices into collected revenue',
        points: ['Payment follow-up', 'Invoice collection', 'Overdue recovery', 'Recurring payment collection'],
        image: collectionImg,
        imageAlt: 'Invoice collection workflow',
    },
]

const ICONS: Record<string, ReactNode> = {
    lead: (
        <Text color='Lite'>Find Revenue</Text>
    ),
    intent: (
        <Text color='Lite'>Verify Revenue</Text>
    ),
    meeting: (
        <Text color='Lite'>Book Revenue</Text>
    ),
    closer: (
        <Text color='Lite'>Close Revenue</Text>
    ),
    collection: (
        <Text color='Lite'>Collect Revenue</Text>
    ),
}

const Process = () => {
    const [activeIndex, setActiveIndex] = useState(2)
    const step = STEPS[activeIndex]

    const onTabKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return
        event.preventDefault()
        const delta = event.key === 'ArrowRight' ? 1 : -1
        const next = (activeIndex + delta + STEPS.length) % STEPS.length
        setActiveIndex(next)
        const nextTab = event.currentTarget.querySelector<HTMLButtonElement>(`[data-step="${STEPS[next].id}"]`)
        nextTab?.focus()
    }

    return (
        <div className="Process" style={{ background: step.background }}>
            <div className="Process-Inner">
                <div className="Process-Tabs" role="tablist" aria-label="Sales process" onKeyDown={onTabKeyDown}>
                    {STEPS.map((item, index) => (
                        <button
                            key={item.id}
                            type="button"
                            role="tab"
                            data-step={item.id}
                            className={`Process-Tab${index === activeIndex ? ' is-active' : ''}`}
                            style={{ '--tab-color': item.color } as CSSProperties}
                            aria-selected={index === activeIndex}
                            aria-controls="process-panel"
                            id={`process-tab-${item.id}`}
                            tabIndex={index === activeIndex ? 0 : -1}
                            onClick={() => setActiveIndex(index)}
                        >
                            {ICONS[item.id]}
                            <span className="Process-TabLabel">{item.label}</span>
                        </button>
                    ))}
                </div>

                <section
                    className="Process-Card"
                    role="tabpanel"
                    id="process-panel"
                    aria-labelledby={`process-tab-${step.id}`}
                >
                    <Box className="Process-Info" variant="Transparent">
                        <Text textType="H2" color="White">{step.title}</Text>
                        <Box variant="Transparent" className="Process-Points">
                            {step.points.map((point) => (
                                <Text key={point} textType="H4" color="Lite">{point}</Text>
                            ))}
                        </Box>
                        <Button variant="Secondary" rounded="Bubble">
                            <a style={{ color: '#ffffff', textDecoration: 'none' }} href="https://cal.com/samisher/meeting" target="_blank" rel="noopener noreferrer">Book demo</a>
                        </Button>
                    </Box>
                    <Box className="Process-Img">
                        <img src={step.image} alt={step.imageAlt} loading="lazy" decoding="async" />
                    </Box>
                </section>
            </div>
        </div>
    )
}

export default Process
