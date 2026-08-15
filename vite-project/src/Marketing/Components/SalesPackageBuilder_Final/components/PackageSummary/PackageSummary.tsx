import { formatMoney, formatRange } from "../../utils/formatMoney";
import type { PackageEstimate } from "../../types";
import "./PackageSummary.css";

interface Props {
  estimate: PackageEstimate;
  activeServiceCount: number;
  onBookMeeting: () => void;
}

export function PackageSummary({
  estimate,
  activeServiceCount,
  onBookMeeting,
}: Props) {
  const finalFullyCovered = estimate.firstEngagementMax === 0;

  return (
    <aside className="spbSummary">
      <div className="spbSummary__eyebrow">PACKAGE SUMMARY</div>
      <h2>Your estimated package</h2>
      <p>
        {activeServiceCount} active service
        {activeServiceCount === 1 ? "" : "s"} included.
      </p>

      <div className="spbSummary__value">
        <span>Estimated monthly service spend</span>
        <strong>
          {formatRange(
            estimate.monthlySpendMin,
            estimate.monthlySpendMax,
          )}
        </strong>
        <small>Before your first-customer bonus</small>
      </div>

      <div className="spbSummary__rows">
        <div>
          <span>Total service cost</span>
          <strong>
            {formatRange(
              estimate.monthlySpendMin,
              estimate.monthlySpendMax,
            )}
          </strong>
        </div>

        <div className="bonus">
          <span>New customer bonus</span>
          <strong>−{formatMoney(estimate.bonus)}</strong>
        </div>

        <div className="final">
          <span>Final cost for first engagement</span>
          <strong>
            {finalFullyCovered
              ? "Fully covered"
              : formatRange(
                  estimate.firstEngagementMin,
                  estimate.firstEngagementMax,
                )}
          </strong>
        </div>
      </div>

      <div className="spbSummary__why">
        <strong>Why this works</strong>
        <p>
          You only pay for the results in your package. Increase the target
          volume when you want more results, without turning the estimate into
          a fixed retainer.
        </p>
      </div>

      <button className="spbSummary__cta" onClick={onBookMeeting}>
        Book a meeting →
      </button>

      <div className="spbSummary__trust">
        <span>✓ Pay per result</span>
        <span>✓ $200 first-customer credit</span>
        <span>✓ Exact quote reviewed with you</span>
      </div>
    </aside>
  );
}
