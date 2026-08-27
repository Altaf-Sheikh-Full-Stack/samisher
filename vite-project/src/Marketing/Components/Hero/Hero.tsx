import Button from "../../../System/Button/Button"
import Box from "../../../System/Layouts/Box/Box"
import Section from "../../../System/Layouts/Section/Section"
import Text from "../../../System/Texts/Text"
import './Hero.css'
import img from '../../../assets/Hero/Component 2 (1).png'
import { NavLink } from "react-router"

const Hero = () => {
    return (
        <Section className="Home" >
            <Box className="Hero-Text">
                {/* <span className="Hero-Eyebrow">Performance-based B2B growth</span> */}
                <Text textType="H1" weight="700" color="Dark">Pay for qualified meetings.<br />Not promises.</Text>
                <Text textType="H3" color="Lite">20–50+ qualified meetings every month. Fill your pipeline. Grow revenue. No sales team required.</Text>
            </Box>

            <Box className="Hero-Point">
                <div className="Hero-PointItem">
                    <span>🌎</span>
                    <Text textType="Text" color="Black" weight="500">Global SDR Team</Text>
                </div>
                <div className="Hero-PointItem">
                    <span>📅</span>
                    <Text textType="Text" color="Black" weight="500">Qualified Meetings</Text>
                </div>
                <div className="Hero-PointItem">
                    <span>🎯</span>
                    <Text textType="Text" color="Black" weight="500">USA, UK, Australia Focused</Text>
                </div>
                <div className="Hero-PointItem">
                    <span>💰</span>
                    <Text textType="Text" color="Black" weight="500">Pay Per Meeting</Text>
                </div>
            </Box>

            <Box className="Hero-CTA">
                
                <Button rounded='Bubble'><a style={{color:'white', textDecoration:'none'}} href="https://cal.com/samisher/meeting" target="_blank" rel="noopener noreferrer">100x Your Revenue / $0</a></Button>
                   <NavLink to="/pricing/">
                        <Button rounded="Bubble" variant="Secondary">Check Profit & Loss</Button>
                    </NavLink>
                
            </Box>

            <Text  textType="Text" weight="400" color="Lite">$0 setup cost. $0 hidden fees. Pay as you earn.</Text>

            <Box className="Hero-Img">
                <img src={img} alt="" />
                <Box>
                    <Button rounded="Bubble"><a style={{color:'white', textDecoration:'none'}} href="https://cal.com/samisher/meeting" target="_blank" rel="noopener noreferrer">See how it works →</a></Button>
                </Box>
            </Box>
        </Section>
    )
}

export default Hero
