import './Texts.css'


type TextType = "Heading" | "SubHeading" | "Text"
type Color = "Lite" | "Dark" | "Brand"

interface TextProbs {
    textType?: TextType,
    className?: string,
    children: React.ReactNode
    color?: Color
}



const textTypeConf: Record<TextType, { fontFamliy: string, fontType: keyof React.JSX.IntrinsicElements, fontWeight: string, fontSize: string }> = {
    Heading: { fontFamliy: 'Manrope', fontType: 'h1', fontWeight: '800', fontSize:"45px" },
    SubHeading: { fontFamliy: 'Inter', fontType: 'h2', fontWeight: '500', fontSize:"20px" },
    
    Text: { fontFamliy: 'Inter', fontType: 'p', fontWeight: '400', fontSize:"16" }
}

const colorConf: Record<Color, { color: string }> = {
    Dark: { color: "#111827" },
    Lite: { color: "white" },
    Brand: { color: "#7C3AED" }
}

const Text = ({ textType = 'Text', children, color = "Dark" }: TextProbs) => {

    const Element = textTypeConf[textType].fontType

    const colorStyle = colorConf[color].color
    const fontFamilyStyle = textTypeConf[textType].fontFamliy
    const fontWeightStyle = textTypeConf[textType].fontWeight
    const fontSizeStyle = textTypeConf[textType].fontSize


    const styles: React.CSSProperties = {
        fontFamily: fontFamilyStyle,
        color: colorStyle,
        fontWeight: fontWeightStyle,
        fontSize:fontSizeStyle
    }


    return (
        <Element style={styles} className='H1'  >{children}</Element>
    )
}

export default Text