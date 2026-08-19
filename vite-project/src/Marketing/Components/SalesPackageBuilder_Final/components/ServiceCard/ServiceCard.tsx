import { serviceDefinitions } from "../../data/services";
import { calculateService } from "../../logic/estimate";
import { formatMoney, formatRange } from "../../utils/formatMoney";
import type { ServiceItem } from "../../types";
import { ServiceEconomicsChart } from "../ServiceEconomicsChart/ServiceEconomicsChart";
import { Metric } from "../../../../../System/Metric/Metric";
import "./ServiceCard.css";
import Text from "../../../../../System/Texts/Text";
import Section from "../../../../../System/Layouts/Section/Section";
import Box from "../../../../../System/Layouts/Box/Box";
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

  return (
    <Section rounded="Bubble" className={`spbCard ${item.enabled ? "" : "spbCard--disabled"}`}>
      <header className="spbCard__header">
        <Box>
          <Text className="spbCard__eyebrow">{service.name}</Text>
          <Text textType="H2">{solution}</Text>
          {/* <Text>
            {item.config.targetVolume} {service.resultUnit} / month
          </Text> */}
        </Box>

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
              <Text>P&L Chart</Text>
              {/* <Text textType="SubHeading">
                {estimate.paybackMonths === null
                  ? "No payback estimate"
                  : estimate.paybackMonths <= 1
                    ? `Pays back in ~${Math.max(
                        1,
                        Math.ceil(estimate.paybackMonths * 30),
                      )} days`
                    : `Pays back in ~${estimate.paybackMonths.toFixed(1)} months`}
              </Text> */}
            </div>
            <div className="spbCard__legend">
              <Text><i className="revenue" /> Revenue</Text>
              <Text><i className="cost" /> Acquisition cost</Text>
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
          <Button variant="Transparent" onClick={onEdit}>Edit</Button>
          <Button className="danger" variant="Danger" onClick={onRemove}>
            Remove
          </Button>
        </div>
      </footer>
    </Section>
  );
}
