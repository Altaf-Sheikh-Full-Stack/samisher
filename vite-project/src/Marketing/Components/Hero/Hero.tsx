import Button from "../../../Design/Button/Button";
import Container from "../../../Design/Container/Container";

import Text from "../../../Design/Texts/Text";
import img1 from "../../../assets/Hero/Bot/Component 23.svg";
import img2 from "../../../assets/Hero/Bot/Component 24.svg";
import img3 from "../../../assets/Hero/Bot/Component 25.svg";
import img4 from "../../../assets/Hero/Bot/Component 26.svg";
import "./Hero.css";


import humen1 from '../../../assets/Hero/Humen/frame_5_1x.webp'
import humen2 from '../../../assets/Hero/Humen/frame_2_1x.webp'
import humen3 from '../../../assets/Hero/Humen/frame_4_1x.webp'
import humen4 from '../../../assets/Hero/Humen/frame_3_1x.webp'


import Rating from "../Rating/Rating";
import Chatbot from "../Chatbot/Chatbot";
const Hero = () => {
    return (
        <Container className="Home" color="Secondary">
            {/* <Container className="Hero-Text-Img-box"> */}
                {/* <img className="" src={img5} alt="" /> */}
            {/* </Container> */}
            
            <Container color="Transparent" className="Hero-Text">
                <Rating/>
                <Text textType="H1" font="Onest" weight="700" color="Black">
                    Enterprise sales?  Done for you. 
                </Text>
                <Text textType="H2" font="Geist" weight="600">Human + Agent.</Text>
                <Container color="White" className="Home-Boll-Img">
                    <img src={humen1} />
                    <img src={humen2} alt="" />
                    <img src={humen3} alt="" />
                    <img src={humen4}/>
                    <img src={img4} alt="" />
                    <img src={img3} alt="" />
                    <img src={img2} alt="" />
                    <img src={img1} alt="" />

                </Container>
                
            </Container>


            {/* <Container className="Hero-Body">
                <Text textType="H5" font="Geist" color="Dark" weight="500">
                    An Agent That
                    <span className="Hero-Body-Scout">
                        <img src={img1} alt="" />
                        Find lead
                    </span> From  100+ sources {" "}


                    <span className="Hero-Body-Scheduler">
                        <img src={img2} alt="" />
                        Book Demo
                    </span>On  Autopilot, And{" "}


                    <span className="Hero-Body-Closer">
                        <img src={img3} alt="" />
                        Close Deal
                    </span>While You Sleep{" "}


                    <span className="Hero-Body-Collector">
                        <img src={img4} alt="" />
                        Send invoice
                    </span>  To Collects Payments.{" "}

                </Text>
            </Container> */}

            

{/*             
            <Container className="Hero-Body">
                <Text textType="H5" font="Geist" color="Dark" weight="500">

                    We turn prospects into paying customers by identifying qualified buyers, booking sales meetings, closing deals, and collecting payments.
                </Text>
            </Container> */}

            <Container className="Hero-CTA" color="Transparent">
                <Button size="Large" rounded="Round">
                    <a
                        style={{ color: "white", textDecoration: "none" }}
                        href="https://cal.com/samisher/demo"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Start 14 day trial
                    </a>
                </Button>
            </Container>
            <Chatbot/>
        </Container>
    );
};

export default Hero;
