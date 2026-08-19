import { useState } from 'react'
import Section from '../../../System/Layouts/Section/Section'
import Text from '../../../System/Texts/Text'
import './FAQ.css'
import Box from '../../../System/Layouts/Box/Box'

const faqs = [
  {
    question: 'What is sales as a service?',
    answer: 'Sales as a service gives you an experienced outbound sales function without the cost and time of hiring an in-house team. We build your prospect list, start conversations, qualify interest, and book meetings directly into your calendar.',
  },
  {
    question: 'What does a qualified meeting mean?',
    answer: 'A qualified meeting is with a prospect that matches the ideal customer profile we agree on, has a relevant business need, and has confirmed a time to speak with your team. We align on these criteria before outreach begins.',
  },
  {
    question: 'Who is this service for?',
    answer: 'We work best with B2B companies that have a clear offer, a defined buyer, and the capacity to follow up on new opportunities. It is especially useful for founders and lean teams ready to create a predictable pipeline.',
  },
  {
    question: 'How quickly can we start?',
    answer: 'After a discovery call, we use onboarding to understand your offer, audience, positioning, and sales process. Once messaging and targeting are approved, outreach can begin and we keep you updated throughout the launch.',
  },
  {
    question: 'Which markets and channels do you cover?',
    answer: 'Our SDR team focuses on B2B prospects in the USA, UK, and Australia. We combine targeted prospecting with thoughtful outbound outreach, then manage replies and booking so your team can focus on the sales conversation.',
  },
  {
    question: 'How does pricing work?',
    answer: 'Pricing is based on qualified meetings, so you pay for outcomes rather than promises or a large fixed sales-team overhead. Your meeting price and qualification criteria are confirmed before the campaign launches.',
  },
  {
    question: 'Can you work alongside our existing sales team?',
    answer: 'Yes. We can act as an extension of your team—filling the top of the funnel, booking meetings into your preferred calendar, and fitting our handoff into the CRM and follow-up process you already use.',
  },
  {
    question: 'What happens if a prospect cancels or is not a fit?',
    answer: 'We review meeting quality against the criteria agreed at onboarding. If a meeting does not meet those criteria, we address it transparently and use the feedback to improve targeting and qualification going forward.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
   <Section className='FAQ-Section' >
    <div  className="FAQ" >
      <div className="FAQ-Intro">
        <span className="FAQ-Eyebrow">FAQ</span>
        <Text textType="H2" color="Brand">Built for confident pipeline growth.</Text>
        <Text >
          Clear answers about our sales-as-a-service model, from launch to qualified meetings.
        </Text>
      </div>
      <div className="FAQ-List">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index
          const answerId = `faq-answer-${index}`

          return (
            <div className={`FAQ-Item ${isOpen ? 'FAQ-Item--open' : ''}`} key={faq.question}>
              <button
                className="FAQ-Question"
                type="button"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{faq.question}</span>
                <span className="FAQ-Icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
              </button>
              <div id={answerId} className="FAQ-Answer" hidden={!isOpen}>
                <p>{faq.answer}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
    </Section>
  )
}

export default FAQ
