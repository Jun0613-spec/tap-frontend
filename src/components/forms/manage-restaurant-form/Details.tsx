import { useFormContext } from "react-hook-form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const Details = () => {
  const { control } = useFormContext();
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-bold">Details</h2>
      <FormDescription>Enter the details about your restaurant</FormDescription>
      <FormField
        control={control}
        name="restaurantName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input {...field} className="bg-neutral-50 dark:bg-neutral-900" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="flex space-x-4">
        <FormField
          control={control}
          name="city"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="bg-neutral-50 dark:bg-neutral-900"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="country"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Country</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="bg-neutral-50 dark:bg-neutral-900"
                  defaultValue="United Kingdom"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <FormField
          control={control}
          name="deliveryPrice"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Delivery price (£)</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="bg-neutral-50 dark:bg-neutral-900"
                  placeholder="1.50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="estimatedDeliveryTime"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Estimated Delivery Time (mins)</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="bg-neutral-50 dark:bg-neutral-900"
                  placeholder="30"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default Details;
