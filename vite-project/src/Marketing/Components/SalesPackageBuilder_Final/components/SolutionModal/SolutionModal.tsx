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
         
            <Text textType="SubHeading">What exact result do you need?</Text>
            <Text textType="Text">
              A clearer result definition gives you a more meaningful estimate.
            </Text>
          </div>
          <button className="spbModal__close" onClick={onClose}>×</button>
        </header>

        <div className="spbSolutionList">
          {service.solutions.map((solution) => (
            <button key={solution.id} onClick={() => onSelect(solution)}>
              <span>{solution.label}</span>
              <span>→</span>
            </button>
          ))}
        </div>

        <button className="spbModal__back" onClick={onBack}>← Back</button>
      </div>
    </div>
  );
}
