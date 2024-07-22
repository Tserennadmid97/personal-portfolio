import Image from "next/image";

export function Sub() {
  return (
    <div className="pt-3 pb-32">
      <div className=""></div>
      <div className="flex justify-center">
        <p className="font-medium flex justify-center rounded-3xl bg-slate-500 pl-3 pr-3 font-thin text-white">About me</p>
      </div>

      <div className="Sub">
        <Image
          className="float-left m-10"
          src="/fluffy.jpeg"
          width={400}
          height={600}
          alt="Picture of the author"
        />
      </div>

      <div className="m-10">
        <div className="justify-center flex font-medium text-4xl pb-5 ">
          Curious about me? Here you go:
        </div>
        <div className="text-justify">
        I am a dedicated and motivated software developer with a passion for
        technology and a strong foundation in coding, seeking to leverage my
        skills in a collaborative team environment. With a Bachelor’s degree in
        Computer Science and [X] years of professional experience, I have honed
        my abilities in developing scalable software solutions and optimizing
        complex algorithms. My journey in software development began with a
        fascination for problem-solving and a love for building functional
        applications from scratch. Over the years, I have cultivated expertise
        in several programming languages including Python, JavaScript, and Java,
        mastering frameworks such as React.js and Django to create responsive
        web applications. My experience extends to database management with SQL
        and NoSQL databases, ensuring efficient data storage and retrieval. I
        thrive in dynamic work environments where innovation and creativity are
        encouraged. My approach blends analytical thinking with a proactive
        attitude, allowing me to tackle challenges head-on and deliver robust,
        maintainable code. I am enthusiastic about learning new technologies and
        methodologies, keeping up-to-date with industry trends to continuously
        improve my skill set. Beyond technical proficiency, I excel in
        collaborative settings, valuing communication and teamwork to achieve
        project goals effectively. I have experience working in Agile
        environments, participating in daily stand-ups and sprints to deliver
        features on time while maintaining code quality through continuous
        integration and testing. Outside of coding, I enjoy contributing to
        open-source projects, attending tech meetups, and mentoring junior
        developers to foster a supportive community. I am driven by a desire to
        create meaningful software that enhances user experiences and solves
        real-world problems. I am currently seeking new opportunities where I
        can apply my expertise and grow professionally, contributing to
        innovative projects and advancing my career in software development.
        </div>
      </div>
    </div>
  );
}
