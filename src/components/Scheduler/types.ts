import {
  Config,
  SchedulerData,
  SchedulerItemClickData,
  SchedulerProjectData
} from "@/types/global";
import { ParsedDatesRange } from "@/utils/getDatesRange";

export interface SchedulerProps extends SchedulerButtonProps  {
  data: SchedulerData;
  isLoading?: boolean;
  config?: Config;
  startDate?: string;
  onRangeChange?: (range: ParsedDatesRange) => void;
  onTileClick?: (data: SchedulerProjectData) => void;
  onFilterData?: () => void;
  onClearFilterData?: () => void;
  onItemClick?: (data: SchedulerItemClickData) => void;
};

export type SchedulerButtonProps = {
  renderDefaultButtons?: { navigationButtons: boolean; zoomButtons: boolean };
  buttonsToRender?: React.ReactNode[];
}
export type StyledOutsideWrapperProps = {
  showScroll: boolean;
};
