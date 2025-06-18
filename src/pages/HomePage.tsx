import GithubIcon from "@/assets/icons/GithubIcon.svg?react";
import LinkedinIcon from "@/assets/icons/LinkedinIcon.svg?react";
import XIcon from "@/assets/icons/XIcon.svg?react";
import StackHtmlIcon from "@/assets/icons/StackHtmlIcon.svg?react";
import StackCssIcon from "@/assets/icons/StackCssIcon.svg?react";
import StackJsIcon from "@/assets/icons/StackJsIcon.svg?react";
import StackReactIcon from "@/assets/icons/StackReactIcon.svg?react";
import StackTailwindIcon from "@/assets/icons/StackTailwindIcon.svg?react";
import StackGitIcon from "@/assets/icons/StackGitIcon.svg?react";
import StackGithubIcon from "@/assets/icons/StackGithubIcon.svg?react";
import StackVscIcon from "@/assets/icons/StackVscIcon.svg?react";
import ProjectCard from "@/components/ProjectCard";

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

      <div className="mt-[138px] flex flex-wrap">
        <div className="w-1/4 p-[50px]">
          <StackHtmlIcon />
        </div>
        <div className="w-1/4 p-[50px]">
          <StackCssIcon />
        </div>
        <div className="w-1/4 p-[50px]">
          <StackJsIcon />
        </div>
        <div className="w-1/4 p-[50px]">
          <StackReactIcon />
        </div>
        <div className="w-1/4 p-[50px]">
          <StackTailwindIcon />
        </div>
        <div className="w-1/4 p-[50px]">
          <StackGitIcon />
        </div>
        <div className="w-1/4 p-[50px]">
          <StackGithubIcon />
        </div>
        <div className="w-1/4 p-[50px]">
          <StackVscIcon />
        </div>
      </div>

      <div className="mt-[192px] flex flex-col gap-[49px]">
        <div className="text-center text-[48px] leading-[26px] font-bold">
          Projects
        </div>
        <div className="text-center text-[32px] leading-[26px]">
          Things I've built so far
        </div>
      </div>

      <div className="mt-[96px] flex flex-wrap">
        <div className="w-1/3 p-[10px]">
          <ProjectCard img="src/assets/images/random-img1.jpg">
            <p>
              <strong>Typography</strong> is the art and technique of arranging
              type to make written language legible, readable and appealing when
              displayed.
            </p>
          </ProjectCard>
        </div>
        <div className="w-1/3 p-[10px]">
          <ProjectCard img="">
            <p>
              <strong>Typography</strong> is the art and technique of arranging
              type to make written language legible, readable and appealing when
              displayed.
            </p>
          </ProjectCard>
        </div>
        <div className="w-1/3 p-[10px]">
          <ProjectCard img="">
            <p>
              <strong>Typography</strong> is the art and technique of arranging
              type to make written language legible, readable and appealing when
              displayed.
            </p>
          </ProjectCard>
        </div>
        <div className="w-1/3 p-[10px]">
          <ProjectCard img="">
            <p>
              <strong>Typography</strong> is the art and technique of arranging
              type to make written language legible, readable and appealing when
              displayed.
            </p>
          </ProjectCard>
        </div>
        <div className="w-1/3 p-[10px]">
          <ProjectCard img="">
            <p>
              <strong>Typography</strong> is the art and technique of arranging
              type to make written language legible, readable and appealing when
              displayed.
            </p>
          </ProjectCard>
        </div>
        <div className="w-1/3 p-[10px]">
          <ProjectCard img="">
            <p>
              <strong>Typography</strong> is the art and technique of arranging
              type to make written language legible, readable and appealing when
              displayed.
            </p>
          </ProjectCard>
        </div>
      </div>

      <div className="mt-[200px] flex justify-between">
        <div className="flex-1">logo</div>
        <div className="flex flex-1 items-center justify-between">
          <p className="text-center">000-000-0000</p>
          <p className="text-center">email@gmail.com</p>
          <div className="flex gap-[20px]">
            <GithubIcon className="h-[30px] w-[30px]" />
            <LinkedinIcon className="h-[30px] w-[30px]" />
            <XIcon className="h-[30px] w-[30px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
