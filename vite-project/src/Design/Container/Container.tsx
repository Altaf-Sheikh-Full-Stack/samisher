


type Shadow =  | "True" | "Fales";
type Color = "Primary" | "Secondary" | "Transparent" | "White"
type Rounded = "True" | "Fales";

interface ContainerProps {
    children: React.ReactNode;
    className?:string;
    shadow?:Shadow;
    color?:Color;
    rounded?:Rounded;
}

const colorConf: Record<Color, { backgroundColour: string; }> = {
    Primary: { backgroundColour: "#7C3AED" },
    Secondary: { backgroundColour: "whitesmoke" },
    Transparent: { backgroundColour: "#ffffff00" },
    White: { backgroundColour: "white" }
};


const shadowConf: Record<Shadow, { boxShadow: string; }> = {
    True: { boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;" },
    Fales: { boxShadow: "none" }
};

const Container = ({color = 'White',shadow = 'Fales', children, className }: ContainerProps) => {


    const backgroundColourStyle = colorConf[color].backgroundColour
    const boxShadowStyle = shadowConf[shadow].boxShadow

    const styles: React.CSSProperties = {
        backgroundColor: backgroundColourStyle,
        boxShadow: boxShadowStyle
    }


    return (
        <div className={className} style={styles}>
            {children}
        </div>
    )
}

            

export default Container