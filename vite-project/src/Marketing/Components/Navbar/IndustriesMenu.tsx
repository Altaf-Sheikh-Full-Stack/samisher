import { useState } from 'react'
import Text from '../../../System/Texts/Text'
import { industries } from '../Stack/IndustriesData'
import './IndustriesMenu.css'

const IndustriesMenu = () => {
    const [activeIndustry, setActiveIndustry] = useState(0)
    const [activeService, setActiveService] = useState(0)

    const industry = industries[activeIndustry]
    const service = industry.services[activeService]

    return (
        <div className="IndustriesMenu">
            {/* top: all industries as tabs */}
            <nav className="IndustriesMenu-Tabs" aria-label="Industries">
                {industries.map((ind, i) => (
                    <button
                        type="button"
                        key={ind.label}
                        className={`IndustriesMenu-Tab ${i === activeIndustry ? 'is-active' : ''}`}
                        onMouseEnter={() => { setActiveIndustry(i); setActiveService(0) }}
                    >
                        <Text color={i === activeIndustry ? 'Brand' : 'Dark'} weight={i === activeIndustry ? '700' : '400'}>{ind.label}</Text>
                    </button>
                ))}
            </nav>

            <div className="IndustriesMenu-Body">
                {/* bottom-left: services for the active industry */}
                <nav className="IndustriesMenu-Services" aria-label="Services">
                    {industry.services.map((svc, i) => (
                        <button
                            type="button"
                            key={svc.title}
                            className={`IndustriesMenu-Service ${i === activeService ? 'is-active' : ''}`}
                            onMouseEnter={() => setActiveService(i)}
                        >
                            <Text color="Dark" weight={i === activeService ? '700' : '400'}>{svc.title}</Text>
                            {/* <span className="IndustriesMenu-ServiceArrow" aria-hidden="true">→</span> */}
                        </button>
                    ))}
                </nav>

                {/* bottom-right: subservices as grid cards */}
                <div className="IndustriesMenu-Subs">
                    {service.subservices.map((sub) => (
                        <a className="Sub-Card" key={sub.title} href="#industries">
                            <div className="Sub-CardImg">
                                <img src={sub.image} alt="" loading="lazy" decoding="async" />
                            </div>
                            <div className="Sub-CardCopy">
                                <span className="Sub-CardTitle">{sub.title}</span>
                                <p className="Sub-CardDesc">{sub.desc}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default IndustriesMenu
