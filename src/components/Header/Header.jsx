import { gsap } from "gsap";
import { Link } from "react-router-dom";
import LogoPic from "./Logo";
import { useContext, useEffect, useRef, useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import CardSvg from "./CardSvg";
import { AddToCardContext } from "../../Context/AddToCardContext";
import SearchSvg from "./SearchSvg";
gsap.registerPlugin(ScrollTrigger);

const Header = ({ children }) => {
  const myNavRef = useRef();
  const {
    cardList,
    SignInRef,
    userProfileInfo,
    isLoggedIn,
    setIsLoggedIn,
    usernameRef,
    passwordRef,
  } = useContext(AddToCardContext);

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

  const uniqueArray = (arr) => {
    let map = new Map();
    return arr.filter((item) => !map.has(item.id) && map.set(item.id, true));
  };

  const productsQuantity = (arr, item) => {
    let newArr = arr.filter((elem) => elem.id == item.id);
    return newArr.length;
  };

  const totalPayment = (arr) => {
    return arr.reduce((total, item) => total + item.price, 0);
  };

  const handleOpenLoginPage = () => {
    gsap.to(SignInRef.current, {
      top: "0",
      ease: "power2.out",
      duration: 0.5,
    });
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
    usernameRef.current.value = "";
    passwordRef.current.value = "";
  };

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
              <div className="group w-[56px] h-[48px] relative bg-[#FFFFFF] flex justify-center items-center main-font-color main-font font-[NeueMontreal] cursor-pointer !px-4 !py-[12px] !mx-2 rounded-[8px]  hover:bg-[#E7E7E7]  transition-all duration-300">
                <SearchSvg />
              </div>
              <Link to="/">
                <button className="flex justify-center items-center main-font-color main-font font-[NeueMontreal] cursor-pointer !px-4 !py-[12px] !mx-2 rounded-[8px]  hover:bg-[#E7E7E7]  transition-all duration-300">
                  Home
                </button>
              </Link>
              <Link to="/Products">
                <button className="flex justify-center items-center main-font-color main-font font-[NeueMontreal] cursor-pointer !px-4 !py-[12px] !mx-2 rounded-[8px]  hover:bg-[#E7E7E7] transition-all">
                  Shopping
                </button>
              </Link>
              <button className="flex justify-center items-center main-font-color main-font font-[NeueMontreal] cursor-pointer !px-4 !py-[12px] !mx-2 rounded-[8px]  hover:bg-[#E7E7E7] transition-all">
                Contacts
              </button>
              <button className="flex justify-center items-center main-font-color main-font font-[NeueMontreal] cursor-pointer !px-4 !py-[12px] !ml-2 !mr-8 rounded-[8px] hover:bg-[#E7E7E7] transition-all">
                About us
              </button>

              <div className="w-[140px] h-full main-color flex justify-center items-center rounded-[24px] relative">
                {isLoggedIn ? (
                  <>
                    <div className="flex justify-center items-center !p-2 group ">
                      <button className="main-font-color cursor-pointer">{`${userProfileInfo[0].firstName}`}</button>
                      <div className="absolute w-[400px] h-[400px]  top-[100px] right-0 hidden flex-col justify-between items-end bg-white border-2 border-[#ff5314] rounded-2xl z-50 transition-all group-focus-within:flex">
                        <div className="w-full h-full flex flex-col items-center justify-center !p-8 gap-4">
                          <div className="w-full flex justify-center items-center">
                            <img
                              src={userProfileInfo[0].image}
                              alt=""
                              className="w-[150px] h-[150px] rounded-[50%] object-cover"
                            />
                          </div>
                          <div className="flex justify-center items-center gap-2">
                            <h1 className="font-bold">{`${userProfileInfo[0].firstName} ${userProfileInfo[0].lastName}`}</h1>
                          </div>
                          <button
                            className="!px-8 !py-2 rounded-[8px] bg-[#ff5314] text-[#181818] text-[16px] font-bold hover:text-white cursor-pointer !mt-[64px]"
                            onClick={handleLogOut}
                          >
                            Log Out
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <button
                    className="main-font-color main-font cursor-pointer"
                    onClick={handleOpenLoginPage}
                  >
                    SIgn In
                  </button>
                )}
                <div className="w-[1px] h-[24px] bg-[#181818] !mx-2"></div>
                <div className="group w-[28px] h-[28px]">
                  <button className="cursor-pointer ">
                    <CardSvg />
                  </button>
                  <div className="absolute w-[400px] h-[400px]  top-[100px] right-0 hidden flex-col justify-between items-end bg-white border-2 border-[#ff5314] rounded-2xl z-50 transition-all group-focus-within:flex">
                    {cardList.length > 0 ? (
                      <div className="w-full h-full flex flex-col items-center justify-between">
                        <div className="w-full flex flex-col justify-start items-start gap-1.5 !p-4 rounded-2xl overflow-y-scroll">
                          {uniqueArray(cardList).map((elem) => (
                            <div
                              key={elem.id}
                              className="w-full !px-2 flex items-center justify-start border border-[#181818] rounded-2xl cursor-pointer"
                            >
                              <div className="w-[75px] h-[75px] relative">
                                <img
                                  src={elem.images[0]}
                                  alt=""
                                  className="w-[75px] h-[75px] object-contain"
                                />
                                {productsQuantity(cardList, elem) > 1 ? (
                                  <div className="absolute right-0.5 bottom-0.5 w-[18px] h-[18px] flex items-center justify-center bg-[#ff5314] rounded-[4px] text-white text-[12px]">
                                    {productsQuantity(cardList, elem)}
                                  </div>
                                ) : (
                                  ""
                                )}
                              </div>
                              <div className="flex items-center justify-between !px-2 gap-4">
                                <p className="text-[14px] text-[#181818] text-center text-nowrap overflow-hidden">
                                  {elem.title}
                                </p>
                                <p className="text-[14px] text-[#181818] text-center font-bold">
                                  {elem.price}$
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="w-full flex justify-between items-center !p-4">
                          <p className="text-[#181818] text-[18px] font-bold !ml-4">
                            Total Price: {totalPayment(cardList)}$
                          </p>
                          <button className="!px-8 !py-2 rounded-[8px] bg-[#ff5314] text-[#181818] text-[16px] font-bold hover:text-white cursor-pointer">
                            Pay Now
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-full flex justify-center items-center text-[28px] text-[#ff5314]">
                        YOUR CARD IS EMPTY
                      </div>
                    )}
                  </div>
                </div>
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
