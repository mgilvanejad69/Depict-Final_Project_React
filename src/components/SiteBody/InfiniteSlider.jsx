import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Images from "../../DATA/IMAGES";

const InfinitSlider = () => {
  const sliderTrackRef = useRef();
  const animationRef = useRef();

  useEffect(() => {
    const sliderTrack = sliderTrackRef.current;
    let totalWidth = 0;
    const items = Array.from(sliderTrack.children);

    items.map((elem) => (totalWidth += elem.offsetWidth));

    animationRef.current = gsap.to(sliderTrack, {
      x: `-=${totalWidth / 2}`,
      ease: "none",
      duration: Images.length * 4,
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % (totalWidth / 2)),
      },
    });

    gsap.from(sliderTrack, {
      y: 100,
      opacity: 0,
      ease: "none",
      duration: 0.4,
      delay: "0.75",
      stagger: {
        each: 0.1,
      },
    });
  }, []);

  const handleMouseEnter = () => animationRef.current.pause();
  const handleMouseLeave = () => animationRef.current.resume();

  return (
    <>
      <div className="slider w-[60%] h-[660px] bg-white rounded-[50px] p-6 flex items-center justify-center gap-5 relative cursor-grab overflow-hidden">
        <div
          className="slider-track h-[550px] flex"
          ref={sliderTrackRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {Images.map((elem) => (
            <img
              key={elem.id}
              src={elem.src}
              alt={elem.title}
              className="!p-1"
            />
          ))}
          {Images.map((elem) => (
            <img
              key={elem.id}
              src={elem.src}
              alt={elem.title}
              className="!p-1"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default InfinitSlider;
