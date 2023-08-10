"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { CustomDatePicker, CustomInputField } from "@/app/_components";
import { Button } from "@/components/ui/button";

const FormSchema = z.object({
  id: z.string(),
  goal: z.string(),
  deadline: z.string() || z.number(),
  progress: z.number().min(0).max(100),
  status: z.string(),
  frequency: z.string(),
  category: z.string(),
  description: z.string(),
  reminders: z.array(z.string()),
  notes: z.string(),
  startDate: z.string(),
  priority: z.string(),
});

export const HabitForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full ">
        <CustomInputField
          label="Goal"
          placeholder="Lose 10 pounds"
          name="goal"
          control={form.control}
        />

        {/* <CustomSelectField
          label="Categories"
          options={Object.values(EGoalCategory)}
          name="category"
          control={form.control}
        /> */}

        <CustomDatePicker
          label="Deadline"
          name="deadline"
          control={form.control}
        />

        <CustomInputField
          label="Progress"
          placeholder="50"
          name="progress"
          control={form.control}
          // type="number"
        />
        <CustomInputField
          label="Status"
          placeholder="Completed"
          name="status"
          control={form.control}
        />
        <CustomInputField
          label="Frequency"
          placeholder="Annual"
          name="Frequency"
          control={form.control}
        />
        <CustomInputField
          label="Description"
          placeholder="It is intermittent fasting, darling"
          name="description"
          control={form.control}
        />

        <CustomDatePicker
          label="Reminders"
          control={form.control}
          name="reminders"
        />
        <CustomInputField
          label="Notes"
          placeholder="I'm on track to meet my goal"
          name="notes"
          control={form.control}
        />

        <CustomDatePicker
          label="Start Date"
          name="startDate"
          control={form.control}
        />
        {/* <CustomSelectField
          label="Priority"
          options={Object.values(EGoalPriority)}
          name="priority"
          control={form.control}
        /> */}

        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
};
