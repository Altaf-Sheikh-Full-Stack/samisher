import './Button.css'

type Variant = "Primary" | "Secondary" | "Transparent"
type Rounded = "Flat" | "Bubble" | "Round"

interface ButtonProps {
    variant?: Variant;
    children: React.ReactNode;
    rounded?: Rounded;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
    disabled?: boolean;
}

const variantConf: Record<Variant, { backgroundColour: string; color: string }> = {
    Primary: { backgroundColour: "#7C3AED", color: "white" },
    Secondary: { backgroundColour: "#111827", color: "white" },
    Transparent: { backgroundColour: "white", color: "black" }
};

const roundedConf: Record<Rounded, { borderRadius: number }> = {
    Flat: { borderRadius: 0 },
    Bubble: { borderRadius: 7 },
    Round: { borderRadius: 50 }
};

const Button = ({
    variant = "Primary",
    children,
    rounded = "Flat",
    onClick,
    className,
    disabled = false,
}: ButtonProps) => {

    const backgroundColourStyle = variantConf[variant].backgroundColour;
    const colorStyle = variantConf[variant].color;
    const borderRadiusStyle = roundedConf[rounded].borderRadius;

    const styles: React.CSSProperties = {
        backgroundColor: backgroundColourStyle,
        color: colorStyle,
        borderRadius: borderRadiusStyle
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