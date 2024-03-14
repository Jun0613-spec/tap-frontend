import { useFormContext } from "react-hook-form";

import {
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import CuisineCheckbox from "./CuisineCheckbox";

import { cuisineList } from "@/config/restaurant-options";

const Cuisines = () => {
  const { control } = useFormContext();

  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-bold">Cuisines</h2>
      <FormDescription>
        Select the cuisines that your restaurant serves
      </FormDescription>
      <FormField
        control={control}
        name="cuisines"
        render={({ field }) => (
          <FormItem>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-1.5">
              {cuisineList.map((cuisineItem) => (
                <CuisineCheckbox cuisine={cuisineItem} field={field} />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default Cuisines;
