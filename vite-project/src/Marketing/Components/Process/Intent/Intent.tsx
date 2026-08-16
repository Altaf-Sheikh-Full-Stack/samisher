import Button from "../../../../System/Button/Button"
import Box from "../../../../System/Layouts/Box/Box"
import Section from "../../../../System/Layouts/Section/Section"
import Text from "../../../../System/Texts/Text"
import './Intent.css'
import img1 from '../../../../assets/Process/Intent/ChatGPT Image Aug 11, 2026, 03_25_34 PM.png'

const Intent = () => {
    return(
        <Section className="Intent" variant="Secondary" rounded="Bubble">
                    <Box className="Intent-Info" variant="Secondary">
                        <Text textType="Heading" color="Lite">Target the buyers already in market</Text>
                        <Box variant="Secondary" className="Lead-Info-Point">
                            <Text color="Lite" textType="SubHeading">Spot active buyers</Text>
                            <Text color="Lite" textType="SubHeading">Prioritize hot leads</Text>
                            <Text color="Lite" textType="SubHeading">Trigger faster outreach</Text>
                            <Text color="Lite" textType="SubHeading">Improve close rates</Text>
                        </Box>
                        <Button variant="Primary" rounded="Bubble" >Book demo</Button>
                    </Box>
                    <Box className="Intent-Img">
                        <img src={img1} alt="" />
                    </Box>
                </Section>
    )
}

export default Intent