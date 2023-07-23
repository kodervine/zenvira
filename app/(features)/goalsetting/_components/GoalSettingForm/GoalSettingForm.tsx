"use client";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EGoalCategory } from "../../_types";

export const GoalSettingForm = () => {
  const [goals, setGoals] = useState<
    { title: string; details: string; deadline: string; category: string }[]
  >([]);
  const [newGoal, setNewGoal] = useState({
    title: "",
    details: "",
    deadline: "",
    category: "",
  });
  const [isGoalSubmitted, setIsGoalSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewGoal((prevGoal) => ({
      ...prevGoal,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectInputChange = () => {
    console.log(newGoal);
  };

  const handleDetailsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewGoal((prevGoal) => ({
      ...prevGoal,
      details: e.target.value,
    }));
  };

  const handleGoalSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setGoals((prevGoals) => [...prevGoals, newGoal]);
    setIsGoalSubmitted(true);
    setNewGoal({ title: "", details: "", deadline: "", category: "" });
  };

  return (
    <>
      <h1 className="text-xl font-semibold text-textColor mb-4">
        Create a New Goal
      </h1>
      <div className="mb-4">
        <label htmlFor="title" className="block">
          Goal Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={newGoal.title}
          onChange={handleInputChange}
          placeholder="Enter goal title"
          className="px-4 py-2 rounded-md bg-gray-100"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="details" className="block">
          Details
        </label>
        <textarea
          id="details"
          name="details"
          value={newGoal.details}
          onChange={handleDetailsChange}
          placeholder="Enter goal details"
          className="px-4 py-2 rounded-md bg-gray-100 h-36"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="deadline" className="block">
            Deadline
          </label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={newGoal.deadline}
            onChange={handleInputChange}
            className="px-4 py-2 rounded-md bg-gray-100"
          />
        </div>{" "}
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Goal Categories</SelectLabel>
              <SelectItem value={EGoalCategory.Personal}>
                {EGoalCategory.Personal}
              </SelectItem>
              <SelectItem value={EGoalCategory.Career}>
                {EGoalCategory.Career}
              </SelectItem>
              <SelectItem value={EGoalCategory.Education}>
                {EGoalCategory.Education}
              </SelectItem>
              <SelectItem value={EGoalCategory.Health}>
                {EGoalCategory.Health}
              </SelectItem>
              <SelectItem value={EGoalCategory.Lifestyle}>
                {EGoalCategory.Lifestyle}
              </SelectItem>
              <SelectItem value={EGoalCategory.Other}>
                {EGoalCategory.Other}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <button
        className="bg-#262d4f hover:bg-#34264f text-white py-3 px-6 rounded-lg mt-6 w-full"
        onClick={handleGoalSubmit}
      >
        Create Goal
      </button>
    </>
  );
};
