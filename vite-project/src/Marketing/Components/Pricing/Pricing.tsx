import Container from "../../../Design/Container/Container"
import Image from "../../../Design/Img/Img"
import Text from "../../../Design/Texts/Text"
import pricingData from "./Data/PricingData"
import './Pricing.css'
import Button from "../../../Design/Button/Button"
import Slider from "./Slider"


const Pricing = ( => {
    return (
        <Container>
               <Container>
                <Slider/>
            </Container>
        <Container color="Secondary" className="Pricing">
         
            {pricingData.map((service) => (
                <Container color="White"  className="Pricing-Card"  >
                    <Container className="Pricing-Card-Top" >
                        <Container color="Secondary" className="Pricing-Card-Top-Icons">
                            <Image height={20} width={20} highRes={service.icons} lowRes={service.icons} />
                            <Text>{service.name}</Text>
                        </Container>
                        <Container className="Pricing-Card-Top-Price" >
                            <Text weight="600" color="Black" textType="H2" font="Onest">${service.price}</Text>
                            <Text textType="Text">/Campaign</Text>
                        </Container>
                            <Text>{service.summery}</Text>
                    </Container>
                    <Button className="Pricing-Card-Button" style={{background:service.bcolor, color:service.color}} size="Large" shadow="True" >Start Campaign</Button>
                    <Container className="Pricing-Card-Bottom">
                        {service.item.map((items) => (
                            <Text>{items}</Text>
                        ))}
                    </Container>
                </Container>
            ))}
        </Container>
        </Container>
    )
}

export default Pricing
