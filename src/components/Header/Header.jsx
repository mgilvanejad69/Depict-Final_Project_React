import { gsap } from "gsap";
import { Link } from "react-router-dom";
import LogoPic from "./Logo";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import CardSvg from "./CardSvg";
gsap.registerPlugin(ScrollTrigger);

const Header = ({ children }) => {
  const myNavRef = useRef();

  useEffect(() => {
    const myNav = myNavRef.current;

    gsap.from(myNav, {
      y: -150,
      opacity: 0,
      ease: "none",
      duration: 0.2,
      delay: "1",
      stagger: {
        each: 0.1,
      },
    });
  }, []);
  return (
    <>
      <nav
        className="base-container h-[144px] !pt-8 !pb-4 sticky top-0 z-50"
        ref={myNavRef}
      >
        <div className="w-full h-full !pl-8 bg-white flex justify-between items-center rounded-[30px]">
          <div className=" h-full flex justify-center items-center">
            <LogoPic />
          </div>
          <div className="h-full flex justify-center items-center">
            <div className="h-full flex justify-center items-center !p-1">
              <button className="flex justify-center items-center main-font-color main-font font-[NeueMontreal] cursor-pointer !px-4 !py-[12px] !mx-2 rounded-[8px]  hover:bg-[#E7E7E7]  transition-all duration-300">
                Journal
              </button>
              <Link to="/Products">
                <button className="flex justify-center items-center main-font-color main-font font-[NeueMontreal] cursor-pointer !px-4 !py-[12px] !mx-2 rounded-[8px]  hover:bg-[#E7E7E7] transition-all">
                  Products
                </button>
              </Link>
              <button className="flex justify-center items-center main-font-color main-font font-[NeueMontreal] cursor-pointer !px-4 !py-[12px] !mx-2 rounded-[8px]  hover:bg-[#E7E7E7] transition-all">
                Contacts
              </button>
              <button className="flex justify-center items-center main-font-color main-font font-[NeueMontreal] cursor-pointer !px-4 !py-[12px] !ml-2 !mr-8 rounded-[8px] hover:bg-[#E7E7E7] transition-all">
                About us
              </button>
              <div className="w-[140px] h-full main-color flex justify-center items-center rounded-[24px]">
                <button className="main-font-color main-font cursor-pointer">
                  SIgn In
                </button>
                <div className="w-[1px] h-[24px] bg-[#181818] !mx-2"></div>
                <button className="cursor-pointer">
                  <CardSvg />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
};

export default Header;
