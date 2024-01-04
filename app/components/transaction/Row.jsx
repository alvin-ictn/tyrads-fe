import Image from "next/image";

export default function Row({ history, ...rest }) {
  return (
    <div className="flex p-6 gap-10 border-b max-w-[716px] w-100% justify-between" {...rest}>
      <div className="flex gap-5">
        <div className="rounded-full w-[50px] h-[50px]" alt="user-picture">
          <Image className="w-full h-full" src={history.picture} alt="user" />
        </div>
        <div className="flex flex-col gap-[10px]">
          <span className="font-medium">{history.name}</span>
          <span className="text-[#c1c0c9]">{history.record_date}</span>
        </div>
      </div>
      <div className="flex gap-10 items-center">
        <div className="font-semibold">
          <p>{history.balance}</p>
        </div>
        <div className="cursor-pointer w-6 h-6 flex items-center justify-center hover:bg-[#fedfc0] hover:rounded-full">
          <i class="ri-more-2-fill"></i>
        </div>
      </div>
    </div>
  );
}
