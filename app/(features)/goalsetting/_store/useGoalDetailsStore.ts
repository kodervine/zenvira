import create, { SetState } from "zustand";

interface GoalDetailsStore {
  isOpen: boolean;
  selectedGoalId: string;
  openGoalDetails: (goalId: string) => void;
  closeGoalDetails: () => void;
}

export const useGoalDetailsStore = create<GoalDetailsStore>(
  (set: SetState<GoalDetailsStore>) => ({
    isOpen: false,
    selectedGoalId: "",
    openGoalDetails: (goalId) =>
      set(() => ({ isOpen: true, selectedGoalId: goalId })),
    closeGoalDetails: () => set(() => ({ isOpen: false, selectedGoalId: "" })),
  })
);
