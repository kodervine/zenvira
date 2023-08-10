import { EHabitCategory, EHabitFrequency } from "../_types";
import { HabitCard } from "@/app/(features)/habittracker";

export const HabitList = () => {
  const habits = [
    {
      id: "2",
      title: "name",
      description: "string",
      frequency: EHabitFrequency.Daily,
      category: EHabitCategory.Career,
      startDate: "today",
      streak: 3,
      isCompleted: false,
    },
  ];
  return (
    <main className="grid">
      {habits.map((habit) => (
        <HabitCard key={habit.id} habit={habit} />
      ))}
    </main>
  );
};
