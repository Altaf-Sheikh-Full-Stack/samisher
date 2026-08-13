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
                <Text color="Lite" textType="SubHeading">why</Text>
                <Box variant="Primary">
                    <Text>Poin - 1</Text>
                    <Text>Poin - 2</Text>
                    <Text>Poin - 3</Text>
                    <Text>Poin - 4</Text>
                </Box>
                <Button variant="Secondary" rounded="Bubble" >Book demo</Button>
            </Box>
            <Box className="Lead-Img">
                <img src={img1} alt="" />
            </Box>
        </Section>
    )
}


export default Lead