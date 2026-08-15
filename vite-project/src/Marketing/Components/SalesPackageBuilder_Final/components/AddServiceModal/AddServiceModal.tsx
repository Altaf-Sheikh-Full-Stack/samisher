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
            <Text textType="SubHeading">Choose a service</Text>
            <Text textType="Text">Start with the result you want us to deliver.</Text>
          </div>
          <button className="spbModal__close" onClick={onClose}>×</button>
        </header>

        <div className="spbServiceGrid">
          {services.map((service, index) => (
            <button
              key={service.id}
              className="spbServiceTile"
              onClick={() => onSelect(service.id)}
            >
              <div className={`spbServiceTile__art spbServiceTile__art--${index + 1}`}>
                <Text textType="SubHeading">{service.name}</Text>
              </div>
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
