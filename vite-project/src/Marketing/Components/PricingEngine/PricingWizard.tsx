import { useMemo, useState } from "react";
import Section from "../../../System/Layouts/Section/Section";
import Box from "../../../System/Layouts/Box/Box";
import Text from "../../../System/Texts/Text";
import Button from "../../../System/Button/Button";
import { services, closingOptions, marketOptions, getService } from "./data";
import { buildEstimate } from "./logic";
import type {
  ClosingKey,
  MarketKey,
  PricingInputs,
  ServiceDefinition,
  ServiceId,
  ValueMode,
} from "./types";
import { formatCount, money,  percent } from "./format";
import { CumulativeChart, MonthlyFlowChart } from "./charts";
import "./styles.css";

const CALENDLY = "https://calendly.com/samisher-sales/30min";

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export function PricingWizard() {
  const [step, setStep] = useState(0);
  const [serviceId, setServiceId] = useState<ServiceId | null>(null);
  const [resultTypeId, setResultTypeId] = useState<string | null>(null);
  const [market, setMarket] = useState<MarketKey>("mixed");
  const [volume, setVolume] = useState(40);
  const [customerValue, setCustomerValue] = useState(1500);
  const [valueMode, setValueMode] = useState<ValueMode>("recurring");
  const [closingKey, setClosingKey] = useState<ClosingKey>("0.2");

  const service = getService(serviceId);
  const stepCount = service?.asksConversion ?? true ? 4 : 3;

  const inputs: PricingInputs = {
    serviceId,
    resultTypeId,
    market,
    volume,
    customerValue,
    valueMode,
    closingKey,
  };
  const estimate = useMemo(() => buildEstimate(inputs), [inputs]);

  const current = Math.min(Math.max(step, 0), stepCount - 1);
  const isResult = step >= stepCount;

  function chooseService(next: ServiceId) {
    const nextService = getService(next);
    setServiceId(next);
    setResultTypeId(nextService?.resultTypes[0].id ?? null);
    setValueMode(nextService?.defaultValueMode ?? "recurring");
  }
  function goTo(target: number) {
    setStep(clamp(target, 0, stepCount));
  }

  return (
    <Section className="PE">
      {/* <StepHero /> */}
      <Section className={`PE-PanelWrap${isResult ? " PE-PanelWrap--flat" : ""}`}>
        {isResult && estimate && service ? (
          <Estimate estimate={estimate} onBack={() => goTo(stepCount - 1)} />
        ) : (
          <StepCard
            current={current}
            stepCount={stepCount}
            service={service}
            serviceId={serviceId}
            resultTypeId={resultTypeId}
            setResultTypeId={setResultTypeId}
            market={market}
            setMarket={setMarket}
            volume={volume}
            setVolume={setVolume}
            valueMode={valueMode}
            setValueMode={setValueMode}
            customerValue={customerValue}
            setCustomerValue={setCustomerValue}
            closingKey={closingKey}
            setClosingKey={setClosingKey}
            chooseService={chooseService}
            goTo={goTo}
          />
        )}
      </Section>
    </Section>
  );
}
/* ── Hero ─────────────────────────────────── */
// function StepHero() {
//   return (
  
//   );
// }

