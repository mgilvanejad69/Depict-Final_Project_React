import { useContext } from "react";
import { AddToCardContext } from "../../Context/AddToCardContext.js";

const CardSvg = () => {
  const { cardList } = useContext(AddToCardContext);
  return (
    <div className="relative">
      <svg
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
        width="28"
        height="28"
        className=""
      >
        <path
          fill="#181818"
          fillRule="evenodd"
          d="M11.1 8.6a4.8 4.8 0 0 1 9.6 0zm-2 2v3.6h2v-3.6h9.6v3.6h2v-3.6h1.9l1 16.6H6.2l1.1-16.6h2Zm0-2a6.8 6.8 0 0 1 13.6 0h3.8v1L27.7 28l.1 1.1H4v-1L5.4 9.4v-1h3.8Z"
          clipRule="evenodd"
        ></path>
      </svg>
      {cardList.length > 0 ? (
        <p className="absolute top-[-4px] right-[-4px] w-[18px] h-[18px] bg-[#181818] rounded-[50%] text-[#FFFFFF] text-[12px]">
          {cardList.length}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default CardSvg;
