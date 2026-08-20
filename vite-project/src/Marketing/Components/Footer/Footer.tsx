import Box from "../../../System/Layouts/Box/Box"
import Section from "../../../System/Layouts/Section/Section"
import Text from "../../../System/Texts/Text"
import { Link } from 'react-router'
import './Footer.css'

const Footer = () => {
    return (
        <Section className="Footer" size="Fluid" variant="Secondary">
            <Box className="Footer-Brand" variant="Secondary">
                <Text textType="H2" color="White">Samisher</Text>
                <Text color="Lite">
                    Helping B2B teams book qualified meetings with a predictable, performance-based model.
                </Text>
            </Box>

            <Box variant="Secondary" className="Footer-Links">
                <Box variant="Secondary" className="Footer-Left">
                    <Text textType="H3" color="Brand">External links</Text>
                    <Text color="Lite">LinkedIn</Text>
                    <Text color="Lite">X.com</Text>
                    <Text color="Lite">Instagram</Text>
                </Box>

                <Box variant="Secondary" className="Footer-Right">
                    <Text textType="H3" color="Brand">Internal links</Text>
                    <Text color="Lite">About us</Text>
                    <Link to="/pricing/"><Text color="Lite">Pricing</Text></Link>
                    <Text color="Lite">Career</Text>
                </Box>
            </Box>
        </Section>
    )
}

export default Footer
