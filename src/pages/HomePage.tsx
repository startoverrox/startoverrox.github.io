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
    <div className="px-L-700 py-S-500">
      <div className="flex items-center justify-between">
        <div>logo</div>
        <div className="gap-M-100 flex">
          <div className="flex w-[609px] justify-between">
            <div>Home</div>
            <div>About</div>
            <div>Tech Stack</div>
            <div>Projects</div>
            <div>Contact</div>
          </div>
          <div className="gap-S-200 flex">
            <GithubIcon className="h-[30px] w-[30px]" />
            <LinkedinIcon className="h-[30px] w-[30px]" />
            <XIcon className="h-[30px] w-[30px]" />
          </div>
        </div>
      </div>

      <div className="mt-L-1000">
        <div className="flex justify-between">
          <div className="text-M-100 leading-[70px] font-bold">
            {/* <div>Hi 👋,</div>
            <div>My name is</div>
            <div>Yeabin</div>
            <div>I build things for web</div> */}
          </div>
          <div>interactive 3D model</div>
        </div>
      </div>

      <div className="mt-L-1000 gap-M-100 flex flex-col">
        <div className="text-M-100 leading-S-300 text-center font-bold">
          My Tech Stack
        </div>
        <div className="leading-S-300 text-S-400 text-center">
          Technologies I’ve been working with recently
        </div>
      </div>

      <div className="mt-L-500 flex flex-wrap">
        <div className="p-M-100 w-1/4">
          <StackHtmlIcon />
        </div>
        <div className="p-M-100 w-1/4">
          <StackCssIcon />
        </div>
        <div className="p-M-100 w-1/4">
          <StackJsIcon />
        </div>
        <div className="p-M-100 w-1/4">
          <StackReactIcon />
        </div>
        <div className="p-M-100 w-1/4">
          <StackTailwindIcon />
        </div>
        <div className="p-M-100 w-1/4">
          <StackGitIcon />
        </div>
        <div className="p-M-100 w-1/4">
          <StackGithubIcon />
        </div>
        <div className="p-M-100 w-1/4">
          <StackVscIcon />
        </div>
      </div>

      <div className="mt-L-800 gap-M-100 flex flex-col">
        <div className="text-M-100 leading-S-300 text-center font-bold">
          Projects
        </div>
        <div className="text-S-400 leading-S-300 text-center">
          Things I've built so far
        </div>
      </div>

      <div className="mt-L-200 flex flex-wrap">
        <div className="p-S-100 w-1/3">
          <ProjectCard img="src/assets/images/random-img1.jpg">
            <p>
              <strong>Typography</strong> is the art and technique of arranging
              type to make written language legible, readable and appealing when
              displayed.
            </p>
          </ProjectCard>
        </div>
        <div className="p-S-100 w-1/3">
          <ProjectCard img="">
            <p>
              <strong>Typography</strong> is the art and technique of arranging
              type to make written language legible, readable and appealing when
              displayed.
            </p>
          </ProjectCard>
        </div>
        <div className="p-S-100 w-1/3">
          <ProjectCard img="">
            <p>
              <strong>Typography</strong> is the art and technique of arranging
              type to make written language legible, readable and appealing when
              displayed.
            </p>
          </ProjectCard>
        </div>
        <div className="p-S-100 w-1/3">
          <ProjectCard img="">
            <p>
              <strong>Typography</strong> is the art and technique of arranging
              type to make written language legible, readable and appealing when
              displayed.
            </p>
          </ProjectCard>
        </div>
        <div className="p-S-100 w-1/3">
          <ProjectCard img="">
            <p>
              <strong>Typography</strong> is the art and technique of arranging
              type to make written language legible, readable and appealing when
              displayed.
            </p>
          </ProjectCard>
        </div>
        <div className="p-S-100 w-1/3">
          <ProjectCard img="">
            <p>
              <strong>Typography</strong> is the art and technique of arranging
              type to make written language legible, readable and appealing when
              displayed.
            </p>
          </ProjectCard>
        </div>
      </div>

      <div className="mt-L-800 flex justify-between">
        <div className="flex-1">logo</div>
        <div className="flex flex-1 items-center justify-between">
          <p className="text-center">000-000-0000</p>
          <p className="text-center">email@gmail.com</p>
          <div className="gap-S-200 flex">
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
