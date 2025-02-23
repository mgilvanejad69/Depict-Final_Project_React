import { useNavigate } from "react-router-dom";
import AddToCardButton from "./AddToCardButton.jsx";

const SingleProductCard = ({ elem }) => {
  const navigate = useNavigate();
  const handleProductDetail = (productID) => {
    return navigate(`/products/${productID}`);
  };

  return (
    <>
      <div
        className="group w-full  lg:w-[33%] lg:max-w-[40%] h-[450px]  rounded-[50px] !p-2 flex flex-col justify-center items-center overflow-hidden relative"
        onClick={() => {
          handleProductDetail(elem.id);
        }}
      >
        <div className="min-w-full h-full decoration-0 flex justify-center cursor-pointer border  border-[#181818] rounded-[50px]">
          <img
            src={elem.images[0]}
            alt=""
            loading="lazy"
            className="w-full h-full lg:min-w-[300px] object-contain rounded-[50px]"
          />
          <div className="!px-3 w-[80%] h-[40px] max-w-[80%] absolute bottom-[54px] flex justify-between items-center bg-[#181818] opacity-80 rounded-[50px]">
            <div className="w-[70%] relative">
              <p className="text-[14px] overflow-hidden text-nowrap text-white">
                {elem.title}
              </p>
              <div className="w-[60px] h-full absolute top-0 right-0 bg-gradient-to-r from-transparent to-[#181818] "></div>
            </div>
            <div className="flex justify-end items-center">
              <p className="font-bold text-end text-white">{elem.price}$</p>
            </div>
          </div>
        </div>
        <AddToCardButton elem={elem} />
      </div>
    </>
  );
};

export default SingleProductCard;
