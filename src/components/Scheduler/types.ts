import {
  Config,
  SchedulerData,
  SchedulerItemClickData,
  SchedulerProjectData
} from "@/types/global";
import { ParsedDatesRange } from "@/utils/getDatesRange";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface SchedulerProps extends SchedulerButtonProps {
  data: SchedulerData;
  isLoading?: boolean;
  config?: Config;
  startDate?: string;
  onRangeChange?: (range: ParsedDatesRange) => void;
  onTileClick?: (data: SchedulerProjectData) => void;
  onFilterData?: () => void;
  onClearFilterData?: () => void;
  onItemClick?: (data: SchedulerItemClickData) => void;
}

interface ButtonsToReplaceDefaults {
  navBtnWrapper: React.FC<{ children: ReactNode }>;
  navBtn: React.FC<{ children: ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>>;
  todayBtn: React.FC<{ children: ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>>;
  zoomBtnWrapper: React.FC<{ children: ReactNode }>;
  zoomInBtn: React.FC<ButtonHTMLAttributes<HTMLButtonElement>>;
  zoomOutBtn: React.FC<ButtonHTMLAttributes<HTMLButtonElement>>;
}

export type SchedulerButtonProps = {
  renderDefaultButtons?: { navigationButtons: boolean; zoomButtons: boolean };
  buttonsToReplaceDefaults?: ButtonsToReplaceDefaults
  additionalToolbarItems?: React.ReactNode[];
};
export type StyledOutsideWrapperProps = {
  showScroll: boolean;
};
