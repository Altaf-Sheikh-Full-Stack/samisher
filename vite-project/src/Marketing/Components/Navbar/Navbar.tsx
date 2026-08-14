import './Navbar.css'

import Button from "../../../System/Button/Button"
import Section from "../../../System/Layouts/Section/Section"
import Box from '../../../System/Layouts/Box/Box'
import Text from '../../../System/Texts/Text'
import { NavLink } from "react-router";

const Navbar = () => {
    return (
        <Section className="Navbar" variant='Secondary' size="Fluid">
            <Box className='Navbar-Logo' variant='Secondary'>
                <NavLink to="/" end>
                    <Text color='Lite' textType='SubHeading'>Samsher</Text>
                </NavLink>
                <Box className='Navbar-Items' variant='Secondary'>

                    <NavLink to="/about">
                        <Text color='Lite'>About us</Text>
                    </NavLink>
                    <NavLink to="/pricing">
                        <Text color='Lite'>Pricing</Text>
                    </NavLink>
                </Box>
            </Box>

            <Box className='Navbar-Buttons' variant='Secondary'>
                <Button rounded='Bubble'>Book Meeting ❯❯❯❯</Button>
            </Box>
        </Section>

    )
}

export default Navbar