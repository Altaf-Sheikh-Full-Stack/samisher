import Section from "../Layouts/Section/Section";
import Text from "../Texts/Text";
import "./Metric.css";

interface Props {
  label: string;
  value: string;
}

export function Metric({ label, value }: Props) {
  return (
    <Section rounded="Bubble" className="spbMetric">
      <Text >{label}</Text>
      <Text textType="H2">{value}</Text>
    </Section>
  );
}
