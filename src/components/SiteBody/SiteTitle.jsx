import { useEffect, useRef } from "react";
import gsap from "gsap";

const SiteTitle = () => {
  const siteTitleRef = useRef();

  useEffect(() => {
    const siteTitleItems = Array.from(siteTitleRef.current.children);
    gsap.from(siteTitleItems, {
      y: 100,
      opacity: 0,
      ease: "none",
      duration: 0.4,
      delay:"0.5",
      stagger: {
        each: 0.1,
      },
    });
  }, []);

  return (
    <>
      <div
        className="w-[40%] h-[660px] bg-white rounded-[50px] !p-[64px] flex flex-col items-start justify-start gap-5 opacity-100"
        ref={siteTitleRef}
      >
        <div className="!px-4 !py-3 !mb-2 bg-[#E7E7E7] rounded-[8px] flex items-center justify-center gap-2">
          <img
            src="https://cdn.prod.website-files.com/6630ceeee6fd1a867237f62e/664dab427e473146df5cd04f_shopify%201.svg"
            alt="shopify-icon"
          />
          <div className="black-color !font-medium">Made for Shopify</div>
        </div>
        <h1 className="text-[64px] !leading-[64px]  !font-[NeueMontrealBold]">
          Look Good✨ Feel Great,
          <br /> Dress Smart, <br />
          Shop Now.
        </h1>
        <h3 className="!text-[18px] text-[#787878] !font-[NeueMontrealMedium] !mt-4">
          Elevate your style, embrace confidence, <br /> and shop effortlessly
          today!
        </h3>
        <button className="w-[176px] !px-6 !py-8 flex gap-2 items-center justify-center main-color !font-[NeueMontrealMedium] rounded-[24px] !leading-5 cursor-pointer !text-[18px]">
          Premium Offer
        </button>
      </div>
    </>
  );
};

export default SiteTitle;
