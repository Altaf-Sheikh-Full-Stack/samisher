import Button from "../../../../System/Button/Button"
import Box from "../../../../System/Layouts/Box/Box"
import Section from "../../../../System/Layouts/Section/Section"
import Text from "../../../../System/Texts/Text"
import './Closer.css'
import img1 from '../../../../assets/Process/Closer/ChatGPT Image Aug 11, 2026, 10_49_29 PM.png'

const Closer = () => {
    return(
        <Section className="Closer" variant="Secondary" rounded="Bubble">
                    <Box className="Closer-Info" variant="Secondary">
                        <Text textType="Heading" color="Lite">Turn qualified interest into closed revenue</Text>
                        <Box variant="Secondary" className="Lead-Info-Point">
                            <Text textType="SubHeading" color="Lite">• AI-powered qualification</Text>
                            <Text textType="SubHeading" color="Lite">• Human-driven closing</Text>
                            <Text textType="SubHeading" color="Lite">• Seamless integration</Text>
                            <Text textType="SubHeading" color="Lite">• Improved conversion rates</Text>
                        </Box>
                        <Button variant="Primary" rounded="Bubble" >Book demo</Button>
                    </Box>
                    <Box className="Closer-Img">
                        <img src={img1} alt="" />
                    </Box>
                </Section>
    )
}

export default Closer