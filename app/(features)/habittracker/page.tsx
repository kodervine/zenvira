import { HabitList, HabitForm } from "@/app/(features)/habittracker";

const HabitTrackerPage = () => {
  return (
    <main className="p-4 w-full">
      <h2>Track your habits</h2>
      <div className=" mx-auto p-8 rounded-md shadow-md min-h-screen">
        <HabitList />
        <HabitForm />
      </div>
    </main>
  );
};

export default HabitTrackerPage;
