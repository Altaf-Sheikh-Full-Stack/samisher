import { serviceDefinitions } from "../../data/services";
import { calculateService } from "../../logic/estimate";
import { formatMoney, formatRange } from "../../utils/formatMoney";
import type { ServiceItem } from "../../types";
import { ServiceEconomicsChart } from "../ServiceEconomicsChart/ServiceEconomicsChart";
import { Metric } from "../../../../../System/Metric/Metric";
import "./ServiceCard.css";
import Text from "../../../../../System/Texts/Text";
import Section from "../../../../../System/Layouts/Section/Section";
import Button from "../../../../../System/Button/Button";

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

  const paybackText =
    estimate.paybackMonths === null
      ? "No payback in this scenario"
      : estimate.paybackMonths <= 1
        ? `Pays back in ~${Math.max(1, Math.ceil(estimate.paybackMonths * 30))} days`
        : `Pays back in ~${estimate.paybackMonths.toFixed(1)} months`;

  return (
    <Section rounded="Bubble" className={`spbCard ${item.enabled ? "" : "spbCard--disabled"}`}>
      <header className="spbCard__header">
        <div className="spbCard__heading">
          <Text className="spbCard__eyebrow">{service.name}</Text>
          <Text textType="H2">{solution}</Text>
          <p className="spbCard__meta">
            {[item.config.industry, item.config.country, item.config.companySize, item.config.market]
              .filter(Boolean)
              .join(" · ")}
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
          <div className="spbCard__legend">
            <span><i className="revenue" /> Revenue</span>
            <span><i className="cost" /> Acquisition cost</span>
          </div>

          <ServiceEconomicsChart estimate={estimate} />
        </div>

        <div className="spbCard__metrics">
          <Metric
            label="Cost / result"
            value={formatRange(
              estimate.costPerResultMin,
              estimate.costPerResultMax,
            )}
          />
          <Metric
            label="Cost / month"
            value={formatRange(
              estimate.monthlySpendMin,
              estimate.monthlySpendMax,
            )}
          />
          <Metric
            label="Target"
            value={`${item.config.targetVolume} / mo`}
          />
          <Metric
            label="Customer revenue"
            value={
              item.config.billingModel === "one-time"
                ? `${formatMoney(item.config.customerValue)} once`
                : `${formatMoney(estimate.customerRevenuePerMonth)} / mo`
            }
          />
        </div>
      </div>

      <footer className="spbCard__footer">
        <span className="spbCard__insight">{paybackText}</span>

        <div className="spbCard__actions">
          <Button variant="Transparent" onClick={onEdit}>Edit</Button>
          <Button className="danger" variant="Danger" onClick={onRemove}>
            Remove
          </Button>
        </div>
      </footer>
    </Section>
  );
}
