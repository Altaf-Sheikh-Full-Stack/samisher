import type Estimate from "../../../Types/Estimate"
import PriceSummary from "../PriceSummary/PriceSummary";
import QuoteForm from "../QuoteForm/QuoteForm";
import ResultHero from "../ResultHero/ResultHero";
import ResultMetrics from "../ResultMetrics/ResultMetrics";


type Props = { estimate: Estimate; onRestart: () => void }
const ResultPage = ({ estimate, onRestart }: Props) => {
    return <div className="app">
        <div className="assessment-card result-card">
            <ResultHero estimate={estimate} />
            <PriceSummary estimate={estimate} />
            <ResultMetrics estimate={estimate} />
            <BreakEvenChart estimate={estimate} />
            <QuoteForm />
            <button className="restart-button" onClick={onRestart}>Start over</button>
        </div>
    </div>;
}


export default ResultPage