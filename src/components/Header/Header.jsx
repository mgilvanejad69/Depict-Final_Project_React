import { Link } from "react-router-dom";
import LogoPic from "./Logo";

const Header = ({ children }) => {
  return (
    <>
      <nav className="base-container h-[144px] !pt-8 !pb-4">
        <div className="w-full h-full !pl-8 bg-white flex justify-between items-center rounded-[30px] ">
          <div className=" h-full flex justify-center items-center">
            <LogoPic />
          </div>
          <div className="h-full flex justify-center items-center">
            <div className="h-full flex justify-center items-center !p-1">
              <button className="flex justify-center items-center main-font-color main-font font-[NeueMontreal] cursor-pointer !px-4 !py-[12px] !mx-2 rounded-[8px]  hover:bg-[#E7E7E7]  transition-all duration-300">
                Journal
              </button>
              <Link to="/Products">
                <button className="flex justify-center items-center main-font-color main-font font-[NeueMontreal] cursor-pointer !px-4 !py-[12px] !mx-2 rounded-[8px]  hover:bg-[#110f0f] transition-all">
                  Products
                </button>
              </Link>
              <button className="flex justify-center items-center main-font-color main-font font-[NeueMontreal] cursor-pointer !px-4 !py-[12px] !mx-2 rounded-[8px]  hover:bg-[#E7E7E7] transition-all">
                Contacts
              </button>
              <button className="flex justify-center items-center main-font-color main-font font-[NeueMontreal] cursor-pointer !px-4 !py-[12px] !ml-2 !mr-8 rounded-[8px] hover:bg-[#E7E7E7] transition-all">
                About us
              </button>
              <button className="w-[140px] h-full main-color flex justify-center items-center main-font-color main-font cursor-pointer rounded-[24px]">
                SIgn In
              </button>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
};

export default Header;
