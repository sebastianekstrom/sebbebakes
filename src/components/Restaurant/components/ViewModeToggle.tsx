import { MapPinIcon, ViewColumnsIcon } from "@heroicons/react/24/outline";
import { Text } from "components/Text/Text";

export type ViewMode = "map" | "grid";

interface ViewModeToggleProps {
  activeMode: ViewMode;
  onChange: (mode: ViewMode) => void;
}

export const ViewModeToggle: React.FC<ViewModeToggleProps> = ({
  activeMode,
  onChange,
}) => {
  return (
    <div className="flex border border-brand rounded-md overflow-hidden">
      <button
        type="button"
        onClick={() => onChange("map")}
        className={`px-3 py-1 text-sm ${
          activeMode === "map" ? "bg-brand" : "bg-brand-secondary"
        }`}
      >
        <div className="flex items-center gap-[2px]">
          <MapPinIcon
            className={`h-4 w-4 ${
              activeMode === "map" ? "text-white" : "text-black"
            }`}
            aria-hidden="true"
          />
          <Text
            variant="badge"
            classNames={`${activeMode === "map" ? "text-white" : "text-black"}`}
          >
            Map
          </Text>
        </div>
      </button>
      <button
        type="button"
        onClick={() => onChange("grid")}
        className={`px-3 py-1 text-sm ${
          activeMode === "grid" ? "bg-brand" : "bg-brand-secondary"
        }`}
      >
        <div className="flex items-center gap-[2px]">
          <ViewColumnsIcon
            className={`h-4 w-4 ${
              activeMode === "grid" ? "text-white" : "text-black"
            }`}
            aria-hidden="true"
          />
          <Text
            variant="badge"
            classNames={`${
              activeMode === "grid" ? "text-white" : "text-black"
            }`}
          >
            Grid
          </Text>
        </div>
      </button>
    </div>
  );
};
