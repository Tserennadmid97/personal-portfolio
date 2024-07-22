import Image from "next/image";


export function Skills () {
    return (
      <div className="h-[35rem] m-[50px]">

        <div className="flex justify-center">
        <p className="font-medium rounded-3xl bg-slate-500 pl-5 pr-5  text-white mt-32">Skills</p>
      </div>
      <div className="justify-center flex mt-5">The skills, tools and technologies i am really good at:</div>
      
      <div className="flex items-center flex-col">
      <Image className="mt-10"
        src="/row.png"
        width={1216}
        height={300}
        alt="Skills"
      />
      <Image className="mt-10"
        src="/row1.png"
        width={1216}
        height={300}
        alt="Skills"

      
      />
      </div>
      </div>
    ) 
}