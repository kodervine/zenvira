import {
  EGoalCategory,
  EGoalFrequency,
  EGoalPriority,
  EGoalStatus,
  IGoalItems,
} from "../../_types";

export const goalSettingData: IGoalItems[] = [
  {
    id: "m5gr84i9",
    goal: "Lose 10 pounds",
    deadline: "2023-08-01",
    progress: 50,
    status: EGoalStatus.Completed,
    frequency: EGoalFrequency.Annual,
    category: EGoalCategory.Health,
    description: "It is intermidate fasting darling",
    reminders: ["2023-07-15", "2023-07-30"],
    notes: "I'm on track to meet my goal!",
    startDate: "Today",
    priority: EGoalPriority.High,
  },
  {
    id: "3",
    goal: "Learn New Programming Language",
    deadline: "2023-09-30",
    progress: 0,
    status: EGoalStatus.Completed,
    frequency: EGoalFrequency.Daily,
    category: EGoalCategory.Career,
    description: "Must learn this c# by force",
    reminders: [],
    notes: "",
    startDate: "Today",
    priority: EGoalPriority.High,
  },
];
