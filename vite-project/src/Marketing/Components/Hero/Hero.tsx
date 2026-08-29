import Button from "../../../System/Button/Button"
import Box from "../../../System/Layouts/Box/Box"
import Text from "../../../System/Texts/Text"
import './Hero.css'
import { NavLink } from "react-router"

const Hero = () => {
    return (
        <div className="Home"  >
            <Box className="Hero-Text">
                {/* <span className="Hero-Eyebrow">Performance-based B2B growth</span> */}
                <Text textType="H1" weight="700" color="White">Guaranteed Revenue. <br /> One Click Away. 🌈</Text>
                <Text textType="H3" color="Lite" weight="500"  >From finding the right prospects to collecting the money, we handle your entire sales process.</Text>
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
                
                <Button rounded='Bubble'><a style={{color:'white', textDecoration:'none'}} href="https://cal.com/samisher/meeting" target="_blank" rel="noopener noreferrer">100x Your Revenue / $0</a></Button>
                   <NavLink to="/pricing/">
                        <Button rounded="Bubble" variant="Transparent">Estimate Your Profit</Button>
                    </NavLink>
                
            </Box>
<Text  textType="Text" weight="400" color="Lite">$0 setup cost. $0 hidden fees. Pay as you earn.</Text>

            <Box>
                <Box>
                    <img src="" alt="" />
                    <img src="" alt="" />
                </Box>
                {/* <Text textType="H4">Trusted by 179 Partners</Text> */}
                 
            </Box>

           

            {/* <Box className="Hero-Img">
                <img src={img} alt="" />
                <Box>
                    <Button rounded="Bubble"><a style={{color:'white', textDecoration:'none'}} href="https://cal.com/samisher/meeting" target="_blank" rel="noopener noreferrer">See how it works →</a></Button>
                </Box>
            </Box> */}
        </div>
    )
}

export default Hero
