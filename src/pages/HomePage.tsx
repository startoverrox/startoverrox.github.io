import GithubIcon from "@/assets/icons/GithubIcon.svg?react";
import LinkedinIcon from "@/assets/icons/LinkedinIcon.svg?react";
import XIcon from "@/assets/icons/XIcon.svg?react";

const HomePage = () => {
  console.log("HomePage");

  return (
    <div className="px-[177px] py-[41px]">
      <div className="flex items-center justify-between">
        <div>logo</div>
        <div className="flex gap-[51px]">
          <div className="flex w-[609px] justify-between">
            <div>Home</div>
            <div>About</div>
            <div>Tech Stack</div>
            <div>Projects</div>
            <div>Contact</div>
          </div>
          <div className="flex gap-[20px]">
            <GithubIcon className="h-[30px] w-[30px]" />
            <LinkedinIcon className="h-[30px] w-[30px]" />
            <XIcon className="h-[30px] w-[30px]" />
          </div>
        </div>
      </div>
      <div className="mt-[220px]">
        <div className="flex justify-between">
          <div className="text-[58px] leading-[70px] font-bold">
            <div>Hi 👋,</div>
            <div>My name is</div>
            <div>Yeabin</div>
            <div>I build things for web</div>
          </div>
          <div>interactive 3D model</div>
        </div>
      </div>
      <div className="mt-[348px] flex flex-col gap-[49px]">
        <div className="text-center text-[48px] leading-[26px] font-bold">
          My Tech Stack
        </div>
        <div className="text-center text-[32px] leading-[26px]">
          Technologies I’ve been working with recently
        </div>
      </div>
    </div>
  );
};

export default HomePage;
