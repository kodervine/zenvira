import { EGoalFrequency, IGoalItems } from "@/app/(features)/goalsetting";

export function calculateGoalProgress(goal: IGoalItems): number {
  const deadlineDate = new Date(goal.deadline);
  const currentDate = new Date();
  const timeDiff = Math.max(0, deadlineDate.getTime() - currentDate.getTime());
  const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));
  const progress =
    100 -
    (daysRemaining /
      (daysRemaining + getDaysRemainingFromGoalStatus(goal.frequency))) *
      100;
  return Math.round(progress);
}

function getDaysRemainingFromGoalStatus(frequency: EGoalFrequency): number {
  switch (frequency) {
    case EGoalFrequency.Urgent:
      return 7;
    case EGoalFrequency.Monthly:
      return 30;
    case EGoalFrequency.Weekly:
      return 90;
    case EGoalFrequency.Quarterly:
      return 90;
    case EGoalFrequency.Annual:
      return 365;
    default:
      return 0;
  }
}
