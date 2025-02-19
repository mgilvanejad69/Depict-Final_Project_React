import { useNavigate } from "react-router-dom";
import AddToCardButton from "./AddToCardButton.jsx";

const SingleProductCard = ({elem}) => {
  const navigate = useNavigate();
  const handleProductDetail = (productID) => {
    return navigate(`/products/${productID}`);
  };

  return (
    <>
      <div
        className="group w-[30%] max-w-[350px] h-[450px]  rounded-[50px] !p-2 flex flex-col justify-center items-center overflow-hidden relative"
        onClick={() => {
          handleProductDetail(elem.id);
        }}
      >
        <div className="w-full h-full decoration-0 flex justify-center cursor-pointer">
          <img
            src={elem.images[0]}
            alt=""
            loading="lazy"
            className="w-full h-full object-contain bg-gray-600 rounded-[50px]"
          />
          <div className="!px-3 w-[80%] h-[40px]  absolute bottom-[54px] flex justify-between items-center bg-[#FFFFFF] opacity-80 rounded-[50px]">
            <div className="w-[80%] relative">
              <p className="text-[14px] overflow-hidden text-nowrap">
                {elem.title}
              </p>
              <div className="w-[50px] h-full absolute top-0 right-0 bg-gradient-to-r from-transparent to-[#FFFFFF] "></div>
            </div>
            <div className="flex justify-end items-center w-[35px]">
              <p className="font-bold w-[35px] text-end">{elem.price}$</p>
            </div>
          </div>
        </div>
        <AddToCardButton elem={elem} />
      </div>
    </>
  );
};

export default SingleProductCard;
