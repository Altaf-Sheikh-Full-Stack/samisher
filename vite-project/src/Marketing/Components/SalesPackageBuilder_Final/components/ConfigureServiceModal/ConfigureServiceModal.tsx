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
    <div className="spbModalBackdrop">
      <div className="spbModal spbModal--configure">
        <header className="spbModal__header">
          <div>
            <span className="spbModal__eyebrow">CONFIGURE SERVICE</span>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
          </div>
          <button className="spbModal__close" onClick={onClose}>×</button>
        </header>

        <div className="spbForm">
          <Field label="Specific result" full>
            <select
              value={config.solutionId}
              onChange={(e) => set("solutionId", e.target.value)}
            >
              {service.solutions.map((solution) => (
                <option key={solution.id} value={solution.id}>
                  {solution.label}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Target industry">
            <select
              value={config.industry}
              onChange={(e) => set("industry", e.target.value)}
            >
              <option value="">Choose industry</option>
              {industryOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </Field>

          <Field label="Country / market">
            <select
              value={config.country}
              onChange={(e) => set("country", e.target.value)}
            >
              <option value="">Choose country</option>
              {countryOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </Field>

          <Field label="Company size">
            <select
              value={config.companySize}
              onChange={(e) => set("companySize", e.target.value)}
            >
              {companySizeOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </Field>

          <Field label="Target market">
            <select
              value={config.market}
              onChange={(e) => set("market", e.target.value)}
            >
              {marketOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </Field>

          <Field label="Target results per month">
            <input
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
          </Field>

          {isMeeting && (
            <Field label="Who needs to be in the meeting?" full>
              <select
                value={config.decisionMaker ?? ""}
                onChange={(e) => set("decisionMaker", e.target.value)}
              >
                <option value="">Choose decision-maker profile</option>
                {decisionMakerOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </Field>
          )}

          {isCloser && (
            <Field label="Where do the opportunities come from?" full>
              <select
                value={config.closingSource ?? ""}
                onChange={(e) => set("closingSource", e.target.value)}
              >
                <option value="">Choose opportunity source</option>
                {closingSourceOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </Field>
          )}

          {isCollection ? (
            <>
              <Field label="How old are the outstanding payments?">
                <select
                  value={config.collectionAge ?? ""}
                  onChange={(e) => set("collectionAge", e.target.value)}
                >
                  <option value="">Choose age</option>
                  {collectionAgeOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </Field>

              <Field label="Typical amount to collect">
                <input
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
              </Field>
            </>
          ) : (
            <>
              <Field label="Average customer value">
                <input
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
              </Field>

              <Field label="How does the customer pay?">
                <select
                  value={config.billingModel}
                  onChange={(e) =>
                    set("billingModel", e.target.value as BillingModel)
                  }
                >
                  <option value="one-time">One-time</option>
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="annual">Annual</option>
                </select>
              </Field>

              {config.billingModel !== "one-time" && (
                <Field label="Typical customer lifetime (months)" full>
                  <input
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
                </Field>
              )}
            </>
          )}
        </div>

        <div className="spbForm__note">
          <strong>Why we ask this</strong>
          <span>
            Your target market, result type, and monthly volume affect the
            estimated cost per result.
          </span>
        </div>

        <footer className="spbModal__footer">
          <button className="spbSecondary" onClick={onBack}>← Back</button>
          <button
            className="spbPrimary"
            disabled={!valid}
            onClick={() => onSave(config)}
          >
            Save service
          </button>
        </footer>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
  full = false,
}: {
  label: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <label className={`spbField ${full ? "spbField--full" : ""}`}>
      <span>{label}</span>
      {children}
    </label>
  );
}
