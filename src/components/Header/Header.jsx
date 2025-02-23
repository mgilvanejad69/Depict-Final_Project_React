import { gsap } from "gsap";
import { Link } from "react-router-dom";
import LogoPic from "./Logo";
import { useContext, useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import CardSvg from "./CardSvg";
import { AddToCardContext } from "../../Context/AddToCardContext";
import SearchSvg from "./SearchSvg";
import SignIn from "./SignIn";
import AddToCardButtoninCardBox from "../SiteBody/AddToCardButtoninCardBox";
gsap.registerPlugin(ScrollTrigger);

const Header = ({ children }) => {
  const myNavRef = useRef();
  const {
    cardList,
    userProfileInfo,
    isLoggedIn,
    setIsLoggedIn,
    reset,
    inShopping,
    setInShopping,
    signInisOpen,
    setSignInisOpen,
    cardIsOpen,
    setCardIsOpen,
    setSignUp,
  } = useContext(AddToCardContext);

  const cardRef = useRef();
  const iconCardRef = useRef();

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

  const handleLogOut = () => {
    setIsLoggedIn(false);
    reset();
  };

  const handleInShopping = () => {
    setInShopping(true);
    setCardIsOpen(false);
  };

  const handleInHome = () => {
    setInShopping(false);
    setCardIsOpen(false);
  };

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setCardIsOpen(false);
    }
  });

  document.addEventListener("mousedown", (event) => {
    if (
      cardRef.current &&
      !cardRef.current.contains(event.target) &&
      !iconCardRef.current.contains(event.target)
    ) {
      setCardIsOpen(false);
    }
  });

  return (
    <>
      <SignIn />
      <nav
        className="flex w-full base-container h-[120px] lg:h-[124px] !px-4 !pt-4 !pb-4 sticky top-0 z-50"
        ref={myNavRef}
      >
        <div className="w-full h-full !px-4 lg:!pl-8 bg-white flex justify-between items-center rounded-[30px]">
          <div className="h-full flex justify-center items-center">
            <LogoPic />
          </div>
          <div className="h-full lg:flex justify-center items-center">
            <div className="h-full flex justify-center items-center !p-1">
              {inShopping ? (
                <div className="group w-[56px] h-[48px] relative bg-[#FFFFFF] flex justify-center items-center main-font-color main-font font-[NeueMontreal] cursor-pointer !px-4 !py-[12px] !mx-2 rounded-[8px]  hover:bg-[#E7E7E7]  transition-all duration-300">
                  <SearchSvg />
                </div>
              ) : (
                ""
              )}
              <Link to="/">
                <button
                  className=" hidden lg:flex justify-center items-center main-font-color main-font font-[NeueMontreal] cursor-pointer !px-4 !py-[12px] !mx-2 rounded-[8px]  hover:bg-[#E7E7E7]  transition-all duration-300 will-change-transform transform-gpu"
                  onClick={handleInHome}
                >
                  Home
                </button>
              </Link>
              <Link to="/Products">
                <button
                  className=" hidden lg:flex justify-center items-center main-font-color main-font font-[NeueMontreal] cursor-pointer !px-4 !py-[12px] !mx-2 rounded-[8px]  hover:bg-[#E7E7E7] transition-all will-change-transform transform-gpu"
                  onClick={handleInShopping}
                >
                  Shopping
                </button>
              </Link>
              <button className=" hidden lg:flex justify-center items-center main-font-color main-font font-[NeueMontreal] cursor-pointer !px-4 !py-[12px] !mx-2 rounded-[8px]  hover:bg-[#E7E7E7] transition-all will-change-transform transform-gpu">
                Contacts
              </button>
              <button className=" hidden lg:flex justify-center items-center main-font-color main-font font-[NeueMontreal] cursor-pointer !px-4 !py-[12px] !ml-2 !mr-8 rounded-[8px] hover:bg-[#E7E7E7] transition-all will-change-transform transform-gpu">
                About us
              </button>

              <div className="w-[90px] h-[48px] lg:w-[140px] lg:h-full main-color flex justify-end lg:justify-center items-center rounded-[16px] lg:rounded-[24px] relative">
                {isLoggedIn ? (
                  <>
                    <div className="flex justify-center items-center !p-2 group ">
                      <button className="main-font-color cursor-pointer">{`${userProfileInfo[0].firstName}`}</button>
                      <div className="absolute w-[300px] lg:w-[400px] h-[400px]  top-[100px] right-0 hidden flex-col justify-between items-end bg-white border-2 border-[#ff5314] rounded-2xl z-50 transition-all group-focus-within:flex">
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
                    className="main-font-color cursor-pointer text-[12px] lg:text-[16px] font-bold"
                    onClick={() => {
                      setSignInisOpen(!signInisOpen);
                      setSignUp(false);
                    }}
                  >
                    SIgn In
                  </button>
                )}
                <div className="w-[1px] h-[24px] bg-[#181818] !mx-2"></div>
                <div className="group w-[28px] h-[28px]">
                  <button
                    className="cursor-pointer "
                    onClick={() => setCardIsOpen(!cardIsOpen)}
                    ref={iconCardRef}
                  >
                    <CardSvg />
                  </button>
                  <div
                    className={`absolute w-[300px] lg:w-[800px] ${
                      cardIsOpen
                        ? "h-[400px] lg:h-[550px] border-2 border-[#181818]"
                        : "h-0"
                    } top-[75px] lg:top-[100px] right-0 flex flex-col justify-between items-end bg-white  rounded-2xl z-50 transition-all duration-300`}
                    ref={cardRef}
                  >
                    {cardList.length > 0 ? (
                      <div
                        className={`w-full h-full ${
                          cardIsOpen ? "flex" : "hidden"
                        }  flex-col items-center justify-between`}
                      >
                        <div className="max-w-full w-full flex flex-col justify-start items-start gap-2 !p-2 lg:!p-4 rounded-2xl overflow-y-scroll">
                          {uniqueArray(cardList).map((elem) => (
                            <div
                              key={elem.id}
                              className="w-full h-[60px] lg:h-auto !px-2 flex items-center justify-between border border-[#181818] rounded-2xl cursor-pointer relative"
                            >
                              <div className="w-full flex justify-between items-center lg:!px-5">
                                <div className="w-full flex items-center justify-start lg:!px-2 gap-1">
                                  <div className="w-[40px] lg:w-[75px] h-[40px] lg:h-[75px] relative">
                                    <img
                                      src={elem.images[0]}
                                      alt=""
                                      className="w-[40px] h-[40px] lg:w-[75px] lg:h-[75px] object-contain"
                                    />
                                    {productsQuantity(cardList, elem) > 1 ? (
                                      <div className="absolute right-0.5 bottom-0.5 w-[14px] h-[14px] lg:w-[18px] lg:h-[18px] flex items-center justify-center bg-[#ff5314] rounded-[4px] text-white text-[10px] lg:text-[12px]">
                                        {productsQuantity(cardList, elem)}
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                  <p className="text-[12px] lg:text-[14px] text-[#181818] text-center text-nowrap overflow-hidden">
                                    {elem.title}
                                  </p>
                                </div>
                                <div className=" relative">
                                  <p className="text-[14px] text-[#181818] text-center font-bold">
                                    {elem.price}$
                                  </p>
                                </div>
                              </div>
                              <AddToCardButtoninCardBox elem={elem} />
                            </div>
                          ))}
                        </div>
                        <div className="w-full flex justify-between items-center !p-4">
                          <p className=" text-[14px] lg:text-[18px] font-bold !ml-4 text-[#ff5314]">
                            Total Price:{" "}
                            {Number(totalPayment(cardList).toFixed(2))}$
                          </p>
                          <button className="!px-4 lg:!px-8 !py-2 rounded-[8px] bg-[#ff5314] text-[#181818] text-[14px] lg:text-[16px] font-bold hover:text-white cursor-pointer">
                            Pay Now
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div
                        className={`w-full h-full ${
                          cardIsOpen ? "flex" : "hidden"
                        }  justify-center items-center text-[28px] text-[#ff5314]`}
                      >
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
      <div className="flex lg:hidden w-full h-[64px] bg-[#ffffff] fixed bottom-0 left-0 z-40 border-t border-gray-200">
        <div className="w-[25%] flex justify-center items-center border-r border-gray-200">
          <Link to="/">
            <button
              className=" lg:w-auto flex justify-center items-center main-font-color main-font font-[NeueMontreal] cursor-pointer !px-2 lg:!px-4 !py-[12px] lg:!mx-2 rounded-[8px]  hover:bg-[#E7E7E7]  transition-all duration-300 focus-within:text-[ff5314]"
              onClick={handleInHome}
            >
              Home
            </button>
          </Link>
        </div>
        <div className="w-[25%] flex justify-center items-center  border-r border-gray-200">
          <Link to="/Products">
            <button
              className=" lg:w-auto flex justify-center items-center main-font-color main-font font-[NeueMontreal] cursor-pointer !px-2 lg:!px-4 !py-[12px] lg:!mx-2 rounded-[8px]  hover:bg-[#E7E7E7] transition-all focus-within:text-[ff5314]"
              onClick={handleInShopping}
            >
              Shopping
            </button>
          </Link>
        </div>
        <div className="w-[25%] flex justify-center items-center  border-r border-gray-200">
          <button className=" lg:w-auto flex justify-center items-center main-font-color main-font font-[NeueMontreal] cursor-pointer !px-2 lg:!px-4 !py-[12px] lg:!mx-2 rounded-[8px]  hover:bg-[#E7E7E7] transition-all focus-within:text-[ff5314]">
            Contacts
          </button>
        </div>
        <div className="w-[25%] flex justify-center items-center">
          <button className=" lg:w-auto flex justify-center items-center main-font-color main-font font-[NeueMontreal] cursor-pointer !px-2 lg:!px-4 !py-[12px] lg:!ml-2 lg:!mr-8 rounded-[8px] hover:bg-[#E7E7E7] transition-all focus-within:text-[ff5314]">
            About us
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
