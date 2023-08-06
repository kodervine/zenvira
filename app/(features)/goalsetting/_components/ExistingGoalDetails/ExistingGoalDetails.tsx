import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GoalSettingForm, IGoalItems } from "@/app/(features)/goalsetting";

interface GoalDetailsProps {
  goal: IGoalItems;
}

export function ExistingGoalDetails({ goal }: GoalDetailsProps) {
  if (!goal) {
    return null;
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{goal.goal}</SheetTitle>
          <SheetDescription>{goal.description}</SheetDescription>
        </SheetHeader>

        <GoalSettingForm />

        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" className="w-full">
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
