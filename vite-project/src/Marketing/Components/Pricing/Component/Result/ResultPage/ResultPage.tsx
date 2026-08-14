import Button from "../../../../../../System/Button/Button";
import Box from "../../../../../../System/Layouts/Box/Box";
import Section from "../../../../../../System/Layouts/Section/Section";
import type Estimate from "../../../Types/Estimate"
import Chart from "../../Chart/Chart/Chart";
import PriceSummary from "../PriceSummary/PriceSummary";
import QuoteForm from "../QuoteForm/QuoteForm";
import ResultHero from "../ResultHero/ResultHero";
import ResultMetrics from "../ResultMetrics/ResultMetrics";
import './ResultPage.css'

type Props = { estimate: Estimate; onRestart: () => void }
const ResultPage = ({ estimate, onRestart }: Props) => {
    return <Section size="Fixed" className="ResultPage">
        <Box className="assessment-card result-card">
            <ResultHero estimate={estimate} />
            <PriceSummary estimate={estimate} />
            <ResultMetrics estimate={estimate} />
            <Chart estimate={estimate} />
            <QuoteForm />
            <Button variant="Transparent" onClick={onRestart}>Start over</Button>
        </Box>
    </Section>;
}


export default ResultPage