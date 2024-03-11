import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@/components/ui/button";

const MobileNavLinks = () => {
  const { logout } = useAuth0();

  return (
    <>
      <Link
        to="/order-status"
        className="flex items-center font-bold hover:opacity-60"
      >
        Order Status
      </Link>
      <Link
        to="/manage-restaurant"
        className="flex  items-center font-bold hover:opacity-60"
      >
        Manage Restaurants
      </Link>
      <Link
        to="/user-profile"
        className="flex items-center font-bold hover:opacity-60"
      >
        My Profile
      </Link>
      <Button
        onClick={() => logout()}
        className="flex items-center px-3 font-bold bg-green-500 dark:bg-green-800 text-white hover:bg-green-600 dark:hover:bg-green-900"
      >
        Logout
      </Button>
    </>
  );
};

export default MobileNavLinks;
