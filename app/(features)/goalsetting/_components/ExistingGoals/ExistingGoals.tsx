"use client";
import { useState } from "react";
import { GoalDataTable } from "@/app/(features)/goalsetting";

export const ExistingGoals = async () => {
  const [goals, setGoals] = useState<
    { title: string; details: string; deadline: string; category: string }[]
  >([]);

  return (
    <main className="flex-1 pr-0 md:pr-8">
      <h1 className="text-xl font-semibold text-#090701">Existing Goals</h1>
      <GoalDataTable />
      <div className="bg-#f5f5f5 rounded-md p-4 mt-4 min-h-200px max-h-400px overflow-y-auto">
        {goals?.map((goal, index) => (
          <p key={index} className="text-#090701">
            {goal?.title}
          </p>
        ))}
      </div>
    </main>
  );
};
