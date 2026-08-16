import { formatMoney, formatRange } from "../../utils/formatMoney";
import type { PackageEstimate } from "../../types";
import "./PackageSummary.css";
import Text from "../../../../../System/Texts/Text";
import Box from "../../../../../System/Layouts/Box/Box";
import Button from "../../../../../System/Button/Button";
import Section from "../../../../../System/Layouts/Section/Section";

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
    <Section rounded="Bubble" className="spbSummary" >
      <Text textType="SubHeading">Your estimated cost</Text>
      <Text textType="Text">
        {activeServiceCount} active service
        {activeServiceCount === 1 ? "" : "s"} included.
      </Text>

   
      <div className="spbSummary__rows">
        <Box>
          <Text textType="SubHeading" >Cost</Text>
          <Text textType="SubHeading">
            {formatRange(
              estimate.monthlySpendMin,
              estimate.monthlySpendMax,
            )}
          </Text>
        </Box>

        <Box className="bonus">
          <Text textType="SubHeading">Discount</Text>
          <Text textType="SubHeading">−{formatMoney(estimate.bonus)}</Text>
        </Box>

        <Box className="final">
          <Text textType="SubHeading">Final</Text>
          <Text textType="SubHeading">
            {finalFullyCovered
              ? "Fully covered"
              : formatRange(
                  estimate.firstEngagementMin,
                  estimate.firstEngagementMax,
                )}
          </Text>
        </Box>
      </div>

 

      <Button variant="Primary" rounded="Bubble" className="spbSummary__cta" onClick={onBookMeeting}>
        Book a meeting →
      </Button>
<Box>
  <Text textType="Text" className="spbSummary__disclaimer">
    *This is an estimate based on the information you provided. The final cost may vary based on your specific needs and requirements.
  </Text>
</Box>

    </Section>
  );
}
