import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "~/_components/ui/form";
import { Input, InputProps } from "~/_components/ui/input";
import { Textarea, TextareaProps } from "~/_components/ui/textarea";
import { cn } from "~/lib/utils";

type CustomFormItemProps = {
  label: string;
  field: any; // Replace with the specific type from react-hook-form if possible
  isEditing: boolean;
  placeholder: string;
  InputComponent?: React.ElementType;
  inputProps?: InputProps | TextareaProps;
  labelClassName?: string;
  inputClassName?: string;
};

const CustomFormItem: React.FC<CustomFormItemProps> = ({
  label,
  field,
  isEditing,
  placeholder,
  InputComponent = Input,
  inputProps = {},
  labelClassName = "",
  inputClassName = "",
}) => {
  return (
    <FormItem>
      <FormLabel
        className={cn("text-xs font-semibold text-zinc-700", labelClassName)}
      >
        {label}
      </FormLabel>
      <FormControl>
        <InputComponent
          {...field}
          {...inputProps}
          disabled={!isEditing}
          placeholder={placeholder}
          className={cn(
            "border-zinc-200 text-sm text-zinc-700",
            "focus:border-primary focus:ring-2 focus:ring-primary",
            "tracking-wide transition-all duration-200",
            inputClassName,
          )}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};

export default CustomFormItem;
