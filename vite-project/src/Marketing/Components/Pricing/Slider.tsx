

import { useState } from "react";
import "./Slider.css";
import SliderData from "./Data/SliderData";
import Container from "../../../Design/Container/Container";
import Text from "../../../Design/Texts/Text";



const Slider = () => {

    const [index, setIndex] = useState(2);


    const progressPercent = (index / (SliderData.length - 1)) * 100;

    const handleChange = (e: any) => {
        setIndex(parseInt(e.target.value, 10));
    };

    return (
        <Container className="slider-container">
            <Text font="Geist" textType="Text" className="slider-title">Your revenue target for the campaign?</Text>
            <Container className="slider-wrapper">

                <Container className="slider-labels">
                    {SliderData.map((mark, idx) => (
                        <span
                            key={mark}
                            className={`slider-label ${idx === index ? "active" : ""}`}
                            style={{ left: `${(idx / (SliderData.length - 1)) * 100}%` }}
                        >
                            {mark}
                            
                        </span>
                        
                    ))}
                </Container>

                <Container className="slider-track-container">
                    <div
                        className="slider-track-filled"
                        style={{ width: `${progressPercent}%` }}
                    ></div>
                    <input
                        type="range"
                        min="0"
                        max={SliderData.length - 1}
                        value={index}
                        onChange={handleChange}
                        className="real-slider"
                    />
                </Container>
            </Container>
        </Container>
    );
}


export default Slider