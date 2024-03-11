const Home = () => {
  return (
    <div className="flex flex-col gap-12 bg-neutral-50 dark:bg-neutral-900">
      <div className="md:px-32 bg-white dark:bg-neutral-800 rounded-xl shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-green-500 dark:text-green-700">
          Tap into takeaway delights today
        </h1>
        <span className="text-xl ">
          Order your favorite food with just a tap!
        </span>
        {/* SearchBar */}
      </div>
    </div>
  );
};

export default Home;
