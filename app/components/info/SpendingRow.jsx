import Image from "next/image";

export default function SpendingRow({ spending, ...rest }) {
  return (
    <div
      className="flex p-6 gap-10 border-b max-w-[716px] w-100% justify-between"
      {...rest}
    >
      <div className="flex gap-5">
        <div className="rounded-full w-[50px] h-[50px]" alt="user-picture">
          <Image className="w-full h-full" src={spending.picture} alt="image-alt"/>
        </div>
        <div className="flex flex-col gap-[10px]">
          <span className="font-medium">{spending.name}</span>
          <span className="text-[#c1c0c9]">{spending.record_date}</span>
        </div>
      </div>
    </div>
  );
}
