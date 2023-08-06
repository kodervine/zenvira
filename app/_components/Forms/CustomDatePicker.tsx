"use client";
import { CalendarIcon } from "@radix-ui/react-icons";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface CustomDatePickerProps {
  label: string;
  name: string;
  control: any;
}

export function CustomDatePicker({
  label,
  name,
  control,
}: CustomDatePickerProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>{label}</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    " pl-3 text-left font-normal",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value ? (
                    format(new Date(field.value), "PPP") // Convert the value to Date object
                  ) : (
                    <span>Pick a date</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value ? new Date(field.value) : undefined} // Convert the value to Date object or set it to undefined if empty
                onSelect={(date) => {
                  if (date instanceof Date) {
                    field.onChange(date.toISOString()); // Convert the selected date to ISO string
                  }
                }}
                disabled={(date) =>
                  date > new Date() || date < new Date("1900-01-01")
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />

    // <FormItem className="flex flex-col">
    //   <FormLabel>{label}</FormLabel>
    //   <Popover>
    //     <PopoverTrigger asChild>
    //       <FormControl>
    //         <Button
    //           variant={"outline"}
    //           className={cn(
    //             " pl-3 text-left font-normal",
    //             !field.value && "text-muted-foreground"
    //           )}
    //         >
    //           {field.value ? (
    //             format(new Date(field.value), "PPP") // Convert the value to Date object
    //           ) : (
    //             <span>Pick a date</span>
    //           )}
    //           <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
    //         </Button>
    //       </FormControl>
    //     </PopoverTrigger>
    //     <PopoverContent className="w-auto p-0" align="start">
    //       <Calendar
    //         mode="single"
    //         selected={field.value ? new Date(field.value) : undefined} // Convert the value to Date object or set it to undefined if empty
    //         onSelect={(date) => {
    //           if (date instanceof Date) {
    //             field.onChange(date.toISOString()); // Convert the selected date to ISO string
    //           }
    //         }}
    //         disabled={(date) =>
    //           date > new Date() || date < new Date("1900-01-01")
    //         }
    //         initialFocus
    //       />
    //     </PopoverContent>
    //   </Popover>
    //   <FormMessage />
    // </FormItem>
  );
}
