import Section from "../Container/Section/Section";
import "./Metric.css";

interface Props {
  label: string;
  value: string;
}

export function Metric({ label, value }: Props) {
  return (
    <Section rounded="Bubble" className="spbMetric">
      <span>{label}</span>
      <strong>{value}</strong>
    </Section>
  );
}
