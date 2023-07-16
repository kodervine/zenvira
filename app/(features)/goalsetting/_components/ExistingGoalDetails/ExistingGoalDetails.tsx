import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { IGoalItems } from "@/app/(features)/goalsetting";

interface GoalDetailsProps {
  goal: IGoalItems;
  onClose: () => void;
}

export function ExistingGoalDetails({ goal, onClose }: GoalDetailsProps) {
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
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="deadline" className="text-right">
              Deadline
            </Label>
            <Input
              id="deadline"
              value={goal.deadline}
              className="col-span-3"
              disabled
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="progress" className="text-right">
              Progress
            </Label>
            <Input
              id="progress"
              value={`${goal.progress}%`}
              className="col-span-3"
              disabled
            />
          </div>
          {/* Add more goal details here */}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
