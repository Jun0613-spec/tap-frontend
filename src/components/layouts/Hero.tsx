import hero from "@/assets/hero.jpg";

const Hero = () => {
  return (
    <div className="w-full max-h-[600px]">
      <img src={hero} className="object-cover" />
    </div>
  );
};

export default Hero;
