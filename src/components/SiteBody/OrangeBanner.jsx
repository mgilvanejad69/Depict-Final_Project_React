import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const OrangeBanner = () => {
  const orangeBannerRef = useRef();

  useEffect(() => {
    const orangeBanner = orangeBannerRef.current;
    const orangeBannerItems = Array.from(orangeBannerRef.current.children);


    gsap.to(orangeBannerItems, {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: orangeBanner,
        start: "top center",
        end: "top 20%",
        scrub: 2,
      },
    });
  }, []);
  return (
    <div className="w-full !mt-[50px] block">
      <div
        className="w-full !py-6 lg:!py-0 lg:h-[83vh] bg-[#FF5314] rounded-[50px] flex flex-col justify-center items-center"
        ref={orangeBannerRef}
      >
        <div className="text-[40px] lg:text-[150px] text-[#181818] font-[NeueMontrealMedium] font-[600] leading-[44px] lg:leading-[150px] tracking-tight lg:translate-y-[100px] lg:opacity-20">
          <strong>⚡️</strong>
          Experience
          <strong>⚡️</strong>
        </div>
        <div className="text-[40px] lg:text-[150px] text-[#181818] font-[NeueMontrealMedium] font-[600] leading-[44px] lg:leading-[150px]  tracking-tight lg:translate-y-[100px] lg:opacity-20">
          Elegance with us
        </div>
        <button className="w-[176px] !px-6 !py-6 lg:!py-8 !mt-4 lg:!mt-8 flex gap-2 items-center justify-center bg-[#181818] text-white !font-[NeueMontrealMedium] rounded-[24px] lg:!leading-5 cursor-pointer text-[14px] lg:!text-[18px]  lg:translate-y-[100px]  lg:opacity-20">
          Try it...
        </button>
      </div>
    </div>
  );
};

export default OrangeBanner;
