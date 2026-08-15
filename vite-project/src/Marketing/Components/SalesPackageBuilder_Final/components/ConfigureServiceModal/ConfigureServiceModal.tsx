import { useState } from "react";
import type { ServiceConfig, ServiceDefinition, BillingModel } from "../../types";
import {
  industryOptions,
  countryOptions,
  companySizeOptions,
  marketOptions,
  decisionMakerOptions,
  closingSourceOptions,
  collectionAgeOptions,
} from "../../data/services";
import "./ConfigureServiceModal.css";
import Button from "../../../../../System/Button/Button";
import Text from "../../../../../System/Texts/Text";
import Box from "../../../../../System/Layouts/Box/Box";
import Input from "../../../../../System/Inputs/Input";

interface Props {
  service: ServiceDefinition;
  initialConfig?: ServiceConfig;
  onSave: (config: ServiceConfig) => void;
  onBack: () => void;
  onClose: () => void;
}

function initialConfig(service: ServiceDefinition): ServiceConfig {
  return {
    serviceId: service.id,
    solutionId: service.solutions[0].id,
    industry: "",
    country: "",
    companySize: "11–50",
    market: "Specific niche",
    targetVolume: 25,
    customerValue: 2500,
    billingModel: "monthly",
    customerLifetimeMonths: 12,
  };
}

