import { useFormContext } from "react-hook-form";

import { cn } from "@/lib/utils";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { CustomInputProps } from "@/types/components";

const CustomInput = ({
  name,
  label,
  placeholder,
  type = "text",
  inputStyle,
  containerStyle,
  disabled = false,
}: CustomInputProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={cn(containerStyle)}>
      <FormItem>
        <div>
          {label && (
            <FormLabel
              htmlFor={name}
              className={`block text-sm font-medium text-grayscale-900 mb-2 ${
                errors[name] ? "!text-red-500" : ""
              }`}
            >
              {label}
            </FormLabel>
          )}

          <FormField
            control={control}
            name={name}
            render={({ field }) => (
              <FormControl>
                <Input
                  {...field}
                  size={11}
                  onChange={(e) => field.onChange(e.target.value)}
                  type={type}
                  placeholder={placeholder}
                  className={cn(
                    inputStyle,
                    errors[name] && "ring-1 !ring-red-500"
                  )}
                  disabled={disabled}
                />
              </FormControl>
            )}
          />
          {errors[name] && (
            <FormMessage className="text-red-500 mt-1">
              {errors[name]?.message as string}
            </FormMessage>
          )}
        </div>
      </FormItem>
    </div>
  );
};

export default CustomInput;
