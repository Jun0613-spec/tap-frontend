import hero from "@/assets/hero.jpg";

const Hero = () => {
  return (
    <div className=" max-h-[480px]  ">
      <img src={hero} alt="hero" className="object-cover" />
    </div>
  );
};

export default Hero;