export function ConfigureServiceModal({
  service,
  initialConfig: provided,
  onSave,
  onBack,
  onClose,
}: Props) {
  const [config, setConfig] = useState<ServiceConfig>(
    provided ?? initialConfig(service),
  );

  const set = <K extends keyof ServiceConfig>(
    key: K,
    value: ServiceConfig[K],
  ) => setConfig((current) => ({ ...current, [key]: value }));

  const isMeeting = service.id === "meeting-booking";
  const isCloser = service.id === "closer";
  const isCollection = service.id === "collection";

  const valid =
    config.industry.trim() &&
    config.country.trim() &&
    config.market.trim() &&
    config.targetVolume >= 1 &&
    config.targetVolume <= 1000 &&
    config.customerValue > 0;

  return (
    <div className="ServiceModal-backdrop">
      <div className="ServiceModal ServiceModal--configure">
        <header className="ServiceModal-header">
          <div>
            <Text textType="SubHeading">{service.name}</Text>
            <Text textType="Text">{service.description}</Text>
          </div>
          <button className="ServiceModal-close" onClick={onClose}>×</button>
        </header>

        <div className="ServiceModal-form">

          <Input
            className="ServiceModal-field ServiceModal-field--full"
            labelClassName="ServiceModal-field-label"
            label="Specific result"
            name="solutionId"
            options={service.solutions.map((s) => ({ value: s.id, label: s.label }))}
            value={config.solutionId}
            onChange={(e) => set("solutionId", e.target.value)}
          />

          <Input
            className="ServiceModal-field"
            labelClassName="ServiceModal-field-label"
            label="Target industry"
            name="industry"
            options={[{ value: "", label: "Choose industry" }, ...industryOptions.map((o) => ({ value: o, label: o }))]}
            value={config.industry}
            onChange={(e) => set("industry", e.target.value)}
          />

          <Input
            className="ServiceModal-field"
            labelClassName="ServiceModal-field-label"
            label="Country / market"
            name="country"
            options={[{ value: "", label: "Choose country" }, ...countryOptions.map((o) => ({ value: o, label: o }))]}
            value={config.country}
            onChange={(e) => set("country", e.target.value)}
          />

          <Input
            className="ServiceModal-field"
            labelClassName="ServiceModal-field-label"
            label="Company size"
            name="companySize"
            options={companySizeOptions}
            value={config.companySize}
            onChange={(e) => set("companySize", e.target.value)}
          />

          <Input
            className="ServiceModal-field"
            labelClassName="ServiceModal-field-label"
            label="Target market"
            name="market"
            options={marketOptions}
            value={config.market}
            onChange={(e) => set("market", e.target.value)}
          />

          <Input
            className="ServiceModal-field"
            labelClassName="ServiceModal-field-label"
            label="Target results per month"
            name="targetVolume"
            type="number"
            min={1}
            max={1000}
            value={config.targetVolume}
            onChange={(e) =>
              set(
                "targetVolume",
                Math.min(1000, Math.max(1, Number(e.target.value) || 1)),
              )
            }
          />

          {isMeeting && (
            <Input
              className="ServiceModal-field ServiceModal-field--full"
              labelClassName="ServiceModal-field-label"
              label="Who needs to be in the meeting?"
              name="decisionMaker"
              options={[...decisionMakerOptions.map((o) => ({ value: o, label: o }))]}
              value={config.decisionMaker ?? ""}
              onChange={(e) => set("decisionMaker", e.target.value)}
            />
          )}

          {isCloser && (
            <Input
              className="ServiceModal-field ServiceModal-field--full"
              labelClassName="ServiceModal-field-label"
              label="Where do the opportunities come from?"
              name="closingSource"
              options={[{ value: "", label: "Choose opportunity source" }, ...closingSourceOptions.map((o) => ({ value: o, label: o }))]}
              value={config.closingSource ?? ""}
              onChange={(e) => set("closingSource", e.target.value)}
            />
          )}

          {isCollection ? (
            <>
              <Input
                className="ServiceModal-field"
                labelClassName="ServiceModal-field-label"
                label="How old are the outstanding payments?"
                name="collectionAge"
                options={[{ value: "", label: "Choose age" }, ...collectionAgeOptions.map((o) => ({ value: o, label: o }))]}
                value={config.collectionAge ?? ""}
                onChange={(e) => set("collectionAge", e.target.value)}
              />

              <Input
                className="ServiceModal-field"
                labelClassName="ServiceModal-field-label"
                label="Typical amount to collect"
                name="collectionAmount"
                type="number"
                min={1}
                value={config.collectionAmount ?? ""}
                onChange={(e) =>
                  set(
                    "collectionAmount",
                    Math.max(1, Number(e.target.value) || 1),
                  )
                }
                placeholder="e.g. 5000"
              />
            </>
          ) : (
            <>
              <Input
                className="ServiceModal-field"
                labelClassName="ServiceModal-field-label"
                label="Average customer value"
                name="customerValue"
                type="number"
                min={1}
                value={config.customerValue}
                onChange={(e) =>
                  set(
                    "customerValue",
                    Math.max(1, Number(e.target.value) || 1),
                  )
                }
              />

              <Input
                className="ServiceModal-field"
                labelClassName="ServiceModal-field-label"
                label="How does the customer pay?"
                name="billingModel"
                options={[
                  { value: "one-time", label: "One-time" },
                  { value: "monthly", label: "Monthly" },
                  { value: "quarterly", label: "Quarterly" },
                  { value: "annual", label: "Annual" },
                ]}
                value={config.billingModel}
                onChange={(e) => set("billingModel", e.target.value as BillingModel)}
              />

              {config.billingModel !== "one-time" && (
                <Input
                  className="ServiceModal-field ServiceModal-field--full"
                  labelClassName="ServiceModal-field-label"
                  label="Typical customer lifetime (months)"
                  name="customerLifetimeMonths"
                  type="number"
                  min={1}
                  max={120}
                  value={config.customerLifetimeMonths}
                  onChange={(e) =>
                    set(
                      "customerLifetimeMonths",
                      Math.min(
                        120,
                        Math.max(1, Number(e.target.value) || 1),
                      ),
                    )
                  }
                />
              )}
            </>
          )}
        </div>

        <Box className="ServiceModal-form-note">
          <Text textType="SubHeading">Why we ask this</Text>
          <Text textType="Text" >
            Your target market, result type, and monthly volume affect the
            estimated cost per result.
          </Text>
        </Box>

        <footer className="ServiceModal-footer">
          <Button className="ServiceModal-secondary" variant="Transparent" onClick={onBack}>Back</Button>
          <Button
            className="ServiceModal-primary"
            disabled={!valid}
            onClick={() => onSave(config)}
          >
            Save service
          </Button>
        </footer>
      </div>
    </div>
  );
}

