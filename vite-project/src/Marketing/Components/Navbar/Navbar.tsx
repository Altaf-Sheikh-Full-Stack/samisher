import './Navbar.css'

import { useState } from 'react'
import Button from "../../../System/Button/Button"
import Section from "../../../System/Layouts/Section/Section"
import Box from '../../../System/Layouts/Box/Box'
import Text from '../../../System/Texts/Text'
import { NavLink } from "react-router";
import ServicesMenu from './ServicesMenu'
import IndustriesMenu from './IndustriesMenu'
import { services } from '../Stack/StackData'

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [mobileServices, setMobileServices] = useState(false)
    const [mobileIndustries, setMobileIndustries] = useState(false)
    const [activeService, setActiveService] = useState<number | null>(null)

    return (
        <Section className="Navbar" variant='Transparent' >
            <Box className='Navbar-Logo' >
                <NavLink to="/" end>
                    <Text color='Brand' weight='800'  textType='H3' >Samisher</Text>
                </NavLink>

                <Box className='Navbar-Items' >
                    <div className='Navbar-Services'>
                        <button
                            type="button"
                            className='Navbar-ServicesTrigger'
                        >
                            <Text color='Dark' weight='400'>Services</Text>
                            <span className='Navbar-ServicesChevron' aria-hidden="true">⌄</span>
                        </button>
                        <ServicesMenu />
                    </div>
                    <div className='Navbar-Industries'>
                        <button
                            type="button"
                            className='Navbar-IndustriesTrigger'
                        >
                            <Text color='Dark' weight='400'>Industries</Text>
                            <span className='Navbar-IndustriesChevron' aria-hidden="true">⌄</span>
                        </button>
                        <IndustriesMenu />
                    </div>
                    <NavLink to="/about/" className={({ isActive }) => isActive ? 'is-active' : ''}>
                        <Text color='Dark' weight='400' >About us</Text>
                    </NavLink>
                    <NavLink to="/career/" className={({ isActive }) => isActive ? 'is-active' : ''}>
                        <Text color='Dark' weight='400'>Career</Text>
                    </NavLink>
                    <NavLink to="/blogs/" className={({ isActive }) => isActive ? 'is-active' : ''}>
                        <Text color='Dark' weight='400'>Blogs</Text>
                    </NavLink>
                    <NavLink to="/pricing/" className={({ isActive }) => isActive ? 'is-active' : ''}>
                        <Text color='Dark' weight='400'>Pricing</Text>
                    </NavLink>
                </Box>
            </Box>

            <Box className='Navbar-Buttons' >
                <Button rounded='Bubble'><a style={{ color: 'white', textDecoration: 'none' }} href="https://cal.com/samisher/meeting" target="_blank" rel="noopener noreferrer"> Book Meeting →</a></Button>
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
                                    <div className="Navbar-MobileService" key={service.label}>
                                        <button
                                            type="button"
                                            className="Navbar-MobileServiceLabel"
                                            onClick={() => setActiveService((prev) => (prev === i ? null : i))}
                                        >
                                            <Text color='Dark' weight='600'>{service.title}</Text>
                                            <span className='Navbar-MobileChevron' aria-hidden="true">⌄</span>
                                        </button>
                                        {activeService === i && (
                                            <div className="Navbar-MobileSubservices">
                                                {service.subservices.map((sub) => (
                                                    <NavLink to="/pricing/" key={sub.title} onClick={() => setMobileOpen(false)}>
                                                        <Text color='Lite' weight='400'>{sub.title}</Text>
                                                    </NavLink>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="Navbar-MobileGroup">
                        <button
                            type="button"
                            className={`Navbar-MobileServiceHead ${mobileIndustries ? 'is-open' : ''}`}
                            onClick={() => setMobileIndustries((prev) => !prev)}
                        >
                            <Text color='Lite'>Industries</Text>
                            <span className='Navbar-MobileChevron' aria-hidden="true">⌄</span>
                        </button>

                        {mobileIndustries && (
                            <div className="Navbar-MobileSubservices">
                                <NavLink to="/pricing/" onClick={() => setMobileOpen(false)}>
                                    <Text color='Lite' weight='400'>B2B SaaS</Text>
                                </NavLink>
                                <NavLink to="/pricing/" onClick={() => setMobileOpen(false)}>
                                    <Text color='Lite' weight='400'>IT Services</Text>
                                </NavLink>
                                <NavLink to="/pricing/" onClick={() => setMobileOpen(false)}>
                                    <Text color='Lite' weight='400'>AI Companies</Text>
                                </NavLink>
                                <NavLink to="/pricing/" onClick={() => setMobileOpen(false)}>
                                    <Text color='Lite' weight='400'>B2B Agencies</Text>
                                </NavLink>
                                <NavLink to="/pricing/" onClick={() => setMobileOpen(false)}>
                                    <Text color='Lite' weight='400'>B2B Consulting</Text>
                                </NavLink>
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
        </Section>
    )
}

export default Navbar
