import Box from "../../../System/Layouts/Box/Box"
import Section from "../../../System/Layouts/Section/Section"
import Text from "../../../System/Texts/Text"
import './Footer.css'



const Footer = () => {
    return (
        <Section className="Footer" size="Fluid">
            <Box className="Footer-Left">
                <Text textType="SubHeading"  color="Brand">External links</Text>
                <Text>Linkdein</Text>
                <Text>X.com</Text>
                <Text>Instagram</Text>
            </Box>
            <Box className="Footer-Right">
                <Text textType="SubHeading"  color="Brand">Internal links</Text>
                <Text>About us</Text>
                <Text>Pricing</Text>
                <Text>Career</Text>
            </Box>
        </Section>
    )
}

export default Footer