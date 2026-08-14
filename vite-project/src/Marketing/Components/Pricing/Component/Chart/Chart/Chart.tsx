import type Estimate from "../../../Types/Estimate";
import ChartGrid from "../ChartGrid/ChartGrid";
import ChartHeader from "../ChartHeader/ChartHeader";
import ChartMarker from "../ChartMarker/ChartMarker";
import ChartStats from "../ChartStats/ChartStats";
import EconomicsWarning from "../EconomicsWarning/EconomicsWarning";

type Props = { estimate: Estimate };
const WIDTH = 680;
const HEIGHT = 250;
const PAD = { left: 42, right: 18, top: 22, bottom: 36 };



const Chart = ({ estimate }: Props) => {
    const innerWidth = WIDTH - PAD.left - PAD.right;
    const innerHeight = HEIGHT - PAD.top - PAD.bottom;
    const maxResults = Math.max(20, estimate.breakEvenResults ?? 0, 12);
    const results = Array.from({ length: maxResults + 1 }, (_, i) => i);
    const revenue = results.map((n) => n * estimate.revenuePerResult);
    const cost = results.map((n) => n * estimate.avgCost);
    const maxY = Math.max(...revenue, ...cost, 1) * 1.08;
    const x = (n: number) => PAD.left + (n / maxResults) * innerWidth;
    const y = (value: number) => PAD.top + innerHeight - (value / maxY) * innerHeight;
    const points = (values: number[]) => values.map((v, i) => `${x(results[i])},${y(v)}`).join(" ");
    const showBreakEven = estimate.viable && estimate.breakEvenResults! <= maxResults;
    const breakX = showBreakEven ? x(estimate.breakEvenResults!) : 0;
    const breakY = showBreakEven ? y(estimate.breakEvenResults! * estimate.avgCost) : 0;

    return (
        <section className="chart-card">
            <ChartHeader estimate={estimate} showBreakEven={showBreakEven} />
            <div className="legend">
                <span><i className="dot revenue-dot" /> Customer revenue</span>
                <span><i className="dot cost-dot" /> Service cost</span>
            </div>
            <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-label="Illustrative break-even chart">
                <ChartGrid pad={PAD} height={HEIGHT} width={WIDTH} innerHeight={innerHeight} />
                <polyline points={points(cost)} className="cost-line" />
                <polyline points={points(revenue)} className="revenue-line" />
                {showBreakEven && <ChartMarker x={breakX} y={breakY} />}
                <text x={PAD.left} y={HEIGHT - 8} className="axis-label">0</text>
                <text x={WIDTH - PAD.right} y={HEIGHT - 8} textAnchor="end" className="axis-label">{maxResults} results</text>
            </svg>
            <ChartStats estimate={estimate} />
            {!showBreakEven && estimate.sellingPrice > 0 && <EconomicsWarning estimate={estimate} />}
            <p className="chart-note">Scenario only. Actual performance can vary with offer quality, sales process, market conditions and conversion rate. The chart is not a guarantee of revenue or profit.</p>
        </section>
    );
}


export default Chart