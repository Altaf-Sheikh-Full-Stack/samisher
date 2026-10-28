import Button from "../../../Design/Button/Button"
import Container from "../../../Design/Container/Container"
import MetallicPaint from "../../../Design/MetallicPaint/MetallicPaint"
import Text from "../../../Design/Texts/Text"
import './Price.css'

const Price = () => {
    return (
        <Container className="Price">
            <MetallicPaint text="$0.1" color="#f2c46b" edgeBend={0.9}

                density={2}
                softness={0.1}
                dispersion={0.15}
                distortion={0.07}

                angle={70}
                scale={0.7}
                speed={1}
                rotation={0}
                mouseTilt={0.5}
                intro
                fontFamily="Geist" />

            <Button size="Large">Launch campaign $0.1</Button>
            <br />
            <Text color="Black" textType="H6" font="Geist" weight="500">As low as $0.1 per outcome. <Text> Pricing may vary depending on the product or service, demand, target market, and customer segment.</Text> </Text>
            <br /> <br />
        </Container>
    )
}

export default Price