import './Navbar.css'

import Button from "../../../System/Button/Button"
import Section from "../../../System/Layouts/Section/Section"
import Box from '../../../System/Layouts/Box/Box'
import Text from '../../../System/Texts/Text'


const Navbar = () => {
    return (
        <Section className="Navbar" variant='Secondary' size="Fluid">
            <Box className='Navbar-Logo' variant='Secondary'>
                <Text textType='SubHeading' color='Lite'>Samsher</Text>
                <Box className='Navbar-Items' variant='Secondary'>
                    <a href=""> <Text color='Lite'>Home</Text></a>
                    <a href=""> <Text color='Lite'>About us</Text></a>
                    <a href=""> <Text color='Lite'>Pricing</Text></a>
                </Box>
            </Box>

            <Box className='Navbar-Buttons' variant='Secondary'>
                <Button rounded='Bubble'>Book Meeting ❯❯❯❯</Button>
            </Box>
        </Section>

    )
}

export default Navbar