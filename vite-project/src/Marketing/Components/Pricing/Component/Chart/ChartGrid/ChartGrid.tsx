

const PAD = { left: 42, right: 18, top: 22, bottom: 36 };


const ChartGrid = ({ pad, height, width, innerHeight }: { pad: typeof PAD; height: number; width: number; innerHeight: number }) => {
    return <>
        {[0.25, 0.5, 0.75].map((r) => <line key={r} x1={pad.left} x2={width - pad.right} y1={pad.top + innerHeight * r} y2={pad.top + innerHeight * r} className="grid" />)}
        <line x1={pad.left} x2={pad.left} y1={pad.top} y2={pad.top + innerHeight} className="axis" />
        <line x1={pad.left} x2={width - pad.right} y1={pad.top + innerHeight} y2={pad.top + innerHeight} className="axis" />
    </>;
}


export default ChartGrid