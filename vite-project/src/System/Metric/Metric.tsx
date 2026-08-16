import Box from "../Layouts/Box/Box";
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
      <Text textType="SubHeading">{value}</Text>
    </Section>
  );
}
