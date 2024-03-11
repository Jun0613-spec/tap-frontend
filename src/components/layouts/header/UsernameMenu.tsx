import { useAuth0 } from "@auth0/auth0-react";
import { CircleUserIcon } from "lucide-react";
import { Link } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const UsernameMenu = () => {
  const { user, logout } = useAuth0();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:opacity-60 gap-2">
        <CircleUserIcon className="w-5 h-5" />
        <p className="text-sm">{user?.email}</p>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link to="/order-status" className="font-bold hover:opacity-60">
            Order Status
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/manage-restaurant" className="font-bold hover:opacity-60 ">
            Manage Restaurants
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/user-profile" className="font-bold hover:opacity-60">
            My Profile
          </Link>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem>
          <Button
            size="sm"
            onClick={() => logout()}
            className="flex flex-1 font-bold bg-green-500 dark:bg-green-800 text-white hover:bg-green-600 dark:hover:bg-green-900"
          >
            Logout
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UsernameMenu;
