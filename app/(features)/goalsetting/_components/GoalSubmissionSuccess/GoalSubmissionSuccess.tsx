"use client";
import { useState } from "react";

export const GoalSubmissionSuccess = () => {
  const [newGoal, setNewGoal] = useState({
    title: "",
    details: "",
    deadline: "",
    category: "",
  });

  return (
    <div>
      <div className="mb-4">
        <div className="bg-green-500 text-white rounded-md flex items-center p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M0 10a10 10 0 1120 0A10 10 0 010 10zm10 9.5A9.5 9.5 0 0019.5 10a9.5 9.5 0 00-9.5-9.5A9.5 9.5 0 0010 0a9.5 9.5 0 00-9.5 9.5A9.5 9.5 0 0010 19.5zM8 14a2 2 0 11-4 0 2 2 0 014 0zm7-9a1 1 0 110-2 1 1 0 010 2z"
              clipRule="evenodd"
            />
          </svg>
          Goal successfully submitted!
        </div>
      </div>
      <h1 className="text-xl font-semibold text-#090701 mb-2">Goal Title:</h1>
      <p className="text-lg text-gray-500 mb-4">{newGoal.title}</p>
      <h1 className="text-xl font-semibold text-#090701 mb-2">Deadline:</h1>
      <p className="text-lg text-gray-500 mb-4">{newGoal.deadline}</p>
      <div className="w-full">
        <div className="bg-primary h-2 rounded-md">
          <div
            className="bg-green-500 h-2 rounded-md"
            style={{ width: "100%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};
