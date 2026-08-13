import BONUS from "../../../Data/Bonus";
import Money from "../../../Logic/Format";
import type Estimate from "../../../Types/Estimate"




const PriceSummary = ({ estimate }: { estimate: Estimate }) => {
    return <div className="price-summary">
        <div><span>Estimated service spend</span><strong>{Money(estimate.low)} – {Money(estimate.high)}</strong></div>
        <div className="bonus-row"><span>New customer bonus</span><strong>−{Money(BONUS)}</strong></div>
        <div className="total-row"><span>Estimated first engagement after bonus</span><strong>{Money(estimate.discountedLow)} – {Money(estimate.discountedHigh)}</strong></div>
    </div>;
}

export default PriceSummary