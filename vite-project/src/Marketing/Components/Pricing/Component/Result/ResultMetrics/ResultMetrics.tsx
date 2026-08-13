import Money from "../../../Logic/Format";
import type Estimate from "../../../Types/Estimate"




const ResultMetrics = ({ estimate }: { estimate: Estimate }) => {
  return <div className="result-metrics">
    <div><span>Primary result</span><strong>{estimate.profile.label}</strong></div>
    <div><span>Cost / result</span><strong>{Money(estimate.low)} – {Money(estimate.high)}</strong></div>
    <div><span>Potential customer revenue</span><strong>{Money(estimate.potentialRevenueLow)} – {Money(estimate.potentialRevenueHigh)}</strong></div>
  </div>;
}

export default ResultMetrics