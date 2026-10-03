import Button from "../../../Design/Button/Button";
import Box from "../../../Design/Container/Box/Box";
import Container from "../../../Design/Container/Container";
import Fade from "../../../Design/Fade/Fade";
import Image from "../../../Design/Img/Img";
import Text from "../../../Design/Texts/Text";
import "./Hero.css";
import { NavLink } from "react-router";

const Hero = () => {
    return (
        <Container className="Home">
            <Container className="Hero-Text">
                    <Text textType="H1" font="Onest" weight="700" color="Black">
                        Say hello to boll
                    </Text>
                <Container color="Secondary" className="Home-Boll-Img">
                    <Image highRes="" lowRes="" />
                    <Image highRes="" lowRes="" />
                    <Image highRes="" lowRes="" />
                    <Image highRes="" lowRes="" />
                </Container>

            </Container>

            <Container className="Hero-Body">
                <Text textType="H5" font="Geist" color="Dark" weight="500">
                    From finding the right prospects to collecting the money, we handle
                    your entire sales process.
                </Text>
            </Container>

            <Container className="Hero-CTA">
                <Button size="Large" rounded="Round">
                    <a
                        style={{ color: "white", textDecoration: "none" }}
                        href="https://cal.com/samisher/meeting"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Try boll now
                    </a>
                </Button>
            </Container>
        </Container>
    );
};

export default Hero;
