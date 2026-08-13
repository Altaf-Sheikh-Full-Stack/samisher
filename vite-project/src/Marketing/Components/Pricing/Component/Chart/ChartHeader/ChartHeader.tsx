import type Estimate from "../../../Types/Estimate";





const ChartHeader = ({ estimate, showBreakEven }: { estimate: Estimate; showBreakEven: boolean }) => {
    return (
        <div className="chart-head">
            <div>
                <div className="eyebrow">ILLUSTRATIVE BREAK-EVEN PROJECTION</div>
                <h2>{showBreakEven ? "When could the campaign recover its service cost?" : "Current assumptions do not reach break-even"}</h2>
                <p>The model shows cumulative estimated customer revenue against cumulative service cost as results are delivered.</p>
            </div>
            <div className={`break-badge ${showBreakEven ? "good" : "warn"}`}>
                <span>{showBreakEven ? "Estimated break-even" : "Current status"}</span>
                <strong>{showBreakEven ? `~${estimate.breakEvenResults} results` : "Below break-even"}</strong>
            </div>
        </div>
    );
}

export default ChartHeader