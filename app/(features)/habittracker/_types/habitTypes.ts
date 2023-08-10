export interface IHabit {
  id: string;
  title: string;
  description: string;
  frequency: EHabitFrequency;
  category: EHabitCategory;
  startDate: string;
  streak: number;
  isCompleted: boolean;
}


export enum EHabitFrequency {
  Daily = "Daily",
  Weekly = "Weekly",
  Monthly = "Monthly",
}

export enum EHabitCategory {
  Personal = "Personal",
  Health = "Health",
  Career = "Career",
  Lifestyle = "Lifestyle",
  Education = "Education",
  Other = "Other",
}