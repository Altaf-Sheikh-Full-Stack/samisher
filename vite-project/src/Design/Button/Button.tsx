
import './Button.css'

type Variant = "Primary" | "Secondary" | "Transparent" | "Danger"
type Rounded = "Flat" | "Bubble" | "Round"
type Size = "Small" | "Medium" | "Large"
type Shadow = "True" | "False"

interface ButtonProps {
    variant?: Variant;
    children: React.ReactNode;
    rounded?: Rounded;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
    disabled?: boolean;
    size?:Size;
    shadow?: Shadow;
    style?: React.CSSProperties;
    /** Whether the button colour dims on hover. Defaults to true. */
    dimOnHover?: boolean;
    /** How much darker the button gets on hover (0 - 1). Defaults to 0.12. */
    dimAmount?: number;
}


const shadowConf: Record<Shadow, { boxShadow: string }> = {
    "True": {
        boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;"
    },
    "False": {
        boxShadow: "none"
    }
};

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
        color: "white",
        background: "#111827"
    },
    Secondary: {
        color: "black",
        background: "whitesmoke"
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
    size = "Medium",
    shadow = "False",
    style,
    dimOnHover = true,
    dimAmount = 0.12
}: ButtonProps) => {

    const colorStyle = variantConf[variant].color;
    const borderRadiusStyle = roundedConf[rounded].borderRadius;
    const backgroundStyle = variantConf[variant].background;
    const paddingStyle = sizeConf[size].padding;
    const fontSizeStyle = sizeConf[size].fontSize;
    const boxShadowStyle = shadowConf[shadow].boxShadow;

    // Brightness multiplier applied on hover to dim (darken) the button colour.
    const dimBrightness = Math.min(Math.max(1 - dimAmount, 0), 1);

    const styles: React.CSSProperties = {
        color: colorStyle,
        background: backgroundStyle,
        borderRadius: borderRadiusStyle,
        padding: paddingStyle,
        fontSize: fontSizeStyle,
        boxShadow: boxShadowStyle,
        "--button-dim-brightness": dimBrightness,
    } as React.CSSProperties;

    return (
        
            <button
                className={`Button${dimOnHover ? "" : " Button--no-dim"}${className ? ` ${className}` : ""}`}
                style={{ ...styles, ...style }}
                onClick={onClick}
                disabled={disabled}
            >
                {children}
            </button>
        
    );
};

export default Button;
