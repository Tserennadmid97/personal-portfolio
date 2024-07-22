import Image from "next/image";
import ExperienceCard from "./ExperienceCard";


const experiences = [
  
  {
    startDate: "2020-",
    endDate: "2023",
    position: "Sr.Frontend Developer",
    spec: ["one", "one", "one", "one"],
  },
  {
    startDate: "3033-",
    endDate: "3044",
    position: "Team Manager",
    spec: ["two", "two", "two", "two"],
  },
  {
    startDate: "2020-",
    endDate: "3007",
    position: "Full Stack Developer",
    spec: ["Never late for work", "two", "hello"],
  },
  {
    startDate: "4949-",
    endDate: "6969",
    position: "General Manager",
    spec: ["self motivated", "drinks a lot", "ss", "dd"],
  },
];

export function Experience() {
  return (
    <div className="">
      <div className="flex justify-center">
        <p className="font-medium flex justify-center rounded-3xl bg-slate-500 pl-5 pr-5  text-white mt-32">
          Experience
        </p>
      </div>
      <div className="justify-center flex mt-5 mb-10">
        Here is a quick summary of my most recent experience:
      </div>

      {experiences.map((experience, i) => (
        <ExperienceCard props={experience} />
      ))}

      {/* <div className="flex justify-center mb-8">
        <div className="h-[288px] w-[896px] bg-slate-300 flex justify-center items-center">
          <div className="absolute mb-40 list-none text-2xl flex w-[800px] gap-40">
            <Image
              className="rounded-xl"
              src="/logo-upwork.png"
              width={102}
              height={2}
              alt="Picture of the author"
            />
            Sr.Frontend Developer
          </div>
          <div className="flex items-center">
            <ul className="list-disc">
              <li>Don't late for work never</li>
              <li>Eats only 1500calories a day</li>
              <li>Don't drink and smoke</li>
              <li>Ride Harley Davidson</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-8">
        <div className="h-[288px] w-[896px] bg-slate-300 flex justify-center items-center">
          <div className="absolute mb-40 list-none text-2xl flex w-[800px] gap-40">
            <Image
              className="rounded-xl"
              src="/logo-upwork.png"
              width={102}
              height={2}
              alt="Picture of the author"
            />
            Team Lead
          </div>
          <div className="flex items-center">
            <ul className="list-disc">
              <li>Don't late for work never</li>
              <li>Eats only 1500calories a day</li>
              <li>Don't drink and smoke</li>
              <li>Ride Harley Davidson</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-8">
        <div className="h-[288px] w-[896px] bg-slate-300 flex justify-center items-center">
          <div className="absolute mb-40 list-none text-2xl flex w-[800px] gap-40">
            <Image
              className="rounded-xl"
              src="/logo-upwork.png"
              width={102}
              height={2}
              alt="Picture of the author"
            />
            Full Stack Developer
          </div>
          <div className="flex items-center">
            <ul className="list-disc">
              <li>Don't late for work never</li>
              <li>Eats only 1500calories a day</li>
              <li>Don't drink and smoke</li>
              <li>Ride Harley Davidson</li>
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  );
}
