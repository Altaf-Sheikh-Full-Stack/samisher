import { useState } from 'react'
import {services}  from '../Stack/StackData'
import Text from '../../../Design/Texts/Text'
import './ServicesMenu.css'

const ServicesMenu = () => {
    const [active, setActive] = useState(0)

    return (
        <div className="ServicesMenu">
            <nav className="ServicesMenu-List" aria-label="Services">
                {services.map((service, i) => (
                    <button
                        type="button"
                        key={service.Name}
                        className={`ServicesMenu-Item ${i === active ? 'is-active' : ''}`}
                        onMouseEnter={() => setActive(i)}
                    >
                        <Text color="Black" weight={i === active ? '700' : '400'}>{service.Name}</Text>
                    </button>
                ))}
            </nav>

        </div>
    )
}

export default ServicesMenu
