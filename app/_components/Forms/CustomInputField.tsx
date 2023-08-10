"use client";
import {
  FormControl,
  FormLabel,
  FormMessage,
  FormItem,
  FormField,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface CustomInputProps {
  label: string;
  placeholder: string;
  type?: any;
  className?: string;
  // todo -  should not be any
  name: string;
  control: any;
}

export function CustomInputField({
  label,
  placeholder,
  name,
  control,
  className = "w-full",
  type = "text",
}: CustomInputProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              type={type}
              className={className}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
