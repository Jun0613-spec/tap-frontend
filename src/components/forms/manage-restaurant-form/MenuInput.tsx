import { useFormContext } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface Props {
  index: number;
  removeMenuItem: () => void;
}

const MenuInput = ({ index, removeMenuItem }: Props) => {
  const { control } = useFormContext();

  return (
    <div className="flex flex-row items-end gap-2">
      <FormField
        control={control}
        name={`menuItems.${index}.name`}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-1">
              Name <FormMessage />
            </FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Burger"
                className="bg-neutral-50 dark:bg-neutral-900"
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`menuItems.${index}.price`}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-1">
              Price (£) <FormMessage />
            </FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="4.00"
                className="bg-neutral-50 dark:bg-neutral-900"
              />
            </FormControl>
          </FormItem>
        )}
      />
      <Button
        type="button"
        onClick={removeMenuItem}
        className="bg-red-500 text-neutral-50 hover:bg-red-600
        dark:bg-red-700 dark:hover:bg-red-800 max-h-fit"
      >
        Remove
      </Button>
    </div>
  );
};

export default MenuInput;
