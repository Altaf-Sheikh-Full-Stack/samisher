import Button from "../../../System/Button/Button"
import Section from "../../../System/Layouts/Section/Section"
import Box from "../../../System/Layouts/Box/Box"
import Text from "../../../System/Texts/Text"
import "./About.css"

const beliefs = [
    'Pay for results, not promises.',
    'Show our work. No secrets.',
    'Move fast, but do it right.',
]

const About = () => {
    return (
        <Section className="About">
            <Text textType="H1" color="Dark">We exist to make growth predictable.</Text>
            <Text textType="Text" className="About-Lead">
                Samisher helps B2B teams book sales meetings. You pay per meeting.
                If we don't book, you don't pay.
            </Text>

            <Box className="About-Block">
                <Text textType="H3" color="Dark" weight="700">Our story</Text>
                <Text textType="Text">
                    We started Samisher because cold outreach was expensive and slow.
                    Agencies charged for their work, not for results.
                </Text>
                <Text textType="Text">
                    So we built a better deal: you only pay when a real meeting lands
                    on your calendar. Starting at $7 per meeting.
                </Text>
                <Text textType="Text">
                    Today, teams around the world use Samisher to grow their pipeline
                    without hiring a big sales team.
                </Text>
            </Box>

            <Box className="About-Block">
                <Text textType="H3" color="Dark" weight="700">What we believe</Text>
                <ul className="About-Beliefs">
                    {beliefs.map((belief) => (
                        <li key={belief}>{belief}</li>
                    ))}
                </ul>
            </Box>

            <Box className="About-Block">
                <Text textType="H3" color="Dark" weight="700">Work with us</Text>
                <Text textType="Text">
                    Book a free call. We will show you how it works and if we are a good fit.
                </Text>
                <Button rounded="Bubble" className="About-Button">
                    <a
                        style={{ color: '#ffffff', textDecoration: 'none' }}
                        href="https://cal.com/samisher/meeting"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Book a free call →
                    </a>
                </Button>
            </Box>
        </Section>
    )
}

export default About
