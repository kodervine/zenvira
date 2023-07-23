"use client";
import { useState } from "react";
import {
  ExistingGoalDataTable,
  GoalSettingForm,
} from "@/app/(features)/goalsetting";

const GoalSettingTool = () => {
  const [isGoalSubmitted, setIsGoalSubmitted] = useState(false);
  return (
    <div className="p-4">
      <a href="/" className="mb-4 block">
        Back to home
      </a>
      <div className=" mx-auto p-8 rounded-md shadow-md min-h-screen">
        {/* Title and other elements */}
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 md:pr-0 md:pr-8">
            <ExistingGoalDataTable />
          </div>
          {/* Should show more details about each goal by the side when a row from the table above is clicked */}
          <div className="flex-2 md:pl-0 md:pl-8">
            {!isGoalSubmitted ? <GoalSettingForm /> : "successful"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalSettingTool;
