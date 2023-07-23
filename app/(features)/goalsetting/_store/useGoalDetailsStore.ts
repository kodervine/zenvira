import { create } from "zustand";

interface GoalDetailsStore {
  isOpen: boolean;
  selectedGoalId: string;
  openGoalDetails: (goalId: string) => void;
  closeGoalDetails: () => void;
}

export const useGoalDetailsStore = create<GoalDetailsStore>((set) => ({
  isOpen: false,
  selectedGoalId: "",
  openGoalDetails: (goalId) =>
    set(() => ({ isOpen: true, selectedGoalId: goalId })),
  closeGoalDetails: () => set(() => ({ isOpen: false, selectedGoalId: "" })),
}));

export const useSheetStore = create((set) => ({
  isOpen: false,
  openSheet: () => set({ isOpen: true }),
  closeSheet: () => set({ isOpen: false }),
}));
