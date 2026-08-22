import Box from "../../../System/Layouts/Box/Box"
import Section from "../../../System/Layouts/Section/Section"
import Text from "../../../System/Texts/Text"
import { Link } from 'react-router'
import './Footer.css'

const Footer = () => {
    return (
        <Section className="Footer" size="Fluid" variant="Secondary">
            <Box className="Footer-Brand" variant="Secondary">
                <Text textType="H2" color="White" weight="800">Samisher</Text>
                <Text color="Lite">
                    Helping B2B teams book qualified meetings with a predictable, performance-based model.
                </Text>
            </Box>

            <Box variant="Secondary" className="Footer-Links">
                <Box variant="Secondary" className="Footer-Left">
                    <Text textType="H3" color="Brand">Socials</Text>
                    <Text color="Lite">LinkedIn</Text>
                    <Text color="Lite">X.com</Text>
                    <Text color="Lite">Instagram</Text>
                </Box>

                <Box variant="Secondary" className="Footer-Right">
                    <Text textType="H3" color="Brand">Know more</Text>
                    <Link to="/about/"><Text color="Lite">About us</Text></Link>
                    <Link to="/pricing/"><Text color="Lite">Pricing</Text></Link>
                    <Link to="/career/"><Text color="Lite">Career</Text></Link>
                    <Link to="/blogs/"><Text color="Lite">Blogs</Text></Link>
                </Box>
                <Box variant="Secondary" className="Footer-Right">
                    <Text textType="H3" color="Brand">Trust and safety</Text>
                    <Text color="Lite">Privacy policy</Text>
                    <Link to="/pricing/"><Text color="Lite">Terms of Service</Text></Link>
                    <Text color="Lite">Refund Policy</Text>
                    <Text color="Lite">Data Processing Addendum </Text>
                </Box>
            </Box>
        </Section>
    )
}

export default Footer
