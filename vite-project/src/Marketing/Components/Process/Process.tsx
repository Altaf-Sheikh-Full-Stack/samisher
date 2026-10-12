import { useState, type CSSProperties, type KeyboardEvent, type ReactNode } from 'react'
import Button from '../../../Design/Button/Button'
import Box from '../../../Design/Container/Box/Box'
import Text from '../../../Design/Texts/Text'
import ProcessData from './Process'
import './Process.css'
import Container from '../../../Design/Container/Container'
import Image from '../../../Design/Img/Img'

const ICONS: Record<string, ReactNode> = {
    lead: (
        <Text color='Dark' >SCOUT</Text>
    ),
    meeting: (
        <Text color='Dark'>SCHEDULER</Text>
    ),
    closer: (
        <Text color='Dark' >CLOSER</Text>
    ),
    collection: (
        <Text color='Dark'>COLLECTOR</Text>
    ),
}

const Process = () => {
    const [activeIndex, setActiveIndex] = useState(2)
    // Default: the first point button is selected/active for every step.
    const [activePoint, setActivePoint] = useState<number | null>(0)
    const step = ProcessData[activeIndex]
    const ImageHigh = activePoint === null ? step.image : (step.high[activePoint] ?? step.image)
    const ImageLow = activePoint === null ? step.image : (step.low[activePoint] ?? step.image)
    const displayAlt = activePoint === null ? step.imageAlt : `${step.button[activePoint]} – ${step.imageAlt}`

    const selectStep = (index: number) => {
        setActiveIndex(index)
        setActivePoint(0)
    }

    const onTabKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return
        event.preventDefault()
        const delta = event.key === 'ArrowRight' ? 1 : -1
        const next = (activeIndex + delta + ProcessData.length) % ProcessData.length
        selectStep(next)
        const nextTab = event.currentTarget.querySelector<HTMLButtonElement>(`[data-step="${ProcessData[next].id}"]`)
        nextTab?.focus()
    }

    return (
        <div className="Process" style={{ background: step.background }}>
            <div className="Process-Inner">
                <div className="Process-Tabs" role="tablist" aria-label="Sales process" onKeyDown={onTabKeyDown}>
                    {ProcessData.map((item, index) => (
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

                <Container className='Process-Card-Outer'>
                    <section
                        className="Process-Card"
                        role="tabpanel"
                        id="process-panel"
                        aria-labelledby={`process-tab-${step.id}`}
                    >

                        <Box className="Process-Info" variant="Transparent">
                            <Container color='Transparent'>
                                <Text textType="H2" weight='400' color="Dark" font='Geist'>{step.title}</Text>
                            </Container>

                            <Box variant="Transparent" className="Process-Points">
                                {step.button.map((point, index) => (
                                    <Button
                                        key={point}
                                        size='Large'
                                        variant='Secondary'
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
                            <Image highRes={ImageHigh} lowRes={ImageLow}/>

                        </Box>

                    </section>
                </Container>
            </div>
        </div>
    )
}

export default Process
