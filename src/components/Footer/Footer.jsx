import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Footer = ({ children }) => {
  const myFooterRef = useRef();

  useEffect(() => {
    const myFooter = myFooterRef.current;

    gsap.from(myFooter, {
      y: "50px",
      ease: "power3.out",
      duration: 1,
      stagger: 1,
      });
  }, []);
  return (
    <>
      {children}
      <div className="w-full !p-4 min-h-fit base-container lg:!mt-[80px] !pb-[64px]" ref={myFooterRef}>
        <div className="w-full lg:min-h-[60vh] bg-[#181818] rounded-[50px] flex flex-col justify-center items-center !p-4 lg:!py-[64px] lg:!px-[80px]">
          <img
            src="https://cdn.prod.website-files.com/6630ceeee6fd1a867237f62e/6632233a8c15c7c58df8b325_logo_white.svg"
            alt=""
            className="w-[144px] !mt-6 lg:!m-0"
          />
          <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4 !mt-8">
            <div className="w-full lg:grow !py-8 !px-10 flex flex-col lg:flex-row justify-center items-center gap-3 bg-[#212121] rounded-[24px] border border-[#353535]">
              <img
                src="https://cdn.prod.website-files.com/6630ceeee6fd1a867237f62e/66431607b84486591d64cb16_hand-pointer-solid%201.svg"
                alt=""
                className="w-10"
              />
              <div className="text-[18px] text-[#FBFBFB] font-[600] !pb-[3px]">
                1-Click-Installation
              </div>
            </div>
            <div className="w-full lg:grow !py-8 !px-10 flex flex-col lg:flex-row justify-center items-center gap-3 bg-[#212121] rounded-[24px] border border-[#353535]">
              <img
                src="https://cdn.prod.website-files.com/6630ceeee6fd1a867237f62e/664b78437ae6bc170b8b3801_circle-check-solid%201.svg"
                alt=""
                className="w-10"
              />
              <div className="text-[18px] text-[#FBFBFB] font-[600] !pb-[3px]">
                Free Shipping
              </div>
            </div>
            <div className="w-full lg:grow !py-8 !px-10 flex flex-col lg:flex-row justify-center items-center gap-3 bg-[#212121] rounded-[24px] border border-[#353535]">
              <img
                src="https://cdn.prod.website-files.com/6630ceeee6fd1a867237f62e/664b783aefe32731a0f52e23_headset-solid%201.svg"
                alt=""
                className="w-10"
              />
              <div className="text-[18px] text-[#FBFBFB] font-[600] !pb-[3px]">
                Live Chat
              </div>
            </div>
          </div>
          <div className="!mt-[64px] flex flex-col lg:flex-row items-center justify-start lg:justify-between gap-4 lg:gap-[100px]">
            <div className="flex flex-col gap-4">
              <a
                href="#"
                className="decoration-0 flex justify-start items-start text-[18px] text-[#FBFBFB] font-[600] !pb-[3px] cursor-pointer"
              >
                🍎 Product
              </a>
              <a
                href="#"
                className="decoration-0 flex justify-start items-start text-[18px] text-[#FBFBFB] font-[600] !pb-[3px] cursor-pointer"
              >
                🇸🇪 Centra
              </a>
              <a
                href="#"
                className="decoration-0 flex justify-start items-start text-[18px] text-[#FBFBFB] font-[600] !pb-[3px] cursor-pointer"
              >
                🏷️ Pricing
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="#"
                className="decoration-0 flex justify-start items-start text-[18px] text-[#FBFBFB] font-[600] !pb-[3px] cursor-pointer"
              >
                ❤️ Customers
              </a>
              <a
                href="#"
                className="decoration-0 flex justify-start items-start text-[18px] text-[#FBFBFB] font-[600] !pb-[3px] cursor-pointer"
              >
                👋 Book Demo
              </a>
              <a
                href="#"
                className="decoration-0 flex justify-start items-start text-[18px] text-[#FBFBFB] font-[600] !pb-[3px] cursor-pointer"
              >
                💰 Referral
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="#"
                className="decoration-0 flex justify-start items-start text-[18px] text-[#FBFBFB] font-[600] !pb-[3px] cursor-pointer"
              >
                Our Story
              </a>
              <a
                href="#"
                className="decoration-0 flex justify-start items-start text-[18px] text-[#FBFBFB] font-[600] !pb-[3px] cursor-pointer"
              >
                Career
              </a>
              <a
                href="#"
                className="decoration-0 flex justify-start items-start text-[18px] text-[#FBFBFB] font-[600] !pb-[3px] cursor-pointer"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row justify-between items-center !mt-8">
            <a
              href="#"
              className="decoration-0 text-[13px] text-[#787878] font-[600] !pb-[3px] cursor-pointer"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="decoration-0 text-[13px] text-[#787878] font-[600] !pb-[3px] cursor-pointer"
            >
              Terms & Conditions
            </a>
          </div>
          <div className="w-full flex justify-center items-center lg:!mt-8">
            <div className="text-[13px] text-[#787878] font-[600] !pb-[3px]">
              Copyright 2024 - Depict - All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
