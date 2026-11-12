import { useMemo, useState } from 'react'
import Button from "../../../Design/Button/Button"
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
            <Container className="PriceSelector">
                <label className="PriceSelector" aria-label="Select a plan">
                    <span className="PriceSelectorDot" aria-hidden="true" />
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
                    <span className="PriceSelectorChevron" aria-hidden="true">⌄</span>
                </label>
            </Container>
            <Container className='PricingNumber' >
                <Text textType="H1" font="Onest" weight="700" color="Black" className="PriceValue">
                    <MetallicPaint color='gold' text={`${selectedPlan.price}`}></MetallicPaint>

                </Text>
            </Container>

            <Container className="PriceGrid">
                <ul className="PriceList">
                    {leftItems.map((item) => (
                        <li key={item}><Text textType="H6" font="Geist" weight="500" color="Black">{item}</Text></li>
                    ))}
                </ul>
            </Container>
            <Container>
                <ul className="PriceList">
                    {rightItems.map((item) => (
                        <li key={item}><Text textType="H6" font="Geist" weight="500" color="Black">{item}</Text></li>
                    ))}
                </ul>
            </Container>


        </Container>
    )
}

export default Price