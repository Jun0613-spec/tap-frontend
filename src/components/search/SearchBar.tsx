import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SearchIcon } from "lucide-react";

import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const formSchema = z.object({
  searchQuery: z.string({
    required_error: "Restaurant name is required",
  }),
});

export type SearchForm = z.infer<typeof formSchema>;

interface Props {
  onSubmit: (formData: SearchForm) => void;
  placeHolder: string;
  onReset?: () => void;
  searchQuery?: string;
}

const SearchBar = ({ onSubmit, placeHolder, onReset, searchQuery }: Props) => {
  const form = useForm<SearchForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchQuery,
    },
  });

  const handleReset = () => {
    form.reset({
      searchQuery: "",
    });

    if (onReset) onReset();
  };

  useEffect(() => {
    form.reset({ searchQuery });
  }, [form, searchQuery]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`flex items-center gap-3 justify-between flex-row border-2 border-neutral-200 dark:border-neutral-600 rounded-xl p-3 ${
          form.formState.errors.searchQuery && "border-red-500"
        }`}
      >
        <SearchIcon
          strokeWidth={2.5}
          size={30}
          className="ml-1 text-green-500 dark:text-green-700 hidden md:block"
        />
        <FormField
          control={form.control}
          name="searchQuery"
          render={({ field }) => (
            <FormItem className="flex-1 ">
              <FormControl>
                <Input
                  {...field}
                  placeholder={placeHolder}
                  className="border-none shadow-none text-base md:text-xl focus-visible:ring-1  focus-visible:ring-green-500 dark:focus-visible:ring-green-700 dark:bg-neutral-800"
                />
              </FormControl>
            </FormItem>
          )}
        />
        {form.formState.isDirty && (
          <Button
            onClick={handleReset}
            type="button"
            size="sm"
            className="rounded-xl bg-red-500 text-neutral-100 dark:bg-red-700 dark:text-neutral-200 hover:bg-red-600 dark:hover:bg-red-900"
          >
            Reset
          </Button>
        )}
        <Button
          type="submit"
          size="sm"
          className="rounded-xl bg-green-500 text-neutral-100 hover:bg-green-600 dark:bg-green-800 dark:text-neutral-200 dark:hover:bg-green-900"
        >
          Search
        </Button>
      </form>
    </Form>
  );
};

export default SearchBar;
