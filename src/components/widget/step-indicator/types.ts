export enum STEP_STATUS {
  CURRENT = "current",
  FINISHED = "finished",
  UNFINISHED = "unfinished",
  NEUTRAL = "neutral",
}

export interface StepIndicatorItemType {
  key: string;
  label: string;
  icon?: (color: string) => React.ReactNode;
  status: STEP_STATUS;
  disabled?: boolean;
}

export interface StepIndicatorProps {
  items: StepIndicatorItemType[];
  onChange?: (value: number) => void;
  currentActive: number;
}
