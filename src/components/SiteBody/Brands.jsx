import { gsap } from "gsap";
import { lazy, useRef } from "react";
import BRANDS from "../../DATA/BRANDS";
import { useEffect } from "react";

const Brands = () => {
  const brandsRef = useRef(null);
  const brandsContainerRef = useRef();

  useEffect(() => {
    const brands = brandsRef.current;
    const brandsItems = Array.from(brands.children);
    const brandsContainer = brandsContainerRef.current;

    let totalWidth = BRANDS.length * 160;
    brandsItems.map((elem) => (totalWidth += elem.offsetWidth));

    gsap.to(brands, {
      x: `-=${totalWidth / 2}`,
      ease: "none",
      duration: BRANDS.length * 8,
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % (totalWidth / 2)),
      },
    });

    gsap.from(brandsContainer, {
      y: 150,
      opacity: 1,
      ease: "none",
      duration: 0.2,
      delay: "1.25",
      stagger: {
        each: 0.1,
      },
    });
  }, []);
  return (
    <div
      className=" !px-8 !py-10 !mt-4 bg-[#181818] rounded-[40px] flex flex-col items-center overflow-hidden"
      onLoad={lazy}
      ref={brandsContainerRef}
    >
      <div className="text-[#FBFBFB] text-[18px] !pb-[3px] font-bold">
        Loved By Fashion Brands
      </div>
      <div className="brands-container  flex justify-start items-center !mt-6 ">
        <div className="flex gap-[80px] lg:gap-[160px]" ref={brandsRef}>
          {BRANDS.map((elem) => (
            <img
              key={elem.id}
              src={elem.src}
              alt={`brands-${elem.id + 1}`}
              className={`h-[21px] ${elem.style}`}
              onLoad={lazy}
            />
          ))}
          {BRANDS.map((elem) => (
            <img
              key={elem.id}
              src={elem.src}
              alt={`brands-${elem.id + 1}`}
              className={`h-[21px] ${elem.style}`}
              onLoad={lazy}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
