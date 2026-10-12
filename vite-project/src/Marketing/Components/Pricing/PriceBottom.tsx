import Container from "../../../Design/Container/Container"
import Text from "../../../Design/Texts/Text"
import './PricingBottom.css'

interface PriceBottomProp  {
    profit:number
    cost:number
}



const PriceBottom = ({profit, cost}: PriceBottomProp) => {
    return(
        <Container className="PriceBottom">
            <Text textType="H4" font="Geist" weight="500">After spending ${cost}, you will earn ${profit}.</Text>
            <Text>**Please note:Prices are estimates and may vary. Actual prices may be higher or lower.</Text>
        </Container>
    )
}

export default PriceBottom