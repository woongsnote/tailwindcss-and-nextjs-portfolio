"use client";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col mx-auto text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
        <div className="md:w-1/2 md:mt-2">
          <Image
            className="rounded-full shadow-2xl mx-8"
            src="/profile.jpg"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="font-bold text-3xl mt-6  md:mt-0">
            안녕하세요. 프론트엔드 개발자 문지웅입니다.
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">Frontend Engineer</p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-sky-600 rounded-lg cursor-pointer"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            Projects
          </Link>
        </div>
      </div>

      <div className="flex flex-row justify-center">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}>
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
