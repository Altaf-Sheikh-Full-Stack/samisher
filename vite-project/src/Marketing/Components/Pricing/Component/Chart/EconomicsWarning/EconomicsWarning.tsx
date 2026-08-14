import Money from "../../../Logic/Format";
import type Estimate from "../../../Types/Estimate";


type Props = { estimate: Estimate };


const EconomicsWarning = ({ estimate }: Props) => {
  return <div className="economics-warning">
    <strong>The current scenario is below break-even.</strong>
    <span>Estimated revenue per result is {Money(estimate.revenuePerResult)} versus about {Money(estimate.avgCost)} service cost per result. Increasing customer value or conversion, or lowering result cost, would change the outcome.</span>
  </div>;
}


export default EconomicsWarning