import { useMemo, useState } from 'react'
import Container from "../../../Design/Container/Container"
import Text from "../../../Design/Texts/Text"
import PriceData from './Data'
import './Price.css'
import MetallicPaint from '../../../Design/MetallicPaint/MetallicPaint'

const Price = () => {
    const [selectedProduct, setSelectedProduct] = useState(PriceData[0].product)

    const selectedPlan = useMemo(
        () => PriceData.find((plan) => plan.product === selectedProduct) ?? PriceData[0],
        [selectedProduct],
    )

    const leftItems = selectedPlan.item.slice(0, Math.ceil(selectedPlan.item.length / 2))
    const rightItems = selectedPlan.item.slice(Math.ceil(selectedPlan.item.length / 2))

    return (
        <Container className="Price" color="White">
            <Container className='PriceInput' style={{ gridArea: 'box1' }}>
                <label className="PriceSelector" aria-label="Select a plan">
                    {/* <span className="PriceSelectorDot" aria-hidden="true" /> */}
                    <select
                        value={selectedProduct}
                        onChange={(event) => setSelectedProduct(event.target.value)}
                        className="PriceSelect"
                        aria-label="Choose product"
                    >
                        {PriceData.map((plan) => (
                            <option key={plan.product} value={plan.product}>
                                {plan.product}
                            </option>
                        ))}
                    </select>
                </label>
            </Container>
            <Container style={{ gridArea: 'box2' }} color='Secondary' className='PriceNumber' >
                <Text textType="H1" font="Onest" weight="700" color="Black" >
                    {selectedPlan.price}
                    <Text textType="H6" font="Onest" weight="500" color="Dark" > / {selectedPlan.paid}</Text>
                </Text>
            </Container>


            <Container className="PriceGrid" color='Secondary' >
                <ul className="PriceList">
                    {leftItems.map((item) => (
                        <Text textType="H6" font="Geist" weight="500" color="Black">{item}</Text>
                    ))}
                </ul>
            </Container>
            <Container color='Secondary' className="PriceGrid1">
                <ul className="PriceList">
                    {rightItems.map((item) => (
                        <Text textType="H6" font="Geist" weight="500" color="Black">{item}</Text>
                    ))}
                </ul>
            </Container>


        </Container>
    )
}

export default Price