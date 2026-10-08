import { useMemo, useState } from "react";

import Container from "../../../Design/Container/Container";
import Image from "../../../Design/Img/Img";
import Text from "../../../Design/Texts/Text";
import Button from "../../../Design/Button/Button";

import pricingData from "./Data/PricingData";
import PriceTop from "./PriceTop";

import "./Pricing.css";


const Pricing = () => {

    // -----------------------------------
    // TOP INPUTS
    // -----------------------------------

    const [revenueTarget, setRevenueTarget] = useState(10000);

    const [avgSellingPrice, setAvgSellingPrice] = useState(10000);


    // -----------------------------------
    // BUSINESS ASSUMPTIONS
    // -----------------------------------

    // These are your business assumptions.
    // Change these later without changing
    // the actual pricing UI.

    const LEAD_TO_MEETING_RATE = 0.02;     // 2%
    const MEETING_TO_DEAL_RATE = 0.20;  // 20%
    const DEAL_To_INVOICE_RATE = 0.40; // 40%
    const  INVOICE_TO_COLLECTION = 0.60; // 60%


    // -----------------------------------
    // MAIN CALCULATION
    // -----------------------------------

    const calculatedPricing = useMemo(() => {

        const target = Number(revenueTarget);
        const sellingPrice = Number(avgSellingPrice);

        if (!target || !sellingPrice) {
            return [];
        }


        // How many deals are required
        // to reach revenue target?

        const dealsRequired = Math.ceil(
            target / sellingPrice
        );

        


        // -----------------------------------
        // LEADS
        // -----------------------------------

        const leadsRequired = Math.ceil(
            dealsRequired / LEAD_TO_MEETING_RATE
        );


        // -----------------------------------
        // MEETINGS
        // -----------------------------------

        const meetingsRequired = Math.ceil(
            dealsRequired / MEETING_TO_DEAL_RATE
        );

        // -----------------------------------
        // CLOSING
        // -----------------------------------

        const closeRequired = Math.ceil(
            dealsRequired / DEAL_To_INVOICE_RATE
        );
        
         const invoiceRequired = Math.ceil(
            dealsRequired / INVOICE_TO_COLLECTION
        );
        

  

        return pricingData.map((service) => {

            let price = 0;

            let quantity = 0;

            let unitLabel = "";


            // -----------------------------------
            // LEAD CARD
            // -----------------------------------

            if (service.type === "lead") {

                quantity = leadsRequired;

                price =
                    quantity *
                    (service.unitPrice ?? 0);

                unitLabel = "lead";
            }


            // -----------------------------------
            // MEETING CARD
            // -----------------------------------

            if (service.type === "meeting") {

                quantity = meetingsRequired;

                price =
                    (service.basePrice ?? 0) +
                    quantity *
                    (service.unitPrice ?? 0);

                unitLabel = "meeting";
            }


            // -----------------------------------
            // DEAL CARD
            // -----------------------------------

            if (service.type === "deal") {

                quantity = closeRequired;

                price =
                    (service.basePrice ?? 0) +
                    quantity *
                    (service.unitPrice ?? 0);

                unitLabel = "deal";
            }


            // -----------------------------------
            // INVOICE CARD
            // -----------------------------------

            if (service.type === "invoice") {

                quantity = invoiceRequired;

                price =
                    (service.basePrice ?? 0) +
                    quantity *
                    (service.unitPrice ?? 0);

                unitLabel = "invoice";
            }


            return {
                ...service,
                price,
                quantity,
                unitLabel
            };

        });

    }, [revenueTarget, avgSellingPrice]);


    return (

        <Container>

            {/* -------------------------------- */}
            {/* TOP PRICE INPUTS */}
            {/* -------------------------------- */}

            <Container>

                <PriceTop
                    revenueTarget={revenueTarget}
                    avgSellingPrice={avgSellingPrice}
                    setRevenueTarget={setRevenueTarget}
                    setAvgSellingPrice={setAvgSellingPrice}
                />

            </Container>


            {/* -------------------------------- */}
            {/* SUMMARY */}
            {/* -------------------------------- */}

            <Container className="Pricing-Calculation">

                <Text>
                    Revenue target: ${revenueTarget.toLocaleString()}
                </Text>

                <Text>
                    Average sale: ${avgSellingPrice.toLocaleString()}
                </Text>

            </Container>


            {/* -------------------------------- */}
            {/* CARDS */}
            {/* -------------------------------- */}

            <Container
                color="Secondary"
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
                                    ${service.price.toFixed(2)}
                                </Text>

                                <Text textType="Text">
                                    /Campaign
                                </Text>

                            </Container>


                            {/* DESCRIPTION */}

                            <Text>
                                {service.summery}
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
                                    {item}
                                </Text>

                            ))}


                            {/* Calculated quantity */}

                            <Text>
                                {service.quantity} {service.unitLabel}
                                {service.quantity !== 1 ? "s" : ""}
                            </Text>

                        </Container>

                    </Container>

                ))}

            </Container>

        </Container>
    );
};


export default Pricing;