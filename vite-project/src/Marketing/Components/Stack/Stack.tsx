import Section from '../../../System/Layouts/Section/Section'
import './Stack.css'

const sections = [
  {
    label: 'Lead Type',
    title: 'Lead Type',
    cards: [
      ['Marketing Qualified Leads (MQL)', 'Leads showing early interest and engagement with your marketing.', '◎'],
      ['Sales Qualified Leads (SQL)', 'Prospects vetted for sales readiness and a relevant business need.', '⌕'],
      ['Highly Qualified Leads', 'High-fit prospects matched against your ideal customer profile.', '✦'],
      ['Appointment-Ready Leads', 'Qualified contacts ready to take the next step with your sales team.', '▣'],
    ],
  },
  {
    label: 'Closing Model',
    title: 'Closing Model',
    cards: [
      ['Inbound Closing', 'Convert prospects who come to you through marketing and referrals.', '↓'],
      ['Outbound Closing', 'Move proactively sourced opportunities through a focused sales process.', '↗'],
      ['Inbound + Outbound', 'Unify both motions so no qualified opportunity is left behind.', '⌁'],
      ['Full-Cycle Sales', 'Support the complete journey from first touch to signed customer.', '✓'],
    ],
  },
  {
    label: 'Meeting Type',
    title: 'Meeting Type',
    cards: [
      ['Qualified Sales Meetings', 'Conversations with prospects who meet your agreed qualification criteria.', '✓'],
      ['Decision-Maker Meetings', 'Meetings booked with the people who can influence or approve the deal.', '◌'],
      ['Demo Meetings', 'Product demonstrations with prospects ready to see your solution.', '▤'],
      ['Discovery Meetings', 'Early-stage conversations to uncover needs, fit, and opportunity.', '⌕'],
      ['Appointment Setting', 'A reliable calendar of well-matched conversations for your team.', '▣'],
    ],
  },
  {
    label: 'Collection Type',
    title: 'Collection Type',
    cards: [
      ['Payment Follow-Up', 'Keep payments moving with timely, professional follow-up.', '→'],
      ['Invoice Collection', 'Track and collect outstanding invoices with a clear process.', '▤'],
      ['Overdue Payment Recovery', 'Re-engage overdue accounts and work toward recovery.', '↗'],
      ['Recurring Payment Collection', 'Maintain predictable recurring collections and customer communication.', '◌'],
      ['Full Collection Management', 'A complete service for managing collection activity end to end.', '$'],
    ],
  },
]

const Stack = () => {
  return (
    <Section size='Fixed' className="Stack" aria-label="How Samisher works">
      <nav className="Stack-Nav" aria-label="Sales process">
        {sections.map((section) => (
          <a href={`#stack-${section.label.toLowerCase().replaceAll(' ', '-')}`} key={section.label}>{section.label}</a>
        ))}
        <a className="Stack-NavCta" href="https://calendly.com/samisher-sales/30min" target="_blank" rel="noopener noreferrer">
          Book a demo
        </a>
      </nav>

      <div className="Stack-Panels">
        {sections.map((section, index) => (
          <article
            className="Stack-Panel"
            id={`stack-${section.label.toLowerCase().replaceAll(' ', '-')}`}
            key={section.label}
            style={{ '--stack-index': index } as React.CSSProperties}
          >
            <div className="Stack-PanelHeading">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h2>{section.title}</h2>
            </div>
            <div className="Stack-FeatureGrid">
              {section.cards.map(([title, description, icon], cardIndex) => (
                <div className={`Stack-Feature Stack-Feature--${(cardIndex % 3) + 1}`} key={title}>
                  <div className="Stack-FeatureVisual" aria-hidden="true">
                    <span>{icon}</span>
                    <i />
                    <b />
                  </div>
                  <div className="Stack-FeatureCopy">
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default Stack
