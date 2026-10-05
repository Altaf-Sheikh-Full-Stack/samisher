import { useState, type CSSProperties, type KeyboardEvent, type ReactNode } from 'react'
import Button from '../../../Design/Button/Button'
import Box from '../../../Design/Container/Box/Box'
import Text from '../../../Design/Texts/Text'
import leadImg from '../../../assets/Process/Lead/Component 4 (1).webp'
import leadVerifyImg from '../../../assets/Process/Lead/ChatGPT Image Aug 10, 2026, 07_04_09 PM.png'
import intentImg from '../../../assets/Process/Intent/Component 5.webp'
import intentReportImg from '../../../assets/Process/Intent/ChatGPT Image Aug 11, 2026, 03_25_34 PM.png'
import meetingImg from '../../../assets/Process/Meeting/Component 6.webp'
import meetingScheduleImg from '../../../assets/Process/Meeting/Component 7.webp'
import meetingCoordinationImg from '../../../assets/Process/Meeting/ChatGPT Image Aug 11, 2026, 08_25_23 PM.png'
import closerImg from '../../../assets/Process/Closer/Component 7.webp'
import closerQualificationImg from '../../../assets/Process/Closer/ChatGPT Image Aug 11, 2026, 10_49_29 PM.png'
import collectionImg from '../../../assets/Process/Money/Component 8.webp'
import './Process.css'

type Step = {
    id: string
    label: string
    color: string
    background: string
    title: string
    points: [string, string, string, string]
    pointImages: [string, string, string, string]
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
        points: ['Find ICP Leads', 'Verify Contact details', 'Create Report', 'Find Intent'],
        pointImages: [leadImg, leadVerifyImg, intentReportImg, intentImg],
        image: leadImg,
        imageAlt: 'AI-powered lead generation workflow',
    },
   
    {
        id: 'meeting',
        label: 'Meeting booking',
        color: '#3b82f6',
        background: 'linear-gradient(180deg, #93c5fd 0%, #60a5fa 22%, #2563eb 58%, #1e3a8a 100%)',
        title: 'Turn conversations into booked meetings',
        points: ['Higher conversion rates', 'AI scheduling', 'Smoother coordination', 'Human follow-up'],
        pointImages: [meetingImg, meetingScheduleImg, meetingCoordinationImg, meetingImg],
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
        pointImages: [closerImg, closerQualificationImg, closerImg, closerImg],
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
        pointImages: [collectionImg, collectionImg, collectionImg, collectionImg],
        image: collectionImg,
        imageAlt: 'Invoice collection workflow',
    },
]

const ICONS: Record<string, ReactNode> = {
    lead: (
        <Text color='Dark' >Prospecting</Text>
    ),
    meeting: (
        <Text color='Dark'>Meeting booked</Text>
    ),
    closer: (
        <Text color='Dark' >Close deal</Text>
    ),
    collection: (
        <Text color='Dark'>Collect Revenue</Text>
    ),
}

const Process = () => {
    const [activeIndex, setActiveIndex] = useState(2)
    // Default: the first point button is selected/active for every step.
    const [activePoint, setActivePoint] = useState<number | null>(0)
    const step = STEPS[activeIndex]
    const displayImage = activePoint === null ? step.image : (step.pointImages[activePoint] ?? step.image)
    const displayAlt = activePoint === null ? step.imageAlt : `${step.points[activePoint]} – ${step.imageAlt}`

    const selectStep = (index: number) => {
        setActiveIndex(index)
        setActivePoint(0)
    }

    const onTabKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return
        event.preventDefault()
        const delta = event.key === 'ArrowRight' ? 1 : -1
        const next = (activeIndex + delta + STEPS.length) % STEPS.length
        selectStep(next)
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
                            onClick={() => selectStep(index)}
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
                        <Text textType="H2" weight='400' color="White" font='Roboto'>{step.title}</Text>
                        <Box variant="Transparent" className="Process-Points">
                            {step.points.map((point, index) => (
                                <Button
                                    key={point}
                                    size='Large'
                                    variant='Transparent'
                                    className={index === activePoint ? 'is-active' : undefined}
                                    style={index === activePoint ? ({ '--point-color': step.color } as CSSProperties) : undefined}
                                    onClick={() => setActivePoint(index)}
                                >
                                    {point}
                                </Button>
                            ))}
                        </Box>

                    </Box>
                    <Box className="Process-Img">
                        <img src={displayImage} alt={displayAlt} loading="lazy" decoding="async" />
                    </Box>
                </section>
            </div>
        </div>
    )
}

export default Process
