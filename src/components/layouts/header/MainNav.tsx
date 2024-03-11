import { useAuth0 } from "@auth0/auth0-react";

import { Button } from "@/components/ui/button";

import ThemeButton from "./ThemeButton";
import UsernameMenu from "./UsernameMenu";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div className="flex space-x-2 items-center">
      {isAuthenticated ? (
        <div className="flex items-center justify-between gap-2">
          <ThemeButton />
          <UsernameMenu />
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <ThemeButton />
          <Button
            size="sm"
            className="font-bold rounded-lg bg-green-500 text-neutral-100 hover:bg-green-600 dark:bg-green-800 dark:text-neutral-200 dark:hover:bg-green-900"
            onClick={async () => await loginWithRedirect()}
          >
            Login
          </Button>
        </div>
      )}
    </div>
  );
};

export default MainNav;
