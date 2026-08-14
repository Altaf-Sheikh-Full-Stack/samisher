import Money from "../../../Logic/Format";
import type Estimate from "../../../Types/Estimate";

type Props = { estimate: Estimate };


const ChartStats = ({ estimate }: Props) => {

    return <div className="chart-stats">
        <div><span>Average service cost / result</span><strong>{Money(estimate.avgCost)}</strong></div>
        <div><span>Customer value</span><strong>{Money(estimate.sellingPrice)}</strong></div>
        <div><span>Estimated conversion</span><strong>{Math.round(estimate.conversion * 100)}%</strong></div>
    </div>;
}


export default ChartStats