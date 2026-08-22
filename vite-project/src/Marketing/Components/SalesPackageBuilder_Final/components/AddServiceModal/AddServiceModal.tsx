import Text from "../../../../../System/Texts/Text";
import type { ServiceDefinition, ServiceId } from "../../types";
import "./AddServiceModal.css";

interface Props {
  services: ServiceDefinition[];
  onSelect: (id: ServiceId) => void;
  onClose: () => void;
}

export function AddServiceModal({ services, onSelect, onClose }: Props) {
  return (
    <div className="spbModalBackdrop">
      <div className="spbModal spbModal--services">
        <header className="spbModal__header">
          <div>
            <span className="spbModal__eyebrow">Step 1 of 3</span>
            <Text textType="H3" weight="500">Choose a service</Text>
            <Text textType="Text" color="Lite">Start with the result you want us to deliver.</Text>
          </div>
          <button className="spbModal__close" onClick={onClose}>×</button>
        </header>

        <div className="spbServiceGrid">
          {services.map((service) => (
            <button
              key={service.id}
              className="spbServiceTile"
              onClick={() => onSelect(service.id)}
            >
              <span className="spbServiceTile__dot" />
              <span className="spbServiceTile__label">{service.name}</span>
            </button>
          ))}
        </div>

        {services.length === 0 && (
          <div className="spbModal__empty">
            Every available service is already in your package.
          </div>
        )}
      </div>
    </div>
  );
}
