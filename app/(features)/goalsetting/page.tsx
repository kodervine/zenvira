"use client";
import { ExistingGoalDataTable } from "@/app/(features)/goalsetting";

const GoalSettingPage = () => {
  return (
    <main className="p-4 w-full">
      <h2>Goal Management</h2>
      <div className=" mx-auto p-8 rounded-md shadow-md min-h-screen">
        <ExistingGoalDataTable />
      </div>
    </main>
  );
};

export default GoalSettingPage;
