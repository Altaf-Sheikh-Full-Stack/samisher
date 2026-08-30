import Button from "../../../../System/Button/Button"
import Box from "../../../../System/Layouts/Box/Box"
import Section from "../../../../System/Layouts/Section/Section"
import Text from "../../../../System/Texts/Text"
import img1 from '../../../../assets/Process/Lead/ChatGPT Image Aug 10, 2026, 07_04_09 PM.png'
import './Lead.css'


const Lead = () => {
    return (
        <Section className="Lead" variant="Primary">
            <Box className="Lead-Info" variant="Transparent">
                <Text textType="H2" color="White" >From Zero to Qualified Leads Powered by AI</Text>
                <Box variant="Transparent" className="Lead-Info-Point">
                    <Text textType="H4"  color="Lite">• AI prospecting</Text>
                    <Text textType="H4" color="Lite">• Human qualification</Text>
                    <Text textType="H4" color="Lite">• Faster bookings</Text>
                    <Text textType="H4" color="Lite">• Clear reporting</Text>
                </Box>
                <Button variant="Secondary" rounded="Bubble">
                    <a style={{ color: '#ffffff', textDecoration: 'none' }} href="https://cal.com/samisher/meeting" target="_blank" rel="noopener noreferrer">Book demo</a>
                </Button>
            </Box>
            <Box className="Lead-Img">
                <img src={img1} alt="" loading="lazy" decoding="async" />
            </Box>
        </Section>
    )
}


export default Lead
