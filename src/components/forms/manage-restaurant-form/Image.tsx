import { useFormContext } from "react-hook-form";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const Image = () => {
  const { control, watch } = useFormContext();

  const existImageUrl = watch("imageUrl");

  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-bold">Image</h2>
      <FormDescription>
        Add an image that will be displayed on your restaurant listing in the
        search results. Adding a new image will overwrite the existing one.
      </FormDescription>

      <div className="flex flex-col gap-8 md:w-[50%]">
        {existImageUrl && (
          <AspectRatio ratio={16 / 9}>
            <img
              src={existImageUrl}
              className="rounded-md object-cover h-full w-full"
            />
          </AspectRatio>
        )}
        <FormField
          control={control}
          name="imageFile"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="cursor-pointer w-fit
                  file:text-sm file:font-semibold
                file:text-neutral-800 file:cursor-pointer
                  hover:opacity-70 dark:file:text-neutral-100          
                  "
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  onChange={(event) =>
                    field.onChange(
                      event.target.files ? event.target.files[0] : null
                    )
                  }
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

export default Image;
