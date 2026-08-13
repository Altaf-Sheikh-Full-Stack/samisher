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
                <Text textType="Heading" color="Lite">From Zero to Qualified Meetings — Powered by AI + Humans.</Text>
                <Text color="Lite" textType="SubHeading">why</Text>
                <Box variant="Primary">
                    <Text>Poin - 1</Text>
                    <Text>Poin - 2</Text>
                    <Text>Poin - 3</Text>
                    <Text>Poin - 4</Text>
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