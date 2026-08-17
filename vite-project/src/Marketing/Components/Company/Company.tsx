import { useEffect, useRef, useState } from "react";
import Section from "../../../System/Layouts/Section/Section";
import Text from "../../../System/Texts/Text";
import CompanyData from "./CompanyData";
import Box from "../../../System/Layouts/Box/Box";
import "./Company.css";

type CompanyItem = (typeof CompanyData)[number];

const Company = () => {
    const [data, setData] = useState<CompanyItem | null>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const followerRef = useRef<HTMLDivElement | null>(null);
    const frameRef = useRef<number | null>(null);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = {
                x: e.clientX,
                y: e.clientY,
            };

            if (frameRef.current !== null) {
                return;
            }

            frameRef.current = requestAnimationFrame(() => {
                frameRef.current = null;

                const el = followerRef.current;

                if (!el) return;

                const { width, height } = el.getBoundingClientRect();

                const gap = 15;
                const { x: mouseX, y: mouseY } = mouseRef.current;

                let x = mouseX + gap;
                let y = mouseY + gap;

                if (x + width > window.innerWidth) {
                    x = mouseX - width - gap;
                }

                if (y + height > window.innerHeight) {
                    y = mouseY - height - gap;
                }

                x = Math.max(gap, x);
                y = Math.max(gap, y);

                setPosition({ x, y });
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);

            if (frameRef.current !== null) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, []);

    const showData = (value: CompanyItem) => {
        setData(value);
    };

    const hideData = () => {
        setData(null);
    };

    return (
        <Section className="Company">
            <Box className="Company-Img">
                {CompanyData.map((value) => (
                    <div
                        key={value.Data}
                        className="Company-Info"
                        onMouseEnter={() => showData(value)}
                        onMouseLeave={hideData}
                    >
                        <img src={value.Img} alt="" loading="lazy" decoding="async" />
                    </div>
                ))}
            </Box>

            {data && (
                <div
                    ref={followerRef}
                    className="Company-Info-Data"
                    style={{
                        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                    }}
                >
                    <Text textType="SubHeading">{data.Data}</Text>

                    <Box>
                        <Text color="Brand" textType="SubHeading">{data.Name}</Text>
                        <Text>{data.Company}</Text>
                    </Box>
                </div>
            )}
        </Section>
    );
};

export default Company;
