
import Section from "../../../System/Layouts/Section/Section"
import Text from "../../../System/Texts/Text"
import Banner from "../../Components/Banner/Banner"
import Navbar from "../../Components/Navbar/Navbar"

import { ServiceBuilder } from "../../Components/SalesPackageBuilder_Final"






const Pricing = () => {
    return(
        <Section size="Fluid">
            <Banner/>
            <Navbar/>
            <ServiceBuilder/>
        </Section>
    )
}


export default Pricing