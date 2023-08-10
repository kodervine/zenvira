import { CustomCheckBoxInput } from "@/app/_components";
import { IHabit } from "../_types";
export const HabitCard: React.FC<{ habit: IHabit }> = ({ habit }) => {
  return (
    <section>
      <h2>{habit.title}</h2>
      <p>Category: {habit.category}</p>
      <p>Streak: {habit.streak}</p>
      <CustomCheckBoxInput />
    </section>
  );
};
