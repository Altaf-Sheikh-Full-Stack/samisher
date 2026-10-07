

import { useState } from "react";
import "./PriceTop.css";
import SliderData from "./Data/SliderData";
import Container from "../../../Design/Container/Container";
import Text from "../../../Design/Texts/Text";



const PriceTop = () => {



    return (
        <Container className="PriceTop">
            <Container className="PriceTop-Top">
                <Text textType="H4" font="Geist">Your revenue target form the campaign?</Text>

                <select id="cars" name="cars">
                    <option value="volvo">$1000</option>
                    <option value="saab">$5000</option>
                    <option value="mercedes" selected>$10k</option>
                    <option value="audi">$100k</option>
                </select>

            </Container>
            <Container   className="PriceTop-Bottom">
                <Text textType="H4" font="Geist">Avg product/service selling price</Text>
                                <select id="cars" name="cars">
                    <option value="volvo">$1000</option>
                    <option value="saab">$5000</option>
                    <option value="mercedes" selected>$10k</option>
                    <option value="audi">$100k</option>
                </select>
            </Container>
        </Container>
    );
}


export default PriceTop