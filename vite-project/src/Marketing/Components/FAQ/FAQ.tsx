import { useState } from 'react'
import Section from '../../../Design/Container/Section/Section'
import Text from '../../../Design/Texts/Text'
import './FAQ.css'
import FAQData from './FAQData'



// FAQPage structured data — makes the questions eligible for Google rich
// results / AI Overviews. Rendered inline so it lands in the prerendered HTML.
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQData.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
   <Section className='FAQ' >
        {FAQData.map((faq, index) => {
          const isOpen = openIndex === index
          const answerId = `faq-answer-${index}`

          return (
            <div className={`FAQ-Item ${isOpen ? 'FAQ-Item--open' : ''}`} key={faq.question}>
              <h3 className="FAQ-Heading">
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
              </h3>
              <div id={answerId} className="FAQ-Answer" hidden={!isOpen}>
                <p>{faq.answer}</p>
              </div>
            </div>
          )
        })}
    {/* eslint-disable-next-line react/no-danger */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
    </Section>
  )
}

export default FAQ
