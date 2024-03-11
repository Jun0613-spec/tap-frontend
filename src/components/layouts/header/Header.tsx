import { Link } from "react-router-dom";

import MobilaNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className=" bg-neutral-50 dark:bg-neutral-900 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-green-500 dark:text-green-800"
        >
          Tap
        </Link>

        <div className="md:hidden">
          <MobilaNav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
