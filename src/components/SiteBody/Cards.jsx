import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Cards = () => {
  const cardsBoxRef = useRef();
  const cardsRef = useRef();
  const textTopOfCardsRef = useRef();
  const cardsIconRef = useRef();
  const cardsIcon = cardsIconRef.current;

  useEffect(() => {
    const cardsBox = cardsBoxRef.current;
    const textTopOfCards = textTopOfCardsRef.current;
    const cardsContainer = cardsRef.current;
    const cards = Array.from(cardsRef.current.children);

    gsap.to(cards, {
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      force3D: true,
      ease: "none",
      scrollTrigger: {
        trigger: cardsBox,
        start: "top top",
        end: "bottom center",
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });

    gsap.to(textTopOfCards, {
      opacity: 0,
      scrollTrigger: {
        trigger: textTopOfCards,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        refreshPriority: 1,
      },
    });
  }, []);
  return (
    <div
      className="w-full min-h-screen flex flex-col justify-start items-center relative"
      ref={cardsBoxRef}
    >
      <div className="w-[640px] h-[40vh] flex justify-center items-end">
        <div
          className=".text-top-of-cards font-[NeueMontrealMedium] text-[54.66px] text-[#181818] font-[600] leading-[54.66px] tracking-[-2px] text-center opacity-100"
          ref={textTopOfCardsRef}
        >
          80% of store traffic <br /> interacts with collections. <br /> Make it
          convert.
        </div>
      </div>
      <div className="w-full h-[100vh] absolute top-0 flex justify-center items-center">
        <div className=" h-[480px] flex items-center gap-4" ref={cardsRef}>
          <div className="card-item w-[400px] h-[480px] bg-[#212121] rounded-[50px] !p-8 -rotate-10 translate-y-[375px] translate-x-[130px] scale-110 flex flex-col justify-center items-center">
            <img
              src="https://cdn.prod.website-files.com/6630ceeee6fd1a867237f62e/664f9343d82e36635307f2f4_hand-pointer-regular%201.svg"
              alt=""
              className="w-[20%] !mb-8 group-hover:transform"
              ref={cardsIconRef}
            />
            <h2 className="text-[60px] text-[#FBFBFB] font-[600] font-[NeueMontrealMedium] text-center leading-[60px] tracking-tight">
              Stale Storefront Grids
            </h2>
            <div className="w-full !mt-6">
              <p className="text-[18px] text-[#787878] font-[600] font-[NeueMontrealMedium] text-center leading-[18px] tracking-tight">
                Your collections pages are monotonous because they're too costly
                to customize.
              </p>
            </div>
          </div>
          <div className="card-item w-[400px] h-[480px] bg-[#2B2B2B] rounded-[50px] !p-8 translate-y-[320px] scale-110 flex flex-col justify-center items-center">
            <img
              src="https://cdn.prod.website-files.com/6630ceeee6fd1a867237f62e/664f93fc12ae325e821e35c1_store-solid%201.svg"
              alt=""
              className="w-[20%] !mb-8"
              ref={cardsIconRef}
            />
            <h2 className="text-[60px] text-[#FBFBFB] font-[600] font-[NeueMontrealMedium] text-center leading-[60px] tracking-tight">
              Non-Visual Curation
            </h2>
            <div className="w-full !mt-6">
              <p className="text-[18px] text-[#B4B4B4] font-[600] font-[NeueMontrealMedium] text-center leading-[18px] tracking-tight">
                Your merchandising tools are complex, unintuitive and limited.
              </p>
            </div>
          </div>
          <div className="card-item w-[400px] h-[480px] bg-[#363636]  rounded-[50px] !p-8 rotate-10 translate-y-[375px] -translate-x-[130px] scale-110 flex flex-col justify-center items-center">
            <img
              src="https://cdn.prod.website-files.com/6630ceeee6fd1a867237f62e/664c52250567c9e0034b7510_Group%2092.svg"
              alt=""
              className="w-[30%] !mb-8"
              ref={cardsIconRef}
            />
            <h2 className="text-[60px] text-[#FBFBFB] font-[600] font-[NeueMontrealMedium] text-center leading-[60px] tracking-tight">
              Un-used Assets
            </h2>
            <div className="w-full !mt-6">
              <p className="text-[18px] text-[#B4B4B4] font-[600] font-[NeueMontrealMedium] text-center leading-[18px] tracking-tight">
                You spend $$$ on creating brand assets that your shoppers never
                get to see.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
