
type Variant = "Primary" | "Secondary" | "Transparent"
type Size = "Fixed" | "Fluid"
type Rounded = "Flat" | "Bubble" | "Round"


interface SectionProps {
    variant?: Variant;
    children: React.ReactNode;
    size?: Size
    className?:string
    rounded?:Rounded;
}


const variantConf: Record<Variant, { backgroundColour: string; }> = {
    Primary: { backgroundColour: "#7C3AED" },
    Secondary: { backgroundColour: "#111827" },
    Transparent: { backgroundColour: "white" }
};

const sizeConf: Record<Size, {maxwidth:string,}> = {
    Fixed:{maxwidth:"1500px"},
    Fluid:{maxwidth:"none"}
}

const roundedConf: Record<Rounded, {borderRadius:number}> = {
    Flat:{borderRadius:0},
    Bubble:{borderRadius:20},
    Round:{borderRadius:50}
}



const Section = ({variant = 'Transparent', children, size = 'Fixed', className, rounded = 'Flat'}: SectionProps) => {

    const backgroundColourStyle = variantConf[variant].backgroundColour
    const maxwidthStyle = sizeConf[size].maxwidth
    const borderRadiusStyle = roundedConf[rounded].borderRadius


    const styles: React.CSSProperties = {
        backgroundColor: backgroundColourStyle,
        maxWidth:maxwidthStyle,
        borderRadius:borderRadiusStyle
    }

    return (
        <section className={className} style={styles}>{children}</section>
    )
}

export default Section