/* ── Question card ────────────────────────── */
interface StepCardProps {
  current: number;
  stepCount: number;
  service: ServiceDefinition | null;
  serviceId: ServiceId | null;
  resultTypeId: string | null;
  setResultTypeId: (id: string) => void;
  market: MarketKey;
  setMarket: (m: MarketKey) => void;
  volume: number;
  setVolume: (v: number) => void;
  valueMode: ValueMode;
  setValueMode: (v: ValueMode) => void;
  customerValue: number;
  setCustomerValue: (v: number) => void;
  closingKey: ClosingKey | null;
  setClosingKey: (k: ClosingKey) => void;
  chooseService: (id: ServiceId) => void;
  goTo: (n: number) => void;
}
function StepCard({
  current,
  stepCount,
  service,
  serviceId,
  resultTypeId,
  setResultTypeId,
  market,
  setMarket,
  volume,
  setVolume,
  valueMode,
  setValueMode,
  customerValue,
  setCustomerValue,
  closingKey,
  setClosingKey,
  chooseService,
  goTo,
}: StepCardProps) {
  return (
    <Box className="PE-Step">
      <Box className="PE-StepHdr">
        <Text textType="Text" color="Lite" className="PE-Count">
          Step {current + 1} of {stepCount}
        </Text>
        <Box className="PE-Track">
          <i style={{ width: `${((current + 1) / stepCount) * 100}%` }} />
        </Box>
      </Box>
      {current === 0 && (
        <Box className="PE-Body">
          <Text textType="H3" color="Dark" weight="700">
            What should we deliver?
          </Text>
          <Box className="PE-Grid">
            {services.map((s) => (
              <button
                key={s.id}
                type="button"
                className={`PE-Option ${serviceId === s.id ? "is-on" : ""}`}
                onClick={() => chooseService(s.id)}
              >
                <span className="PE-OptionIcon">{s.icon}</span>
                <span className="PE-OptionName">{s.label}</span>
              </button>
            ))}
          </Box>
        </Box>
      )}

      {current === 1 && service && (
        <Box className="PE-Body">
          <Text textType="H3" color="Dark" weight="700">
            Which type?
          </Text>
          <Box className="PE-List">
            {service.resultTypes.map((t) => (
              <button
                key={t.id}
                type="button"
                className={`PE-Row ${resultTypeId === t.id ? "is-on" : ""}`}
                onClick={() => setResultTypeId(t.id)}
              >
                <span className="PE-RowName">
                  {t.label}
                  {t.badge && <em>{t.badge}</em>}
                </span>
                {/* <span className="PE-RowPrice"> */}
                  {/* {moneyRange(t.price[0], t.price[1])} / {service.unit} */}
                {/* </span> */}
              </button>
            ))}
          </Box>
        </Box>
      )}

      {current === 2 && service && (
        <Box className="PE-Body">
          <Text textType="H3" color="Dark" weight="700">
            Your goals
          </Text>

          <Box className="PE-Field">
            <Text textType="Text" weight="600">
              Market
            </Text>
            <Box className="PE-SegGroup">
              {marketOptions.map((m) => (
                <button
                  key={m.key}
                  type="button"
                  className={`PE-Seg ${market === m.key ? "is-on" : ""}`}
                  onClick={() => setMarket(m.key)}
                >
                  {m.label}
                </button>
              ))}
            </Box>
          </Box>

          <Box className="PE-Field">
            <Box className="PE-LabelRow">
              <Text textType="Text" weight="500">
                {service.unitPlural} per month
              </Text>
              <Text textType="H4" color="Brand" weight="700">
                {formatCount(volume)}
              </Text>
            </Box>
            <input
              className="PE-Slider"
              type="range"
              min={10}
              max={200}
              step={5}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
            />
          </Box>

          <Box className="PE-Field">
            <Box className="PE-LabelRow">
              <Text textType="Text" weight="500">
                {service.valueLabel}
              </Text>
              <Box className="PE-Modes">
                <button
                  type="button"
                  className={`PE-Seg PE-Seg--pill ${valueMode === "recurring" ? "is-on" : ""}`}
                  onClick={() => setValueMode("recurring")}
                >
                  Recurring
                </button>
                <button
                  type="button"
                  className={`PE-Seg PE-Seg--pill ${valueMode === "oneTime" ? "is-on" : ""}`}
                  onClick={() => setValueMode("oneTime")}
                >
                  One-time
                </button>
              </Box>
            </Box>
            <Box className="PE-Cash">
              <span>$</span>
              <input
                type="number"
                min={0}
                step={100}
                value={Number.isFinite(customerValue) ? customerValue : ""}
                onChange={(e) =>
                  setCustomerValue(Math.max(0, Number(e.target.value) || 0))
                }
                placeholder={service.valueExample}
              />
            </Box>
          </Box>
        </Box>
      )}

      {current === 3 && service && (
        <Box className="PE-Body">
          <Text textType="H3" color="Dark" weight="700">
            How many become clients?
          </Text>
          <Box className="PE-Grid PE-Grid--2">
            {closingOptions.map((c) => (
              <button
                key={c.key}
                type="button"
                className={`PE-Option ${closingKey === c.key ? "is-on" : ""}`}
                onClick={() => setClosingKey(c.key)}
              >
                <Text textType="H4" weight="800">
                  {c.label}
                </Text>
                <Text textType="Text" color="Lite">
                  ≈ {formatCount(volume * c.rate)} clients / month
                </Text>
              </button>
            ))}
          </Box>
        </Box>
      )}

      <Box className="PE-Foot">
        {current > 0 && (
          <Button variant="Transparent" rounded="Bubble" onClick={() => goTo(current - 1)}>
            Back
          </Button>
        )}
        <Button
          rounded="Bubble"
          disabled={current === 0 && service === null}
          onClick={() => goTo(current + 1)}
        >
          {current === stepCount - 2 ? "See my estimate →" : "Continue →"}
        </Button>
      </Box>
    </Box>
  );
}

