import { useEffect, useMemo, useState } from 'react'
import Button from '../../../Design/Button/Button'
import Container from '../../../Design/Container/Container'
import './Chatgpt.css'

import icon1 from '../../../assets/Hero/Component 23.svg'
import icon2 from '../../../assets/Hero/Component 24.svg'
import icon3 from '../../../assets/Hero/Component 25.svg'
import icon4 from '../../../assets/Hero/Component 26.svg'


type CategoryId = 'agent' | 'tool' | 'sales' | 'ai'

type Category = {
    id: CategoryId
    icon:string
    label: string
    prompt: string
}

const categories: Category[] = [
    {
        icon: icon1,
        id: 'agent',
        label: 'Find Lead',
        prompt:
            'Act as a senior sales agent and draft a warm, high-converting outbound email to a founder who is actively evaluating AI automation tools for their team.',
    },
    {
        icon: icon2,
        id: 'tool',
        label: 'Book Meeting',
        prompt:
            'Design a practical AI workflow using the best tool stack for lead discovery, qualification, and scheduling across multiple channels without adding operational complexity.',
    },
    {
        icon: icon3,
        id: 'sales',
        label: 'Close deal',
        prompt:
            'Create a concise sales playbook for a B2B startup: target ICP, value prop, objection handling, and a three-step outreach flow aimed at securing discovery calls.',
    },
    {
        icon: icon4,
        id: 'ai',
        label: 'Send Invoice',
        prompt:
            'Explain the most effective way to deploy AI for revenue operations, including automation opportunities, risks, and metrics to track during the first 90 days.',
    },
]

const AUTO_SWITCH_MS = 5000

const Chatbot = () => {
    const [activeCategory, setActiveCategory] = useState<CategoryId>('agent')
    const [drafts, setDrafts] = useState<Record<CategoryId, string>>({
        agent: categories[0].prompt,
        tool: categories[1].prompt,
        sales: categories[2].prompt,
        ai: categories[3].prompt,
    })
    const [isTextareaFocused, setIsTextareaFocused] = useState(false)
    const [progress, setProgress] = useState(100)

    const activeCategoryData = useMemo(
        () =>
            categories.find((category) => category.id === activeCategory) ??
            categories[0],
        [activeCategory],
    )

    const currentValue = drafts[activeCategory]

    const handleCategorySelect = (categoryId: CategoryId) => {
        const selectedCategory = categories.find((category) => category.id === categoryId)

        if (!selectedCategory) return

        setActiveCategory(categoryId)
        setDrafts((previousDrafts) => ({
            ...previousDrafts,
            [categoryId]: selectedCategory.prompt,
        }))
        setProgress(100)
    }

    useEffect(() => {
        if (isTextareaFocused) return undefined

        let startedAt = Date.now()

        const timerId = window.setInterval(() => {
            const elapsed = Date.now() - startedAt
            const nextProgress = Math.max(0, 100 - (elapsed / AUTO_SWITCH_MS) * 100)

            setProgress(nextProgress)

            if (nextProgress <= 0) {
                const currentIndex = categories.findIndex(
                    (category) => category.id === activeCategory,
                )
                const nextIndex = (currentIndex + 1) % categories.length
                const nextCategory = categories[nextIndex]

                setActiveCategory(nextCategory.id)
                setProgress(100)
                startedAt = Date.now()
            }
        }, 80)

        return () => window.clearInterval(timerId)
    }, [activeCategory, isTextareaFocused])

    const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const nextValue = event.target.value

        setDrafts((previousDrafts) => ({
            ...previousDrafts,
            [activeCategory]: nextValue,
        }))
    }

    return (
        <Container className="ChatBot" color='Secondary'>
            <Container className="ChatBot-shell">
                <Container className="ChatBot-header">
                    <Container className="ChatBot-pills" aria-label="Chat categories">
                        {categories.map((category) => {
                            const isActive = activeCategory === category.id

                            return (
                                <button
                                    key={category.id}
                                    type="button"
                                    className={`ChatBot-pill ChatBot-pill--${category.id} ${isActive ? 'is-active' : ''}`}
                                    onClick={() => handleCategorySelect(category.id)}
                                >
                                    <img src={category.icon} alt="" height={20} width={20} />
                                    {category.label}
                                    <span
                                        className={`ChatBot-pill-progress ${isActive ? 'is-visible' : ''}`}
                                        aria-hidden="true"
                                    >
                                        <span
                                            className="ChatBot-pill-progress-fill"
                                            style={{
                                                '--progress-angle': isActive
                                                    ? `${(progress / 100) * 360}deg`
                                                    : '0deg',
                                            } as React.CSSProperties}
                                        />
                                    </span>
                                </button>
                            )
                        })}
                    </Container>

                   
                </Container>

                <textarea
                    className="ChatBot-textarea"
                    value={currentValue}
                    onChange={handleTextareaChange}
                    onFocus={() => setIsTextareaFocused(true)}
                    onBlur={() => setIsTextareaFocused(false)}
                    aria-label={`${activeCategoryData.label} prompt`}
                />

                <Container className="ChatBot-actions">
                    <Button
                        variant="Primary"
                        rounded="Round"
                        size="Large"
                        
                        onClick={() => {}}
                    >
                        Start Autopilot
                    </Button>
                </Container>
            </Container>
        </Container>
    )
}

export default Chatbot