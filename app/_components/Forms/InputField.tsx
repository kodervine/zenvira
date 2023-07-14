import { UseFormRegisterReturn } from "react-hook-form";

import {
  FieldWrapper,
  FieldWrapperPassThroughProps,
} from "@/app/_components/Forms";
import clsx from "clsx";

type TInputFieldProps = FieldWrapperPassThroughProps & {
  type?: "text" | "email" | "password";
  className?: string;
  placeholder?: string;
  registration: Partial<UseFormRegisterReturn>;
};

export const InputField = (props: TInputFieldProps) => {
  const {
    type = "text",
    label,
    className,
    registration,
    error,
    placeholder,
  } = props;

  return (
    <FieldWrapper label={label} error={error}>
      <input
        type={type}
        className={clsx(
          "appearance-none rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",
          className
        )}
        placeholder={placeholder}
        {...registration}
      />
    </FieldWrapper>
  );
};
