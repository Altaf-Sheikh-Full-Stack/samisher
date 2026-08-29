import './Texts.css'


type TextType = "H1" | "H2" | "H3" | "H4" | "H5" | "H6" | "Text"
// type TextType = "Heading" | "SubHeading" | "Text"
type Color = "Lite" | "Dark" | "Brand" | "Black" | "White"
type Weight = "400" | "500" | "600" | "700" | "800"

interface TextProbs {
    textType?: TextType,
    className?: string,
    children: React.ReactNode,
    color?: Color,
    weight?:Weight
}



// const textTypeConf: Record<TextType, { fontFamliy: string, fontType: keyof React.JSX.IntrinsicElements, fontWeight: string, fontSize: string }> = {
//     Heading: { fontFamliy: 'Manrope', fontType: 'h1', fontWeight: '800', fontSize:"45px" },
//     SubHeading: { fontFamliy: 'Inter', fontType: 'h2', fontWeight: '500', fontSize:"20px" },
//     Text: { fontFamliy: 'Inter', fontType: 'p', fontWeight: '400', fontSize:"16" }
// }


const textTypeConf: Record<TextType, { fontFamliy: string, fontType: keyof React.JSX.IntrinsicElements,  fontSize: string }> = {
    H1: { fontFamliy: 'Manrope', fontType: 'h1',  fontSize:"clamp(37px, 6vw, 62px)" },
    H2: { fontFamliy: 'Manrope', fontType: 'h2',  fontSize:"clamp(32px, 4vw, 48px)" },
    H3: { fontFamliy: 'Inter', fontType: 'h3',  fontSize:"clamp(17px, 2vw, 20px)" },
    H4: { fontFamliy: 'Inter', fontType: 'h4',  fontSize:"" },
    H5: { fontFamliy: 'Inter', fontType: 'h5',  fontSize:"" },
    H6: { fontFamliy: 'Inter', fontType: 'h6',  fontSize:"" },
    Text: { fontFamliy: 'Inter', fontType: 'p', fontSize:"14px" }
}


const weightConf: Record<Weight, { fontWeight: string }> = {
    "400": { fontWeight: "400" },
    "500": { fontWeight: "500" },
    "600": { fontWeight: "600" },
    "700": { fontWeight: "700" },
    "800": { fontWeight: "800" }
}   






const colorConf: Record<Color, { color: string }> = {
    Dark: { color: "#111827" },
    Lite: { color: "#e7e7e7" },
    Black:{ color: "#000000" },
    White:{ color: "#FFFFFF" },
    Brand: { color: "#7C3AED" }
}

const Text = ({ textType = 'Text', children, color = "Dark", className, weight = "400" }: TextProbs) => {

    const Element = textTypeConf[textType].fontType

    const colorStyle = colorConf[color].color
    const fontFamilyStyle = textTypeConf[textType].fontFamliy
    const fontWeightStyle = weightConf[weight].fontWeight
    const fontSizeStyle = textTypeConf[textType].fontSize


    const styles: React.CSSProperties = {
        fontFamily: fontFamilyStyle,
        color: colorStyle,
        fontWeight: fontWeightStyle,
        fontSize:fontSizeStyle
    }


    return (
        <Element style={styles} className={`H1 ${className || ''}`}  >{children}</Element>
    )
}

export default Text
