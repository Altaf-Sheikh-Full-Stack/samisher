import Money from "../../../Logic/Format";
import type Estimate from "../../../Types/Estimate"




const ResultHero = ({ estimate }: { estimate: Estimate }) => {
    return <>
        <div className="result-icon">✓</div>
        <div className="eyebrow">YOUR ESTIMATED PAY-PER-RESULT RANGE</div>
        <h1>{Money(estimate.low)} – {Money(estimate.high)}</h1>
        <div className="monthly">estimated service spend</div>
        <p className="result-description">Your estimate reflects the services selected plus target industry, country, company size, market difficulty and your selling price. This is an estimate, not a fixed quote.</p>
    </>;
}

export default ResultHero