

const PAD = { left: 42, right: 18, top: 22, bottom: 36 };
const HEIGHT = 250;

const ChartMarker = ({ x, y }: { x: number; y: number }) => {
    return <>
        <line x1={x} x2={x} y1={PAD.top} y2={PAD.top + (HEIGHT - PAD.top - PAD.bottom)} className="break-line" />
        <circle cx={x} cy={y} r="5" className="break-dot" />
        <text x={x + 8} y={y - 10} className="break-label">Break-even</text>
    </>;
}


export default ChartMarker