import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import SlideUp from "./SlideUp";

const projects = [
  {
    name: "방구석 평론가",
    description: "영화정보 제공 및 후기 공유를 위한 프로젝트.",
    image: "/moviecritic.png",
    github: "https://github.com/hqasmei/thankful-thoughts",
    link: "https://www.moviecritic.site/",
  },
  {
    name: "북적북적 클론",
    description: "모바일 앱 북적북적을 웹 사이트로 구현한 프로젝트.",
    image: "/bookbookclone.png",
    github: "https://github.com/hqasmei/platoio",
    link: "https://bookbookclone.vercel.app/",
  },
  {
    name: "WeRef",
    description:
      "공부한 내용과 참고할 레퍼런스 링크를 공유하는 커뮤니티 프로젝트.",
    image: "/weref.png",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://katorfamilyphotos.com/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-sky-500 border-0 rounded" />
      </h1>
      <div className="flex flex-col space-y-28 mx-4">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2  md:flex-row md:space-x-12">
                  <div className="mt-8 md:w-1/2">
                    <Link href={project.link} target="_blank">
                      <Image
                        src={project.image}
                        alt=""
                        width={700}
                        height={700}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-12 md:w-1/2">
                    <h2 className="text-4xl font-bold mb-6">{project.name}</h2>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub size={30} className="" />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare size={30} className="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
