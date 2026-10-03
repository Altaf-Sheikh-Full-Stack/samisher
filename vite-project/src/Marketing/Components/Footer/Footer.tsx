import Text from "../../../Design/Texts/Text"
import { Link } from 'react-router'
import './Footer.css'
import Container from "../../../Design/Container/Container"

const Footer = () => {
    return (
        <Container className="Footer" color="White">
            <Container className="Footer-Brand" color="White">
                <Text textType="H2" color="Black" weight="800">Samisher</Text>
                <Text color="Dark">
                    Helping B2B teams book qualified meetings with a predictable, performance-based model.
                </Text>
            </Container>

            <Container className="Footer-Links" color="White">
                <Container className="Footer-Left" color="White">
                    <Text textType="H3" color="Black">Socials</Text>
                    <Text textType="Text" color="Dark">LinkedIn</Text>
                    <Text color="Dark">X.com</Text>
                    <Text color="Dark">Instagram</Text>
                </Container>

                <Container className="Footer-Right" color="White">
                    <Text textType="H3" color="Black">Know more</Text>
                    <Link to="/about/"><Text color="Dark">About us</Text></Link>
                    <Link to="/pricing/"><Text color="Dark">Pricing</Text></Link>
                    <Link to="/career/"><Text color="Dark">Career</Text></Link>
                    <Link to="/blogs/"><Text color="Dark">Blogs</Text></Link>
                </Container>
                <Container className="Footer-Right" color="White">
                    <Text textType="H3" color="Black">Trust and safety</Text>
                    <Text color="Dark">Privacy policy</Text>
                    <Link to="/pricing/"><Text color="Dark">Terms of Service</Text></Link>
                    <Text color="Dark">Refund Policy</Text>
                    <Text color="Dark">Data Processing Addendum </Text>
                </Container>
            </Container>
        </Container>
    )
}

export default Footer
