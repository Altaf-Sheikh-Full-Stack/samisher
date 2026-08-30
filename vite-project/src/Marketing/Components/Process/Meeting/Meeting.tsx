import Button from "../../../../System/Button/Button"
import Box from "../../../../System/Layouts/Box/Box"
import Section from "../../../../System/Layouts/Section/Section"
import Text from "../../../../System/Texts/Text"
import img1 from '../../../../assets/Process/Meeting/ChatGPT Image Aug 11, 2026, 08_25_23 PM.png'
import './Meeting.css'


const Meeting = () => {
    return (
        <Section className="Meeting" variant="Primary" rounded="Bubble">
            <Box className="Meeting-Info" variant="Transparent">
                <Text textType="H2" color="Lite">Turn conversations into booked meetings</Text>
                <Box variant="Transparent" className="Meeting-Info-Point">
                    <Text textType="H4" color="Lite">• AI scheduling</Text>
                    <Text textType="H4" color="Lite">• Human follow-up</Text>
                    <Text textType="H4" color="Lite">• Smoother coordination</Text>
                    <Text textType="H4" color="Lite">• Higher conversion rates</Text>
                </Box>
                <Button variant="Secondary" rounded="Bubble">
                    <a style={{ color: '#ffffff', textDecoration: 'none' }} href="https://cal.com/samisher/meeting" target="_blank" rel="noopener noreferrer">Book demo</a>
                </Button>
            </Box>
            <Box className="Meeting-Img">
                <img src={img1} alt="" loading="lazy" decoding="async" />
            </Box>
        </Section>
    )
}


export default Meeting
