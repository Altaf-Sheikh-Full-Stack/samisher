import { serviceDefinitions } from "../../data/services";
import { calculateService } from "../../logic/estimate";
import { formatMoney, formatRange } from "../../utils/formatMoney";
import type { ServiceItem } from "../../types";
import { ServiceEconomicsChart } from "../ServiceEconomicsChart/ServiceEconomicsChart";
import "./ServiceCard.css";

interface Props {
  item: ServiceItem;
  onEdit: () => void;
  onRemove: () => void;
  onToggle: () => void;
}

export function ServiceCard({
  item,
  onEdit,
  onRemove,
  onToggle,
}: Props) {
  const service = serviceDefinitions.find((entry) => entry.id === item.serviceId)!;
  const solution =
    service.solutions.find((entry) => entry.id === item.solutionId)?.label ??
    item.solutionId;

  const estimate = calculateService(item.config);

  return (
    <article className={`spbCard ${item.enabled ? "" : "spbCard--disabled"}`}>
      <header className="spbCard__header">
        <div>
          <div className="spbCard__eyebrow">{service.name}</div>
          <h2>{solution}</h2>
          <p>
            {item.config.targetVolume} {service.resultUnit} / month
          </p>
        </div>

        <button
          className={`spbToggle ${item.enabled ? "is-on" : ""}`}
          onClick={onToggle}
          aria-label={item.enabled ? "Disable service" : "Enable service"}
        >
          <span />
        </button>
      </header>

      <div className="spbCard__content">
        <div className="spbCard__chart">
          <div className="spbCard__chartHeader">
            <div>
              <span>Customer economics</span>
              <strong>
                {estimate.paybackMonths === null
                  ? "No payback estimate"
                  : estimate.paybackMonths <= 1
                    ? `Pays back in ~${Math.max(
                        1,
                        Math.ceil(estimate.paybackMonths * 30),
                      )} days`
                    : `Pays back in ~${estimate.paybackMonths.toFixed(1)} months`}
              </strong>
            </div>
            <div className="spbCard__legend">
              <span><i className="revenue" /> Revenue</span>
              <span><i className="cost" /> Acquisition cost</span>
            </div>
          </div>

          <ServiceEconomicsChart estimate={estimate} />
        </div>

        <div className="spbCard__metrics">
          <Metric
            label="Cost per result"
            value={formatRange(
              estimate.costPerResultMin,
              estimate.costPerResultMax,
            )}
          />
          <Metric
            label="Cost per month"
            value={formatRange(
              estimate.monthlySpendMin,
              estimate.monthlySpendMax,
            )}
          />
          <Metric
            label="Result target"
            value={`${item.config.targetVolume} / month`}
          />
          <Metric
            label="Customer revenue"
            value={
              item.config.billingModel === "one-time"
                ? `${formatMoney(item.config.customerValue)} one-time`
                : `${formatMoney(estimate.customerRevenuePerMonth)} / month`
            }
          />
        </div>
      </div>

      <footer className="spbCard__footer">
        <div className="spbCard__meta">
          <span>{item.config.industry}</span>
          <span>{item.config.country}</span>
          <span>{item.config.companySize}</span>
          <span>{item.config.market}</span>
        </div>

        <div className="spbCard__actions">
          <button onClick={onEdit}>Edit</button>
          <button className="danger" onClick={onRemove}>Remove</button>
        </div>
      </footer>
    </article>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="spbMetric">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
