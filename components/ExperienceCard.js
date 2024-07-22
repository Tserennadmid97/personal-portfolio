import Image from "next/image";

export default function ExperienceCard({ props }) {
  const items = props.spec;

  return (
    <div className="flex justify-center mb-8">
      <div className="h-[288px] w-[896px] bg-slate-300 flex items-center">
        <div className="w-full">
          <div className="flex mb-40 justify-between">
            <Image
              className="rounded-xl"
              src="/logo-upwork.png"
              width={102}
              height={28}
              alt="Picture of the author"
            />
            <div>
              <h2 className="text-xl">{props.position}</h2>
            </div>
            <div>
              <p className="text-slate-600">
                {props.startDate}
                {props.endDate}
              </p>
            </div>
            <div>
            
        
        <ul className="flex justify-center">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
