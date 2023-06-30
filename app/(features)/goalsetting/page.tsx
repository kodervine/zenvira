import { useState } from "react";

import {
  ExistingGoals,
  GoalSettingForm,
  GoalSubmissionSuccess,
} from "@/app/(features)/goalsetting";

const GoalSettingTool = () => {
  const [isGoalSubmitted, setIsGoalSubmitted] = useState(false);
  return (
    <div className="bg-bgColor p-4">
      <a href="/" className="mb-4 block">
        Back to home
      </a>
      <div className="bg-gray-100 mx-auto p-8 rounded-md shadow-md min-h-screen">
        {/* Title and other elements */}
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 md:pr-0 md:pr-8">
            <ExistingGoals />
          </div>
          <div className="flex-1 md:pl-0 md:pl-8">
            {!isGoalSubmitted ? <GoalSettingForm /> : <GoalSubmissionSuccess />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalSettingTool;