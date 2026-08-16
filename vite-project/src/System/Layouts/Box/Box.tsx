
type Variant = "Primary" | "Secondary" | "Transparent"

interface BoxProps {
    variant?: Variant;
    children: React.ReactNode;
    className?:string
}


const variantConf: Record<Variant, { backgroundColour: string; }> = {
    Primary: { backgroundColour: "#7C3AED" },
    Secondary: { backgroundColour: "#111827" },
    Transparent: { backgroundColour: "white" }
};


const Box = ({variant = 'Transparent', children, className}: BoxProps) => {

    const backgroundColourStyle = variantConf[variant].backgroundColour
   

    const styles: React.CSSProperties = {
        backgroundColor: backgroundColourStyle,
    }

    return (
        <div className={className}  style={styles}>{children}</div>
    )
}

export default Box