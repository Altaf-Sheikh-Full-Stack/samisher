import React, { useEffect, useState } from "react";
import "./Img.css";

interface ImageProps {
    lowRes: string;
    highRes: string;
    alt?: string;
    className?: string;
    width?: number | string;
    height?: number | string;
    objectFit?: React.CSSProperties["objectFit"];
    objectPosition?: React.CSSProperties["objectPosition"];
    priority?: boolean;
}

const Image = ({
    lowRes,
    highRes,
    alt = "",
    className = "",
    width,
    height,
    objectFit = "cover",
    objectPosition = "center",
    priority = false,
}: ImageProps) => {
    const [isHighResLoaded, setIsHighResLoaded] = useState(false);

    useEffect(() => {
        // If both URLs are the same, no need to preload.
        if (lowRes === highRes) {
            setIsHighResLoaded(true);
            return;
        }

        const image = new window.Image();

        image.src = highRes;

        image.onload = () => {
            setIsHighResLoaded(true);
        };

        image.onerror = () => {
            // Keep showing the low-res image if high-res fails.
            setIsHighResLoaded(false);
        };

        return () => {
            image.onload = null;
            image.onerror = null;
        };
    }, [highRes, lowRes]);

    const containerStyle: React.CSSProperties = {
        width,
        height,
    };

    const imageStyle: React.CSSProperties = {
        objectFit,
        objectPosition,
    };

    return (
        <div
            className={`Image ${className}`}
            style={containerStyle}
        >
            {/* Low resolution image */}
            <img
                src={lowRes}
                alt={alt}
                className={`Image-low ${
                    isHighResLoaded ? "Image-low-hidden" : ""
                }`}
                style={imageStyle}
                loading={priority ? "eager" : "lazy"}
                decoding="async"
            />

            {/* High resolution image */}
            <img
                src={highRes}
                alt={alt}
                className={`Image-high ${
                    isHighResLoaded ? "Image-high-visible" : ""
                }`}
                style={imageStyle}
                loading={priority ? "eager" : "lazy"}
                decoding="async"
            />
        </div>
    );
};

export default Image;