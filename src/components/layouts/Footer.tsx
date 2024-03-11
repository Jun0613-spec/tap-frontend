import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-green-500 dark:bg-green-800 py-10">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
          Tap
        </span>
        <div className="flex justify-between items-center text-white dark:text-neutral-100 font-bold text-xs md:text-sm tracking-tight gap-4">
          <a href="https://github.com/Jun0613-spec" target="_blank">
            <Github className="hover:opacity-60" />
          </a>
          <a
            href="https://www.linkedin.com/in/jun-young-park-220bb4229/"
            target="_blank"
          >
            <Linkedin className="hover:opacity-60" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
