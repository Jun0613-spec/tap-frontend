import { useFieldArray, useFormContext } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { FormDescription, FormField, FormItem } from "@/components/ui/form";

import MenuInput from "./MenuInput";

const Menu = () => {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "menuItems",
  });

  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-bold">Menu</h2>
      <FormDescription>Create your menu items</FormDescription>

      <FormField
        control={control}
        name="menuItems"
        render={() => (
          <FormItem className="flex flex-col gap-2">
            {fields.map((_, index) => (
              <MenuInput index={index} removeMenuItem={() => remove(index)} />
            ))}
          </FormItem>
        )}
      />
      <div className="flex items-center justify-end">
        <Button
          type="button"
          className="bg-green-500 text-neutral-100 hover:bg-green-600 dark:bg-green-800 dark:text-neutral-200 dark:hover:bg-green-900 w-full md:w-32"
          onClick={() => append({ name: "", price: "" })}
        >
          Add Menu Item
        </Button>
      </div>
    </div>
  );
};

export default Menu;