/* ── Estimate results ─────────────────────── */
function Estimate({
  estimate,
  // onBack,
}: {
  estimate: NonNullable<ReturnType<typeof buildEstimate>>;
  onBack: () => void;
}) {
  const {
    serviceName,
    // resultLabel,
    unit,
    pricePerResultMin,
    // pricePerResultMax,
    monthlyCostMin,
    // monthlyCostMax,
    resultsPerMonth,
    conversionRate,
    // customersPerMonth,
    breakEvenMonth,
    profitAfter12Months,
    totalValue12Months,
    totalCost12Months,
  } = estimate;

  // const roi12 =
  //   totalCost12Months > 0
  //     ? Math.round((profitAfter12Months / totalCost12Months) * 100)
  //     : 0;

  return (
    <Box className="PE-Result">
      <Box className="PE-ResultHead">
        <Box>
          <Text textType="H3" color="Dark" weight="700">
            {serviceName}
          </Text>
        </Box>
       
      </Box>

      <Box className="PE-Kpis">
        <Box className="PE-Kpi">
          <Text textType="Text" weight="500" color="Lite" >Cost /{unit}</Text>
          <Text textType="H2" weight="800">
            ${pricePerResultMin}
          </Text>
        </Box>
        <Box className="PE-Kpi">
          <Text textType="Text" weight="500" color="Lite">Cost /Month</Text>
          <Text textType="H2" weight="800">
            ${monthlyCostMin}
          </Text>
          
        </Box>
        <Box className="PE-Kpi">
          <Text textType="Text" weight="500" color="Lite">{unit} / Month</Text>
          <Text textType="H2" weight="800">{formatCount(resultsPerMonth)}</Text>
          
        </Box>
        <Box className="PE-Kpi">
          <Text textType="Text" color="Lite" weight="500">Conversion Rate</Text>
          <Text textType="H2" weight="800">{percent(conversionRate)}</Text>
        
        </Box>
      </Box>

      <Box className="PE-Charts">
        <Box className="PE-ChartCard">
          <Text textType="H3" weight="400">Cost vs Revenue</Text>
          <Box className="PE-Chart">
            <CumulativeChart estimate={estimate} />
          </Box>
        </Box>
        <Box className="PE-ChartCard">
          <Text textType="H3" weight="400" >Monthly Revenue</Text>
          <Box className="PE-Chart">
            <MonthlyFlowChart estimate={estimate} />
          </Box>
        </Box>
      </Box>

      <Box className={`PE-Verdict ${breakEvenMonth !== null && breakEvenMonth <= 12 ? "is-good" : "is-warn"}`}>
        <Box className="PE-VerdictIcon">
          {breakEvenMonth !== null && breakEvenMonth <= 12 ? "✓" : "◔"}
        </Box>
        <Box className="PE-VerdictBody">
          {breakEvenMonth === null && (
            <>
              <Text textType="H3" weight="600">
                No break-even in year one
              </Text>
              <Text textType="H4" color="Lite" weight="400">
                {money(totalCost12Months)} invested → {money(totalValue12Months)}{" "}
                returned, net {money(profitAfter12Months)}.
              </Text>
            </>
          )}
          {breakEvenMonth !== null && breakEvenMonth <= 12 && (
            <>
              <Text textType="H3" weight="600">
                Profitable after {breakEvenMonth} Month
              </Text>
              <Text textType="H4" color="Lite" weight="400">
                Projected net {profitAfter12Months >= 0 ? "+" : ""}
                {money(profitAfter12Months)} /Year,
              </Text>
            </>
          )}
          {breakEvenMonth !== null && breakEvenMonth > 12 && (
            <>
             <Text textType="H3" weight="600">
                Profitable after {breakEvenMonth} Month
              </Text>
              <Text textType="H4" color="Lite" weight="400">
                Projected net {profitAfter12Months >= 0 ? "+" : ""}
                {money(profitAfter12Months)} /Year,
              </Text>
            </>
          )}
        </Box>
      </Box>
      {/* <Box>
         <Button variant="Secondary" rounded="Bubble" onClick={onBack}>
          ← Edit
        </Button>
        <Button variant="Primary" rounded="Bubble">Book meeting</Button>
      </Box> */}
      <CTA />
    </Box>
  );
}

// /* ── Bottom CTA ───────────────────────────── */
function CTA() {
  return (
    <Section className="PE-CTA"  rounded="Bubble">
      <Box variant="Secondary">
        <Text textType="H4">
          What are you waiting for? Book a meeting and get <Text textType="H3" weight="800">$200 off now!</Text>

        </Text>
      </Box>
      <Button rounded="Bubble">
        <a
          style={{ color: "#ffffff", textDecoration: "none" }}
          href={CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
        >
          Let’s Unlock Your Growth
        </a>
      </Button>
    </Section>
  );
}