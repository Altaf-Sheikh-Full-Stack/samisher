import { useEffect, useMemo, useState } from "react";

import Container from "../../../Design/Container/Container";
import Image from "../../../Design/Img/Img";
import Text from "../../../Design/Texts/Text";
import Button from "../../../Design/Button/Button";

import PriceTop from "./PriceTop";
import { calculatePricing, formatCurrency } from "./pricingLogic";

import "./Pricing.css";
import PriceBottom from "./PriceBottom";


const Pricing = () => {
    const [revenueTarget, setRevenueTarget] = useState(10000);
    const [avgSellingPrice, setAvgSellingPrice] = useState(10000);

    const calculatedPricing = useMemo(
        () => calculatePricing({ revenueTarget, avgSellingPrice }),
        [revenueTarget, avgSellingPrice],
    );



  
        const cost = Number(calculatedPricing[0].price) + Number(calculatedPricing[1].price) + Number(calculatedPricing[2].price) + Number(calculatedPricing[3].price)
        console.log(cost)













    return (

        <>

            <PriceTop
                revenueTarget={revenueTarget}
                avgSellingPrice={avgSellingPrice}
                setRevenueTarget={setRevenueTarget}
                setAvgSellingPrice={setAvgSellingPrice}
            />



            {/* <Container className="Pricing-Calculation">

                <Text>
                    Revenue target: {formatCurrency(revenueTarget)}
                </Text>

                <Text>
                    Average sale: {formatCurrency(avgSellingPrice)}
                </Text>

            </Container>  */}




            <Container
                color="Transparent"
                className="Pricing"
            >

                {calculatedPricing.map((service) => (

                    <Container
                        key={service.name}
                        color="White"
                        className="Pricing-Card"
                    >

                        {/* TOP */}

                        <Container className="Pricing-Card-Top">

                            <Container
                                color="Secondary"
                                className="Pricing-Card-Top-Icons"
                            >

                                <Image
                                    height={20}
                                    width={20}
                                    highRes={service.icons}
                                    lowRes={service.icons}
                                />

                                <Text>
                                    {service.name}
                                </Text>

                            </Container>


                            {/* PRICE */}

                            <Container className="Pricing-Card-Top-Price">

                                <Text
                                    weight="600"
                                    color="Black"
                                    textType="H2"
                                    font="Onest"
                                >
                                    {formatCurrency(service.price)}
                                </Text>

                                <Text textType="Text" >
                                     / Campaign / Paid Once
                                </Text>

                            </Container>


                            {/* DESCRIPTION */}

                            <Text weight="700">
                                Best for:
                                <Text>{service.summery}</Text>
                            </Text>

                        </Container>


                        {/* BUTTON */}

                        <Button
                            className="Pricing-Card-Button"
                            style={{
                                background: service.bcolor,
                                color: service.color
                            }}
                            size="Large"
                            shadow="True"
                        >
                            Start Campaign
                        </Button>


                        {/* BOTTOM */}

                        <Container className="Pricing-Card-Bottom">

                            {service.item.map((item, index) => (

                                <Text key={index}>
                                   ✅ {item}
                                </Text>

                            ))}
                        </Container>

                    </Container>

                ))}

            </Container>

            {/* <PriceBottom cost={cost} profit={revenueTarget - cost} /> */}

        </>
    );
};


export default Pricing;