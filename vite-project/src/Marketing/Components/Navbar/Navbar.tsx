import './Navbar.css'

import { useState } from 'react'
import Button from "../../../Design/Button/Button"
import Section from "../../../Design/Container/Section/Section"
import Box from '../../../Design/Container/Box/Box'
import Text from '../../../Design/Texts/Text'
import { NavLink } from "react-router";
import ServicesMenu from './ServicesMenu'
import { services } from '../Stack/StackData'
import logo from '/A.svg'
import Image from '../../../Design/Img/Img'
import Container from '../../../Design/Container/Container'


const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [mobileServices, setMobileServices] = useState(false)
    const [activeService, setActiveService] = useState<number | null>(null)

    return (
        <Container className="Navbar" color='White' >

            <Box className='Navbar-Logo' >
                <NavLink to="/" end>
                    <Image highRes={logo} lowRes={logo} alt='Samisher logo' height={50}  />
                </NavLink>

                <Box className='Navbar-Items' >
                    <div className='Navbar-Services'>
                        <button
                            type="button"
                            className='Navbar-ServicesTrigger'
                        >
                            <Text color='Black' weight='400'>Services</Text>
                            <span className='Navbar-ServicesChevron' aria-hidden="true">⌄</span>
                        </button>
                        <ServicesMenu />
                    </div>
                    <NavLink to="/about/" className={({ isActive }) => isActive ? 'is-active' : ''}>
                        <Text color='Black' weight='400' >About us</Text>
                    </NavLink>
                    <NavLink to="/career/" className={({ isActive }) => isActive ? 'is-active' : ''}>
                        <Text color='Black' weight='400'>Career</Text>
                    </NavLink>
                    <NavLink to="/blogs/" className={({ isActive }) => isActive ? 'is-active' : ''}>
                        <Text color='Black' weight='400'>Blogs</Text>
                    </NavLink>
                    <NavLink to="/pricing/" className={({ isActive }) => isActive ? 'is-active' : ''}>
                        <Text color='Black' weight='400'>Pricing</Text>
                    </NavLink>
                </Box>
         
            </Box>
        



            <Box className='Navbar-Buttons' >
                <Button rounded='Round'  size='Large'><a style={{ color: 'white', textDecoration: 'none' }} href="https://cal.com/samisher/meeting" target="_blank" rel="noopener noreferrer">Book Demo</a></Button>
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
                <Section className='Navbar-MobileMenu' variant='Transparent'>
                    <div className="Navbar-MobileGroup">
                        <button
                            type="button"
                            className={`Navbar-MobileServiceHead ${mobileServices ? 'is-open' : ''}`}
                            onClick={() => setMobileServices((prev) => !prev)}
                        >
                            <Text color='Lite'>Services</Text>
                            <span className='Navbar-MobileChevron' aria-hidden="true">⌄</span>
                        </button>

                        {mobileServices && (
                            <div className="Navbar-MobileServices">
                                {services.map((service, i) => (
                                    <div className="Navbar-MobileService" key={service.Name}>
                                        <button
                                            type="button"
                                            className="Navbar-MobileServiceLabel"
                                            onClick={() => setActiveService((prev) => (prev === i ? null : i))}
                                        >
                                            <Text color='Dark' weight='600'>{service.Name}</Text>
                                            <span className='Navbar-MobileChevron' aria-hidden="true">⌄</span>
                                        </button>
                                       
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <NavLink to="/about/" onClick={() => setMobileOpen(false)}>
                        <Text color='Lite'>About us</Text>
                    </NavLink>
                    <NavLink to="/career/" onClick={() => setMobileOpen(false)}>
                        <Text color='Lite'>Career</Text>
                    </NavLink>
                    <NavLink to="/blogs/" onClick={() => setMobileOpen(false)}>
                        <Text color='Lite'>Blogs</Text>
                    </NavLink>
                    <NavLink to="/pricing/" onClick={() => setMobileOpen(false)}>
                        <Text color='Lite'>Pricing</Text>
                    </NavLink>
                </Section>
            )}

        </Container>
    )
}

export default Navbar
