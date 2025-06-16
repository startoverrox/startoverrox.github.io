import GithubIcon from '/Public/icons/GithubIcon.svg?react';
import LinkedinIcon from '/Public/icons/LinkedinIcon.svg?react';
import XIcon from '/Public/icons/XIcon.svg?react';

const HomePage = () => {
  return (
    <div className="px-[177px] py-[41px]">
      <div className="flex justify-between items-center">
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
            <GithubIcon className="w-[30px] h-[30px]" />
            <LinkedinIcon className="w-[30px] h-[30px]" />
            <XIcon className="w-[30px] h-[30px]" />
          </div>
        </div>
      </div>
      <div className="mt-[220px]">
        <div className="flex justify-between">
          <div className="text-[58px] font-bold leading-[70px]">
            <div>Hi 👋,</div>
            <div>My name is</div>
            <div>Yeabin</div>
            <div>I build things for web</div>
          </div>
          <div>interactive 3D model</div>
        </div>
      </div>
      <div className="mt-[348px] flex flex-col gap-[49px]">
        <div>My Tech Stack</div>
        <div>Technologies I’ve been working with recently</div>
      </div>
    </div>
  );
};

export default HomePage;
