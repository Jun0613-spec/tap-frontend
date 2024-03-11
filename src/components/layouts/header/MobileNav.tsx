import { CircleUserIcon, Menu } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";
import { Separator } from "../../ui/separator";
import { Button } from "../../ui/button";

import ThemeButton from "./ThemeButton";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-black dark:text-neutral-100" />
      </SheetTrigger>
      <SheetContent className="bg-neutral-50 dark:bg-neutral-900 space-y-3">
        <SheetTitle>
          {isAuthenticated ? (
            <div className="flex items-center font-bold gap-2">
              <CircleUserIcon className="w-5 h-5" />
              <p className="text-sm">{user?.email}</p> <ThemeButton />
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <span>Welcome to Tap</span>
              <ThemeButton />
            </div>
          )}
        </SheetTitle>
        <Separator className="bg-neutral-400 dark:bg-neutral-500" />
        <SheetDescription className="flex flex-col gap-4">
          {isAuthenticated ? (
            <MobileNavLinks />
          ) : (
            <Button
              className="flex-1 font-bold bg-green-500 dark:bg-green-800 text-white hover:bg-green-600 dark:hover:bg-green-900"
              onClick={() => loginWithRedirect()}
            >
              Login
            </Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
