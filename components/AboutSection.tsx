import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="text-center font-bold md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h2 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to Know Me!
            </h2>
            <p></p>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-center text-2xl font-bold mb-6 md:text-left">
              My Skills
            </h2>
            <div className="flex flex-wrap flex-row justify-center md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold">
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
              src="/profileImage.jpg"
              alt=""
              width={325}
              height={325}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
