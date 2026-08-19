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
                <Text color="White" textType="H2">
                    Turn your pipeline into a predictable growth channel.
                </Text>
                <Text textType="Text" color="Lite">
                    Get a clear plan for the right prospects, message, and meeting volume—before you commit to a campaign.
                </Text>
            </Box>
            <Box variant="Transparent" className="CTA-Right" >
                <Box>
                    <Text textType="Text">Starting at </Text>
                    <Text color="Brand" textType="H2">$7</Text>
                    <Text textType="Text">per appointment</Text>
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
                    <Button rounded="Bubble"><a style={{color:'white', textDecoration:'none'}} href="https://calendly.com/samisher-sales/30min" target="_blank" rel="noopener noreferrer">Book your free strategy call →</a></Button>
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
