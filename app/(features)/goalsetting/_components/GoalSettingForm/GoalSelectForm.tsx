import { ReactNode } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FormControl } from "@/components/ui/form";
interface SelectField {
  onChange: (value: string | number) => void;
  value: string | number;
}

interface SelectProps {
  onValueChange: (value: string | number) => void;
  defaultValue: string | number;
  children: ReactNode;
}

export const GenerateSelectForm = (options: string[], field: SelectField) => {
  return (
    <Select onValueChange={field.onChange} defaultValue={field.value as string}>
      <FormControl>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        <SelectGroup>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
