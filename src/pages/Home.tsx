import { useNavigate } from "react-router-dom";

import SearchBar, { SearchForm } from "@/components/search/SearchBar";

const Home = () => {
  const navigate = useNavigate();

  const onSearchSubmitHandler = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`
    });
  };

  return (
    <div className="flex flex-col gap-12 bg-neutral-50 dark:bg-neutral-900">
      <div className="md:px-32 bg-white dark:bg-neutral-800 rounded-md shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-green-500 dark:text-green-700">
          Tap into takeaway delights today
        </h1>
        <span className="text-xl ">
          Order your favorite food with just a tap!
        </span>
        <SearchBar
          placeHolder="City or Town "
          onSubmit={onSearchSubmitHandler}
        />
      </div>
    </div>
  );
};

export default Home;
