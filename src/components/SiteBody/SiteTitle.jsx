import { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import { AddToCardContext } from "../../Context/AddToCardContext";

const SiteTitle = () => {
  const siteTitleRef = useRef();
  const { categoryRef } = useContext(AddToCardContext);

  useEffect(() => {
    const siteTitleItems = Array.from(siteTitleRef.current.children);
    gsap.from(siteTitleItems, {
      y: 100,
      opacity: 0,
      ease: "none",
      duration: 0.4,
      delay: "0.5",
      stagger: {
        each: 0.1,
      },
    });
  }, []);

  const handleCategoriesPage = () => {
    gsap.to(categoryRef.current, {
      top: "0",
      ease: "power2.out",
      duration: 0.5,
    });
  };

  return (
    <>
      <div
        className="w-[100%] lg:w-[40%] lg:h-[660px] bg-white rounded-[50px] !px-6 !py-8 lg:!p-[64px] lg:flex flex-col items-start justify-start gap-5 opacity-100"
        ref={siteTitleRef}
      >
        <div className="!px-4 !py-3 !mb-2 bg-[#E7E7E7] rounded-[8px] hidden lg:flex items-center justify-center gap-2">
          <img
            src="https://cdn.prod.website-files.com/6630ceeee6fd1a867237f62e/664dab427e473146df5cd04f_shopify%201.svg"
            alt="shopify-icon"
          />
          <div className="black-color !font-medium">Made for Shopify</div>
        </div>
        <h1 className="text-[44px] !leading-[44px] lg:text-[64px] lg:!leading-[64px]  !font-[NeueMontrealBold]">
          Look Good✨ Feel Great,
          <br /> Dress Smart, <br />
          Shop Now.
        </h1>
        <h3 className="!text-[18px] text-[#787878] !font-[NeueMontrealMedium] !mt-4">
          Elevate your style, embrace confidence, <br /> and shop effortlessly
          today!
        </h3>
        <button
          className="w-[176px] !px-6 !py-6 lg:!py-8 !mt-8 lg:m-0 flex gap-2 items-center justify-center main-color !font-[NeueMontrealMedium] rounded-[24px] !leading-5 cursor-pointer !text-[18px]"
          onClick={handleCategoriesPage}
        >
          Shop Now
        </button>
      </div>
    </>
  );
};

export default SiteTitle;
