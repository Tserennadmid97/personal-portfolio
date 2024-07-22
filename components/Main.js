import Image from "next/image";

export function Main() {
  return (
    <div className="m-[50px]">
      <Image className="float-right rounded-xl ml-10"
        src="/profile.jpg"
        width={200}
        height={200}
        alt="Picture of the author"
      />
      <h1 className="text-5xl font-medium mt-40">Hi, I am Gaben</h1>
      <p className="mt-5 mr-5 text-justify">
        "Struggling to navigate life's challenges? Let's embark on a journey of
        self-discovery and healing together. Through compassionate listening and
        evidence-based techniques, I offer a safe space to explore your emotions
        and empower you to overcome obstacles. Take the first step towards a
        healthier mind and a brighter future today."
      </p>
      <div className="mt-10">Ulaanbaatar Mongolia</div>
      <div className="pb-32">Unavailable for new projects</div>
    </div>
  );
}
