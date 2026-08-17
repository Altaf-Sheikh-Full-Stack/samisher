import Button from "../../../System/Button/Button";
import Box from "../../../System/Layouts/Box/Box";
import Section from "../../../System/Layouts/Section/Section";
import Text from "../../../System/Texts/Text";
import "./CTA.css";
import img1 from '../../../assets/CTA/image (16).png'
import img2 from '../../../assets/CTA/image (17).png'
import img3 from '../../../assets/CTA/image (18).png'
import img4 from '../../../assets/CTA/image (19).png'


const CTA = () => {
    return (
        <Section className="CTA" variant="Secondary" rounded="Bubble">
            <Box variant="Secondary" className="CTA-Left">
                <Text color="Lite" textType="Heading">
                    Ready to get clients on autopilot?
                </Text>
                <Text textType="Text" color="Lite">
                    Book a free discovery call to discuss your goals, challenges, and how
                    we can help. We’ll walk you through our process, and if it’s a fit,
                    guide you through onboarding to get started on delivering qualified
                    appointments.
                </Text>
            </Box>
            <Box variant="Transparent" className="CTA-Right" >
                <Box>
                    <Text textType="SubHeading">Starting at </Text>
                    <Text color="Brand" textType="Heading">$7</Text>
                    <Text textType="SubHeading">per appointment</Text>
                    <Text>Every meeting has a price. You only pay when it's booked.</Text>
                </Box>
                <Box className="CTA-Right-Info">
                    <Text >🧲 Lead generation</Text>
                    <Text>📊 Intent manager</Text>
                    <Text>📅 Meeting booking</Text>
                    <Text>🎯 Closer service</Text>
                    <Text>💰 Collection service</Text>
                </Box>
                <Box>
                    <Button rounded="Bubble">BOOK A DEMO CALL ❯❯❯❯</Button>
                </Box>
                <Box className="CTA-Right-Reviews">
                    <Box className="CTA-Right-Reviews-Imgs">
                        <img src={img1} alt="" loading="lazy" decoding="async" />
                        <img src={img2} alt="" loading="lazy" decoding="async" />
                        <img src={img3} alt="" loading="lazy" decoding="async" />
                        <img src={img4} alt="" loading="lazy" decoding="async" />
                    </Box>
                    <Box>
                        <Text>✦✦✦✦✦</Text>
                        <Text>Rated 4.9 out of 5 (+125 Verified Reviews)</Text>
                    </Box>
                </Box>
            </Box>
           
        </Section>
    );
};

export default CTA;
