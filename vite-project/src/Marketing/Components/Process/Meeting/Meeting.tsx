import Button from "../../../../System/Button/Button"
import Box from "../../../../System/Layouts/Box/Box"
import Section from "../../../../System/Layouts/Section/Section"
import Text from "../../../../System/Texts/Text"
import img1 from '../../../../assets/Process/Meeting/ChatGPT Image Aug 11, 2026, 08_25_23 PM.png'
import './Meeting.css'


const Meeting = () => {
    return (
        <Section className="Meeting" variant="Primary" rounded="Bubble">
            <Box className="Meeting-Info" variant="Primary">
                <Text textType="Heading" color="Lite">Turn conversations into booked meetings</Text>
                <Box variant="Primary" className="Lead-Info-Point">
                    <Text textType="SubHeading" color="Lite">• AI scheduling</Text>
                    <Text textType="SubHeading" color="Lite">• Human follow-up</Text>
                    <Text textType="SubHeading" color="Lite">• Smoother coordination</Text>
                    <Text textType="SubHeading" color="Lite">• Higher conversion rates</Text>
                </Box>
                <Button variant="Secondary" rounded="Bubble" >Book demo</Button>
            </Box>
            <Box className="Meeting-Img">
                <img src={img1} alt="" />
            </Box>
        </Section>
    )
}


export default Meeting