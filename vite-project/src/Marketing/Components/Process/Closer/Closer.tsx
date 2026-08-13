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
                        <Text textType="Heading" color="Lite">From Zero to Qualified Closers — Powered by AI + Humans.</Text>
                        <Text color="Lite" textType="SubHeading">why</Text>
                        <Box variant="Secondary">
                            <Text>Poin - 1</Text>
                            <Text>Poin - 2</Text>
                            <Text>Poin - 3</Text>
                            <Text>Poin - 4</Text>
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