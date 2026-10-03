import "./Texts.css";

type TextType = "H1" | "H2" | "H3" | "H4" | "H5" | "H6" | "Text";
type Color = "Lite" | "Dark" | "Brand" | "Black" | "White";
type Weight = "400" | "500" | "600" | "700" | "800";
type Font = "Onest" | "Geist" | "Roboto";

interface TextProbs {
    textType?: TextType;
    className?: string;
    children: React.ReactNode;
    color?: Color;
    weight?: Weight;
    font?: Font;
}

const fontConf: Record<Font, { fontFamliy: string }> = {
    Onest: { fontFamliy: "Onest" },
    Geist: { fontFamliy: "Geist" },
    Roboto: { fontFamliy: "Roboto" },
};

const textTypeConf: Record<
    TextType,
    {
        fontType: keyof React.JSX.IntrinsicElements;
        fontSize: string;
    }
> = {
    H1: {
        fontType: "h1",
        fontSize: "clamp(37px, 6vw, 62px)",
    },
    H2: {
        fontType: "h2",
        fontSize: "clamp(30px, 4vw, 48px)",
    },
    H3: {
        fontType: "h3",
        fontSize: "clamp(24px, 3vw, 32px)",
    },
    H4: {
        fontType: "h4",
        fontSize: "clamp(20px, 2.5vw, 24px)",
    },
    H5: {
        fontType: "h5",
        fontSize: "clamp(18px, 2vw, 20px)",
    },
    H6: {
        fontType: "h6",
        fontSize: "clamp(16px, 1.5vw, 18px)",
    },
    Text: {
        fontType: "p",
        fontSize: "clamp(14px, 1.2vw, 16px)",
    },
};

const weightConf: Record<Weight, { fontWeight: string }> = {
    "400": { fontWeight: "400" },
    "500": { fontWeight: "500" },
    "600": { fontWeight: "600" },
    "700": { fontWeight: "700" },
    "800": { fontWeight: "800" },
};

const colorConf: Record<Color, { color: string }> = {
    Dark: { color: "#474747" },
    Lite: { color: "#e7e7e7" },
    Black: { color: "#111827" },
    White: { color: "#FFFFFF" },
    Brand: { color: "#7C3AED" },
};

const Text = ({
    font = "Roboto",
    textType = "Text",
    children,
    color = "Dark",
    className,
    weight = "400",
}: TextProbs) => {
    const Element = textTypeConf[textType].fontType;

    const colorStyle = colorConf[color].color;
    const fontFamilyStyle = fontConf[font].fontFamliy;
    const fontWeightStyle = weightConf[weight].fontWeight;
    const fontSizeStyle = textTypeConf[textType].fontSize;

    const styles: React.CSSProperties = {
        fontFamily: fontFamilyStyle,
        color: colorStyle,
        fontWeight: fontWeightStyle,
        fontSize: fontSizeStyle,
    };

    return (
        <Element style={styles} className={`Text ${className}`}>
            {children}
        </Element>
    );
};

export default Text;
