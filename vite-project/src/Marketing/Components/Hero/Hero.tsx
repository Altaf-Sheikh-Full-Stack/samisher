import Button from "../../../Design/Button/Button"
import Box from "../../../Design/Layouts/Box/Box"
import Text from "../../../Design/Texts/Text"
import './Hero.css'
import { NavLink } from "react-router"

const Hero = () => {
    return (
        <div className="Home"  >
            <Box className="Hero-Text">
                <Text textType="H1" weight="700" color="Dark">Say hello to boll</Text>
                <Text textType="H3" color="Dark" weight="500"  >From finding the right prospects to collecting the money, we handle your entire sales process. </Text>
            </Box>
{/* 
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
            </Box> */}

            <Box className="Hero-CTA">
                
                <Button size="Large" rounded='Round'><a style={{color:'white', textDecoration:'none'}} href="https://cal.com/samisher/meeting" target="_blank" rel="noopener noreferrer">Try boll now</a></Button>
                   {/* <NavLink to="/pricing/">
                        <Button rounded="Bubble" variant="Transparent">Estimate Your Profit </Button>
                    </NavLink> */}
                
            </Box>
<Text  textType="Text" weight="400" color="Lite">$0 setup cost. $0 hidden fees. Pay as you earn.</Text>

      

           

        
        </div>
    )
}

export default Hero
