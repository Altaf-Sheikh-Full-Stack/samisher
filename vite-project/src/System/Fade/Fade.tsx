import React, { useEffect, useRef, useState } from "react";
import "./Fade.css";

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    duration?: number;
    delay?: number;
    distance?: number;
    blur?: number;
    once?: boolean;
}

const Fade = ({
    children,
    className = "",
    duration = 500,
    delay = 0,
    distance = 12,
    blur = 5,
    once = true,
}: FadeInProps) => {

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);

                    if (once) {
                        observer.unobserve(element);
                    }
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.1,
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [once]);

    const styles: React.CSSProperties = {
        "--fade-duration": `${duration}ms`,
        "--fade-delay": `${delay}ms`,
        "--fade-distance": `${distance}px`,
        "--fade-blur": `${blur}px`,
    } as React.CSSProperties;

    return (
        <div
            ref={ref}
            style={styles}
            className={`FadeIn ${isVisible ? "FadeIn-visible" : ""} ${className}`}
        >
            {children}
        </div>
    );
};

export default Fade;