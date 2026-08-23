import './Button.css'

type Variant = "Primary" | "Secondary" | "Transparent" | "Danger"
type Rounded = "Flat" | "Bubble" | "Round"

interface ButtonProps {
    variant?: Variant;
    children: React.ReactNode;
    rounded?: Rounded;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
    disabled?: boolean;
}

type VariantVars = React.CSSProperties & Record<`--btn-${string}`, string>

const variantConf: Record<Variant, { color: string; vars: VariantVars }> = {
    Primary: {
        color: "white",
        vars: {
            "--btn-face-top": "#8b5cf6",
            "--btn-face-bottom": "#6d28d9",
            "--btn-edge": "rgba(76, 29, 149, 0.55)",
            "--btn-highlight": "rgba(255, 255, 255, 0.32)",
            "--btn-glow": "rgba(124, 58, 237, 0.42)"
        }
    },
    Secondary: {
        color: "white",
        vars: {
            "--btn-face-top": "#273141",
            "--btn-face-bottom": "#111827",
            "--btn-edge": "rgba(255, 255, 255, 0.09)",
            "--btn-highlight": "rgba(255, 255, 255, 0.14)",
            "--btn-glow": "rgba(17, 24, 39, 0.35)"
        }
    },
    Transparent: {
        color: "black",
        vars: {
            "--btn-face-top": "#ffffff",
            "--btn-face-bottom": "#eceef2",
            "--btn-edge": "rgba(17, 24, 39, 0.12)",
            "--btn-highlight": "rgba(255, 255, 255, 0.95)",
            "--btn-glow": "rgba(15, 23, 42, 0.14)"
        }
    },
    Danger: {
        color: "white",
        vars: {
            "--btn-face-top": "#ef5350",
            "--btn-face-bottom": "#d32f2f",
            "--btn-edge": "rgba(127, 15, 15, 0.5)",
            "--btn-highlight": "rgba(255, 255, 255, 0.3)",
            "--btn-glow": "rgba(239, 68, 68, 0.4)"
        }
    }
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

    const colorStyle = variantConf[variant].color;
    const borderRadiusStyle = roundedConf[rounded].borderRadius;

    const styles: React.CSSProperties = {
        ...variantConf[variant].vars,
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