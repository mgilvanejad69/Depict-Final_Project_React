import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Cards = () => {
  const cardsBoxRef = useRef();
  const cardsRef = useRef();
  const textTopOfCardsRef = useRef();

  useEffect(() => {
    const cardsBox = cardsBoxRef.current;
    const textTopOfCards = textTopOfCardsRef.current;
    const cards = Array.from(cardsRef.current.children);

    console.log(cards);

    gsap.to(cards, {
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      ease: "none",
      scrollTrigger: {
        trigger: cardsBox,
        start: "top top",
        end: "+=700px",
        scrub: true,
        pin: true,
      },
    });

    gsap.to(textTopOfCards, {
      opacity: 0,
      scrollTrigger: {
        trigger: textTopOfCards,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div
      className="w-full flex flex-col justify-start items-center relative"
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
          <div className="w-[400px] h-[480px] bg-[#7f77f0] rounded-[50px] !p-8 -rotate-10 translate-y-[375px] translate-x-[130px] scale-110"></div>
          <div className="w-[400px] h-[480px] bg-[#181818] rounded-[50px] !p-8 translate-y-[320px] scale-110"></div>
          <div className="w-[400px] h-[480px] bg-[#f04e4e] rounded-[50px] !p-8 rotate-10 translate-y-[375px] -translate-x-[130px] scale-110"></div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
