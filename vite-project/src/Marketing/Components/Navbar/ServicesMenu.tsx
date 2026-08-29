import { useState } from 'react'
import { services } from '../Stack/StackData'
import Text from '../../../System/Texts/Text'
import './ServicesMenu.css'

const ServicesMenu = () => {
    const [active, setActive] = useState(0)
    const current = services[active]

    return (
        <div className="ServicesMenu">
            <nav className="ServicesMenu-List" aria-label="Services">
                {services.map((service, i) => (
                    <button
                        type="button"
                        key={service.label}
                        className={`ServicesMenu-Item ${i === active ? 'is-active' : ''}`}
                        onMouseEnter={() => setActive(i)}
                    >
                        <Text color="Dark" weight={i === active ? '700' : '400'}>{service.label}</Text>
                        {/* <span className="ServicesMenu-ItemArrow" aria-hidden="true">→</span> */}
                    </button>
                ))}
            </nav>

            <div className="ServicesMenu-Detail">
                {/* <div className="ServicesMenu-DetailHead">
                    <Text textType="H3" color="Dark" weight="700">{current.title}</Text> 
                     <a href="#services" className="ServicesMenu-All">
                        <Text color="Brand" weight="500">View all</Text>
                    </a> 
                </div> */}

                <div className="ServicesMenu-Bento">
                    {current.subservices.map((sub) => (
                        <a
                            className="Bento-Card"
                            key={sub.title}
                            href="#services"
                        >
                            <div className="Bento-CardImg">
                                <img src={sub.image} alt="" loading="lazy" decoding="async" />
                            </div>
                            <div className="Bento-CardCopy">
                                <span className="Bento-CardTitle">{sub.title}</span>
                                {/* <p className="Bento-CardDesc">{sub.desc}</p> */}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ServicesMenu
