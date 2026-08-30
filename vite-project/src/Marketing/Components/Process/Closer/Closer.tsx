import Button from "../../../../System/Button/Button"
import Box from "../../../../System/Layouts/Box/Box"
import Section from "../../../../System/Layouts/Section/Section"
import Text from "../../../../System/Texts/Text"
import './Closer.css'
import img1 from '../../../../assets/Process/Closer/ChatGPT Image Aug 11, 2026, 10_49_29 PM.png'

const Closer = () => {
    return(
        <Section className="Closer" variant="Secondary" rounded="Bubble">
                    <Box className="Closer-Info" variant="Transparent">
                        <Text textType="H2" color="Lite">Turn qualified interest into closed revenue</Text>
                        <Box variant="Transparent" className="Closer-Info-Point">
                            <Text textType="H4" color="Lite">• AI-powered qualification</Text>
                            <Text textType="H4" color="Lite">• Human-driven closing</Text>
                            <Text textType="H4" color="Lite">• Seamless integration</Text>
                            <Text textType="H4" color="Lite">• Improved conversion rates</Text>
                        </Box>
                        <Button variant="Primary" rounded="Bubble">
                            <a style={{ color: '#ffffff', textDecoration: 'none' }} href="https://cal.com/samisher/meeting" target="_blank" rel="noopener noreferrer">Book demo</a>
                        </Button>
                    </Box>
                    <Box className="Closer-Img">
                        <img src={img1} alt="" loading="lazy" decoding="async" />
                    </Box>
                </Section>
    )
}

export default Closer
