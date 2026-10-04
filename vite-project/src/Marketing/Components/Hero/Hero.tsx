import Button from "../../../Design/Button/Button";
import Container from "../../../Design/Container/Container";
import Fade from "../../../Design/Fade/Fade";
import Text from "../../../Design/Texts/Text";
import img1 from "../../../assets/Hero/Component 23.svg";
import img2 from "../../../assets/Hero/Component 24.svg";
import img3 from "../../../assets/Hero/Component 25.svg";
import img4 from "../../../assets/Hero/Component 26.svg";
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
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
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
