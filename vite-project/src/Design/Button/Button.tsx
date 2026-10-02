
import './Button.css'

type Variant = "Primary" | "Secondary" | "Transparent" | "Danger"
type Rounded = "Flat" | "Bubble" | "Round"
type Size = "Small" | "Medium" | "Large"

interface ButtonProps {
    variant?: Variant;
    children: React.ReactNode;
    rounded?: Rounded;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
    disabled?: boolean;
    size?:Size;
}


const sizeConf: Record<Size, { padding: string; fontSize: string }> = {
    Small: {
        padding: "8px 12px",
        fontSize: "12px"
    },
    Medium: {
        padding: "10px 16px",
        fontSize: "14px"
    },
    Large: {
        padding: "15px 20px",
        fontSize: "16px"
    }
};


const variantConf: Record<Variant, { color: string; background: string }> = {
    Primary: {
        color: "black",
        background: "blueviolet"
    },
    Secondary: {
        color: "black",
        background: "white"
    },
    Transparent: {
        color: "black",
        background: "transparent"
    },
    Danger: {
        color: "white",
        background: "#FF0141"
    }
};

const roundedConf: Record<Rounded, { borderRadius: number }> = {
    Flat: { borderRadius: 0 },
    Bubble: { borderRadius: 7 },
    Round: { borderRadius: 100 }
};

const Button = ({
    variant = "Primary",
    children,
    rounded = "Round",
    onClick,
    className,
    disabled = false,
    size = "Medium"
}: ButtonProps) => {

    

    


    const colorStyle = variantConf[variant].color;
    const borderRadiusStyle = roundedConf[rounded].borderRadius;
    const backgroundStyle = variantConf[variant].background;
    const paddingStyle = sizeConf[size].padding;
    const fontSizeStyle = sizeConf[size].fontSize;

    const styles: React.CSSProperties = {
        color: colorStyle,
        background: backgroundStyle,
        borderRadius: borderRadiusStyle,
        padding: paddingStyle,
        fontSize: fontSizeStyle
    };

    return (
       
            <button
                className={`Button ${className || ""}`}
                style={styles}
                onClick={onClick}
                disabled={disabled}
            >
                {children}
            </button>
        
    );
};

export default Button;