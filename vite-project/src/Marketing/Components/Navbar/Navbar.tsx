import './Navbar.css'

import { useState } from 'react'
import Button from "../../../System/Button/Button"
import Section from "../../../System/Layouts/Section/Section"
import Box from '../../../System/Layouts/Box/Box'
import Text from '../../../System/Texts/Text'
import { NavLink } from "react-router";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <Section className="Navbar" variant='Secondary' size="Fluid">
            <Box className='Navbar-Logo' variant='Secondary'>
                <NavLink to="/" end>
                    <Text color='White' weight='800'  textType='H3' >Samisher</Text>
                </NavLink>

                <Box className='Navbar-Items' variant='Secondary'>
                     <NavLink to="/about/">
                        <Text color='White' weight='400'>About us</Text>
                    </NavLink>
                    <NavLink to="/career/">
                        <Text color='White' weight='400'>Career</Text>
                    </NavLink>
                    <NavLink to="/blogs/">
                        <Text color='White' weight='400'>Blogs</Text>
                    </NavLink>
                    <NavLink to="/pricing/">
                        <Text color='White' weight='400'>Pricing</Text>
                    </NavLink>
                </Box>
            </Box>

            <Box className='Navbar-Buttons' variant='Secondary'>
                <Button rounded='Bubble'><a style={{ color: 'white', textDecoration: 'none' }} href="https://calendly.com/samisher-sales/30min" target="_blank" rel="noopener noreferrer"> Book Meeting ❯❯❯❯</a></Button>
            </Box>

            <button
                type="button"
                className={`Navbar-MobileToggle ${mobileOpen ? 'is-open' : ''}`}
                onClick={() => setMobileOpen((prev) => !prev)}
                aria-label="Toggle navigation menu"
                aria-expanded={mobileOpen}
            >
                <span />
                <span />
                <span />
            </button>

            {mobileOpen && (
                <Section className='Navbar-MobileMenu' variant='Secondary'>
                    <NavLink to="/about/" onClick={() => setMobileOpen(false)}>
                        <Text color='Lite'>About us</Text>
                    </NavLink>
                    <NavLink to="/pricing/" onClick={() => setMobileOpen(false)}>
                        <Text color='Lite'>Pricing</Text>
                    </NavLink>
                    <Button rounded='Bubble' onClick={() => setMobileOpen(false)}><a style={{ color: 'white', textDecoration: 'none' }} href="https://calendly.com/samisher-sales/30min" target="_blank" rel="noopener noreferrer">Book Meeting ❯❯❯❯</a></Button>
                </Section>
            )}
        </Section>
    )
}

export default Navbar
