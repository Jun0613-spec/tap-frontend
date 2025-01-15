import hero from "@/assets/hero.jpg";

const Hero = () => {
  return (
    <div className="relative h-[480px] w-full overflow-hidden">
      <img
        src={hero}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30"></div>
      <div className="absolute bottom-8 left-8 text-white z-10">
        <h2 className="text-4xl md:text-5xl font-bold">Welcome to Tap</h2>
        <p className="text-lg md:text-xl">Order your favorite food in a tap!</p>
      </div>
    </div>
  );
};

export default Hero;
