import { useState, type CSSProperties, type KeyboardEvent, type ReactNode } from 'react'
import Button from '../../../Design/Button/Button'
import Box from '../../../Design/Container/Box/Box'
import Text from '../../../Design/Texts/Text'
import ProcessData from './ProcessData'
import './Process.css'
import Container from '../../../Design/Container/Container'
import Image from '../../../Design/Img/Img'



const Process = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    
    const [activePoint, setActivePoint] = useState<number | null>(0)
    const step = ProcessData[activeIndex]
    const ImageHigh = activePoint === null ? step.img[0] : (step.img[activePoint] ?? step.img[0])
    const Tital = activePoint === null ? step.title[0] : (step.title[activePoint] ?? step.title[0])
    const Alt = activePoint === null ? step.alt[0] : `${step.alt[activePoint]} – ${step.alt[0]}`

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
        const nextTab = event.currentTarget.querySelector<HTMLButtonElement>(`[data-step="${ProcessData[next].name}"]`)
        nextTab?.focus()
    }

    return (
        <div className="Process" style={{ background: step.background }}>
            <div className="Process-Inner">
                <div className="Process-Tabs" role="tablist" aria-label="Sales process" onKeyDown={onTabKeyDown}>
                    {ProcessData.map((item, index) => (
                        <button
                            key={item.name}
                            type="button"
                            role="tab"
                            data-step={item.name}
                            className={`Process-Tab${index === activeIndex ? ' is-active' : ''}`}
                            style={{ '--tab-color': item.color } as CSSProperties}
                            aria-selected={index === activeIndex}
                            aria-controls="process-panel"
                            id={`process-tab-${item.name}`}
                            tabIndex={index === activeIndex ? 0 : -1}
                            onClick={() => selectStep(index)}
                        >
                            <Image width={30} height={30} highRes={item.icon} lowRes={item.icon}/>
                             {item.name}
                            
                            <span className="Process-TabLabel">{item.name}</span>
                        </button>
                    ))}
                </div>

                <Container className='Process-Card-Outer'>
                    <section
                        className="Process-Card"
                        role="tabpanel"
                        id="process-panel"
                        aria-labelledby={`process-tab-${step.name}`}
                    >

                        <Box className="Process-Info" variant="Transparent">
                            <Container color='Transparent'>
                                <Text textType="H2" weight='400' color="Black" font='Geist'>{Tital}</Text>
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
                            <Image highRes={ImageHigh} lowRes={ImageHigh} alt={Alt}/>

                        </Box>

                    </section>
                </Container>
            </div>
        </div>
    )
}

export default Process
