import { Button } from "./ui/button";

import { Loader2 } from "lucide-react";

const LoadingButton = () => {
  return (
    <Button
      disabled
      className="bg-green-500 text-neutral-100  dark:bg-green-800 dark:text-neutral-200"
    >
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Submitting
    </Button>
  );
};

export default LoadingButton;
