import Text from "../../../../../System/Texts/Text";
import type { ServiceDefinition, SolutionDefinition } from "../../types";
import "./SolutionModal.css";

interface Props {
  service: ServiceDefinition;
  onSelect: (id: SolutionDefinition) => void;
  onBack: () => void;
  onClose: () => void;
}

export function SolutionModal({ service, onSelect, onBack, onClose }: Props) {
  return (
    <div className="spbModalBackdrop">
      <div className="spbModal spbModal--solution">
        <header className="spbModal__header">
          <div>
            <span className="spbModal__eyebrow">Step 2 of 3</span>
            <Text textType="H3" weight="500">What exact result do you need?</Text>
            <Text textType="Text" color="Lite">
              A clearer result definition gives you a more meaningful estimate.
            </Text>
          </div>
          <button className="spbModal__close" onClick={onClose}>×</button>
        </header>

        <div className="spbSolutionGrid">
          {service.solutions.map((solution) => (
            <button
              key={solution.id}
              className="spbSolutionTile"
              onClick={() => onSelect(solution)}
            >
              <span className="spbSolutionTile__dot" />
              <span className="spbSolutionTile__label">{solution.label}</span>
            </button>
          ))}
        </div>

        <button className="spbModal__back" onClick={onBack}>← Back</button>
      </div>
    </div>
  );
}
