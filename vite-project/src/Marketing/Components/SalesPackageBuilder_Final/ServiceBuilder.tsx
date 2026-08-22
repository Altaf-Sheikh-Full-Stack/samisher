import { useMemo, useState } from "react";

import { AddServiceModal } from "./components/AddServiceModal/AddServiceModal";
import { ConfigureServiceModal } from "./components/ConfigureServiceModal/ConfigureServiceModal";
import { PackageSummary } from "./components/PackageSummary/PackageSummary";
import { ServiceCard } from "./components/ServiceCard/ServiceCard";
import { SolutionModal } from "./components/SolutionModal/SolutionModal";
import { serviceDefinitions } from "./data/services";
import { calculatePackage } from "./logic/estimate";
import { createId } from "./utils/createId";
import type {
  ServiceConfig,
  ServiceItem,
  ServiceId,
  SolutionDefinition,
} from "./types";
import "./styles.css";
import Section from "../../../System/Layouts/Section/Section";
import Text from "../../../System/Texts/Text";
import Button from "../../../System/Button/Button";
import Box from "../../../System/Layouts/Box/Box";

type ModalState =
  | { type: "closed" }
  | { type: "add-service" }
  | { type: "choose-solution"; serviceId: ServiceId }
  | { type: "configure"; serviceId: ServiceId; editingId?: string };

interface ServiceBuilderProps {
  onBookMeeting?: (items: ServiceItem[]) => void;
}

export function ServiceBuilder({ onBookMeeting }: ServiceBuilderProps) {
  const [items, setItems] = useState<ServiceItem[]>([]);
  const [modal, setModal] = useState<ModalState>({ type: "closed" });

  const activeItems = items.filter((item) => item.enabled);

  const packageEstimate = useMemo(
    () => calculatePackage(activeItems),
    [activeItems],
  );

  const selectedService =
    modal.type === "choose-solution" || modal.type === "configure"
      ? serviceDefinitions.find((service) => service.id === modal.serviceId)
      : undefined;

  const editingItem =
    modal.type === "configure" && modal.editingId
      ? items.find((item) => item.id === modal.editingId)
      : undefined;

  const availableServices = serviceDefinitions.filter(
    (service) => !items.some((item) => item.serviceId === service.id),
  );

  function startAddService() {
    setModal({ type: "add-service" });
  }

  function chooseService(serviceId: ServiceId) {
    setModal({ type: "choose-solution", serviceId });
  }

  function chooseSolution(_solutionId: SolutionDefinition) {
    if (modal.type !== "choose-solution") return;

    setModal({
      type: "configure",
      serviceId: modal.serviceId,
    });
  }

  function saveService(config: ServiceConfig) {
    setItems((current) => {
      if (editingItem) {
        return current.map((item) =>
          item.id === editingItem.id
            ? {
                ...item,
                solutionId: config.solutionId,
                config,
              }
            : item,
        );
      }

      return [
        ...current,
        {
          id: createId(),
          serviceId: config.serviceId,
          solutionId: config.solutionId,
          config,
          enabled: true,
        },
      ];
    });

    setModal({ type: "closed" });
  }

  function editService(item: ServiceItem) {
    setModal({
      type: "configure",
      serviceId: item.serviceId,
      editingId: item.id,
    });
  }

  function toggleService(id: string) {
    setItems((current) =>
      current.map((item) =>
        item.id === id
          ? { ...item, enabled: !item.enabled }
          : item,
      ),
    );
  }

  function removeService(id: string) {
    setItems((current) => current.filter((item) => item.id !== id));
  }

  return (
    <Section variant="Transparent" size="Fluid" className="Estimator">
      <div className="Estimator-Content">
        <Box className="Estimator-Header">
            <Text textType="H3">Price estimator</Text>
          <Button
            variant="Primary"
            rounded="Bubble"
            onClick={startAddService}
          >
            + Add service
          </Button>
        </Box>

        {items.length === 0 ? (
          <EmptyState onAdd={startAddService} />
        ) : (
          <main className="spb__layout">
            <section className="spb__services">
              {activeItems.length === 0 && (
                <div className="spb__disabledNotice">
                  All services are currently disabled. Turn a service back on
                  to include it in your estimate.
                </div>
              )}

              {items.map((item) => (
                <ServiceCard
                  key={item.id}
                  item={item}
                  onEdit={() => editService(item)}
                  onRemove={() => removeService(item.id)}
                  onToggle={() => toggleService(item.id)}
                />
              ))}

              {availableServices.length > 0 && (
                <button
                  className="spb__addInline"
                  onClick={startAddService}
                >
                  <span>+</span>
                  Add another service
                </button>
              )}
            </section>

            <PackageSummary
              estimate={packageEstimate}
              activeServiceCount={activeItems.length}
              onBookMeeting={() => onBookMeeting?.(activeItems)}
            />
          </main>
        )}

        {modal.type === "add-service" && (
          <AddServiceModal
            services={availableServices}
            onClose={() => setModal({ type: "closed" })}
            onSelect={chooseService}
          />
        )}

        {modal.type === "choose-solution" && selectedService && (
          <SolutionModal
            service={selectedService}
            onClose={() => setModal({ type: "closed" })}
            onBack={() => setModal({ type: "add-service" })}
            onSelect={chooseSolution}
          />
        )}

        {modal.type === "configure" && selectedService && (
          <ConfigureServiceModal
            service={selectedService}
            initialConfig={editingItem?.config}
            onClose={() => setModal({ type: "closed" })}
            onBack={() =>
              setModal(
                editingItem
                  ? { type: "closed" }
                  : {
                      type: "choose-solution",
                      serviceId: selectedService.id,
                    },
              )
            }
            onSave={saveService}
          />
        )}
      </div>
    </Section>
  );
}

function EmptyState({ onAdd }: { onAdd: () => void }) {
  return (
    <div className="spb__empty">
      <Text textType="H3" weight="500" >Get an estimate.</Text>
      <Text textType="Text" color="Lite">
Add a service, set the outcome, and build your package.
      </Text>
      <Button variant="Primary" rounded="Bubble" onClick={onAdd}>
        Add your first service
      </Button>
    </div>
  );
}
