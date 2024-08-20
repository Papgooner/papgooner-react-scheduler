import { SchedulerData, SchedulerItemClickData, SchedulerProjectData } from "@/types/global";
import { SchedulerButtonProps } from "../Scheduler/types";

export interface CalendarProps extends SchedulerButtonProps {
  data: SchedulerData;
  topBarWidth: number;
  onTileClick?: (data: SchedulerProjectData) => void;
  onItemClick?: (data: SchedulerItemClickData) => void;
}

export type StyledSpanProps = {
  position: "left" | "right";
};

export type ProjectsData = [projectsPerPerson: SchedulerProjectData[][][], rowsPerPerson: number[]];
