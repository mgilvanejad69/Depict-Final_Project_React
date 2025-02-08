import { gsap } from "gsap";

const Cards = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center relative">
      <div className="w-[640px] h-[40vh] flex justify-center items-end">
        <div className="font-[NeueMontrealMedium] text-[54.66px] text-[#181818] font-[600] leading-[54.66px] tracking-[-2px] text-center">
          80% of store traffic <br /> interacts with collections. <br /> Make it
          convert.
        </div>
      </div>
      <div className="w-full h-[100vh] absolute top-0 flex justify-center items-center">
        <div className="w-[1200px] h-[480px] flex items-center gap-4">
          <div className="w-[400px] h-[480px] bg-[#7f77f0] rounded-[50px] !p-8 -rotate-10 translate-y-[375px] translate-x-[130px]"></div>
          <div className="w-[400px] h-[480px] bg-[#181818] rounded-[50px] !p-8 translate-y-[320px]"></div>
          <div className="w-[400px] h-[480px] bg-[#f04e4e] rounded-[50px] !p-8 rotate-10 translate-y-[375px] -translate-x-[130px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
