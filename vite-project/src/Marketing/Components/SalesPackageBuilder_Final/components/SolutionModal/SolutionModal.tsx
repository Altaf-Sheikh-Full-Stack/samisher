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

        <div className="spbSolutionGrid">
          {service.solutions.map((solution, index) => (
            <button
              key={solution.id}
              className="spbSolutionTile"
              onClick={() => onSelect(solution)}
            >
              <div
                className={`spbServiceTile__art spbSolutionTile__art spbServiceTile__art--${(index % 4) + 1}`}
              >
                <Text textType="SubHeading">{solution.label}</Text>
              </div>
            </button>
          ))}
        </div>

        <button className="spbModal__back" onClick={onBack}>← Back</button>
      </div>
    </div>
  );
}
