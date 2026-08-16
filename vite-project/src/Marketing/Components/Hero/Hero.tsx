import Button from "../../../System/Button/Button"
import Box from "../../../System/Layouts/Box/Box"
import Section from "../../../System/Layouts/Section/Section"
import Text from "../../../System/Texts/Text"
import './Hero.css'
import img from '../../../assets/Hero/Component 2 (1).png'
import { NavLink } from "react-router"

const Hero = () => {
    return (
        <Section className="Home" size="Fixed">
            <Box className="Hero-Text">
                <Text textType="Heading" color="Brand">Pay for Meetings. Not Promises.</Text>
                <Text textType="SubHeading">20–50+ qualified meetings every month. Fill your pipeline. Grow revenue. No sales team required.</Text>
            </Box>

            <Box className="Hero-Point">
                <div className="Hero-PointItem">
                    <span>🌎</span>
                    <Text>Global SDR Team</Text>
                </div>
                <div className="Hero-PointItem">
                    <span>📅</span>
                    <Text>Qualified Meetings</Text>
                </div>
                <div className="Hero-PointItem">
                    <span>🎯</span>
                    <Text>USA, UK, Australia Focused</Text>
                </div>
                <div className="Hero-PointItem">
                    <span>💰</span>
                    <Text>Pay Per Meeting</Text>
                </div>
            </Box>

            <Box className="Hero-CTA">
                
                <Button rounded='Bubble'><a style={{color:'white', textDecoration:'none'}} href="https://calendly.com/samisher-sales/30min" target="_blank" rel="noopener noreferrer">Schedule free demo</a></Button>
                   <NavLink to="/pricing">
                        <Button rounded="Bubble" variant="Secondary">Get Pricing Estimate</Button>
                    </NavLink>
                
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