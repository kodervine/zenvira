export interface IGoalItems {
  id: string;
  goal: string;
  deadline: string;
  progress: number;
  status: EGoalStatus;
  frequency: EGoalFrequency;
  category: EGoalCategory;
  description: string;
  reminders: string[];
  notes: string;
  startDate: string;
  priority: EGoalPriority;
  milestones?: TMilestone[];
}
export type TMilestone = {
  id: string;
  title: string;
  deadline: string;
  isCompleted: boolean;
};

export enum EGoalPriority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
}
export enum EGoalFrequency {
  Urgent = "Urgent",
  Daily = "Daily",
  Weekly = "Weekly",
  Monthly = "Monthly",
  Quarterly = "Quarterly",
  Annual = "Annual",
}

export enum EGoalStatus {
  NotStarted = "Not started",
  Started = "Started",
  Paused = "Paused",
  Pending = "Pending",
  Completed = "Completed",
}

export enum EGoalCategory {
  Personal = "Personal",
  Health = "Health",
  Career = "Career",
  Lifestyle = "Lifestyle",
  Education = "Education",
  Other = "Other",
}
