"use client";
import { GenerateSelectForm } from "@/app/(features)";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Select } from "@/components/ui/select";

interface CustomSelectProps {
  label: string;
  options: string[]; // Assuming options are represented as an array of strings
  name: string;
  control: any;
}

export function CustomSelectField({
  label,
  options,
  name,
  control,
}: CustomSelectProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>{GenerateSelectForm(options, field)}</FormControl>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
