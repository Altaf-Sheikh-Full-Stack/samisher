import Button from "../../../../System/Button/Button"
import Box from "../../../../System/Layouts/Box/Box"
import Section from "../../../../System/Layouts/Section/Section"
import Text from "../../../../System/Texts/Text"
import img1 from '../../../../assets/Process/Lead/ChatGPT Image Aug 10, 2026, 07_04_09 PM.png'
import './Lead.css'


const Lead = () => {
    return (
        <Section className="Lead" variant="Primary" rounded="Bubble">
            <Box className="Lead-Info" variant="Primary">
                <Text textType="Heading" color="Lite">From Zero to Qualified Leads — Powered by AI + Humans.</Text>
                <Box variant="Primary" className="Lead-Info-Point">
                    <Text textType="SubHeading"  color="Lite">• AI prospecting</Text>
                    <Text textType="SubHeading" color="Lite">• Human qualification</Text>
                    <Text textType="SubHeading" color="Lite">• Faster bookings</Text>
                    <Text textType="SubHeading" color="Lite">• Clear reporting</Text>
                </Box>
                <Button variant="Secondary" rounded="Bubble" >Book demo</Button>
            </Box>
            <Box className="Lead-Img">
                <img src={img1} alt="" loading="lazy" decoding="async" />
            </Box>
        </Section>
    )
}


export default Lead
