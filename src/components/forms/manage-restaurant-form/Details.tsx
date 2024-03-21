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
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Details</h2>
      <FormDescription className="text-neutral-500 dark:text-neutral-400">
        Enter the details about your restaurant
      </FormDescription>

      <div className="space-y-4">
        <FormField
          control={control}
          name="restaurantName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
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
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={control}
            name="city"
            render={({ field }) => (
              <FormItem>
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
              <FormItem>
                <FormLabel>Country</FormLabel>
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
            name="postcode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Postcode</FormLabel>
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
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={control}
            name="deliveryPrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Delivery Price (£)</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className=" bg-neutral-50 dark:bg-neutral-900"
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
              <FormItem>
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
    </div>
  );
};

export default Details;
