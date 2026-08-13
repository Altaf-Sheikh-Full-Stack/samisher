import Button from "../../../System/Button/Button"
import Box from "../../../System/Layouts/Box/Box"
import Section from "../../../System/Layouts/Section/Section"
import Text from "../../../System/Texts/Text"
import './Hero.css'
import img1 from '../../../assets/Hero/agency-dashboard.png'
import img from '../../../assets/Hero/Component 2 (1).png'

const Hero = () => {
    return (
        <Section className="Home" size="Fixed">
            <Box className="Hero-Text">
                <Text textType="Heading" color="Brand">Pay for Meetings. Not Promises.</Text>
                <Text textType="SubHeading" >20–50+ qualified meetings every month. Fill your pipeline. Grow revenue. No sales team required.</Text>
            </Box>
      <Box className="Hero-Point">
                🌎<Text>✔ Global SDR Team</Text>
                📅<Text>✔ Qualified Meetings</Text>
                🎯<Text>✔ USA, UK, Australia focused</Text>
                💰<Text>✔ Pay Per Meeting</Text>
            </Box>
            <Box className="Hero-CTA">
                <Button>Schedule free demo ❯❯❯❯</Button>
                <Button variant="Secondary">Get Pricing Estimate</Button>

            </Box>
           <Text>Starting at $7 per meeting</Text>
            <Box className="Hero-Img">
                <img src={img} alt="" />
                <Box>
                    <Button rounded="Bubble">Book intaective demo ❯❯❯❯</Button>
                </Box>
                
            </Box>

        </Section>
    )
}

export default Hero