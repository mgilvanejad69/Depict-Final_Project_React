import { useContext, useEffect, useState } from "react";
import { AddToCardContext } from "../../Context/AddToCardContext.js";

const Products = () => {
  const [productData, setProductData] = useState([]);
  const { setAddToCard, cardList, setCardList } = useContext(AddToCardContext);

  useEffect(() => {
    if (productData.length === 0) {
      fetch("https://api.escuelajs.co/api/v1/products?offset=1&limit=48")
        .then((res) => res.json())
        .then((newData) => setProductData(newData))
        .catch((error) => console.log(error));
    }
  }, []);

  const handleAddToCard = (item) => {
    setAddToCard((prev) => prev + 1);
    setCardList([...cardList, item]);
  };

  console.log(cardList);

  return (
    <div className="base-container !mt-[24px]">
      <div className="w-full flex gap-6">
        <div className="flex justify-between items-center grow flex-wrap !p-[64px] gap-y-[64px] bg-[#FFFFFF] rounded-[50px]">
          {productData.map((elem) => (
            <div
              className="group w-[30%] max-w-[350px] h-[450px]  rounded-[50px] !p-2 flex flex-col justify-center items-center overflow-hidden relative"
              key={elem.id}
            >
              <button className="w-full h-full decoration-0 flex justify-center cursor-pointer">
                <img
                  src={elem.images[0]}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover bg-gray-600 rounded-[50px]"
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
                <a
                  className="!pl-4 w-[112px] h-[36px] text-[#181818] text-[14px] !pb-1  absolute bottom-[104px] right-[-112px] opacity-60 main-color flex justify-between items-center rounded-l-[50px] cursor-pointer z-40 hover:text-[#FFFFFF] group-hover:right-0 transition-all hover:opacity-100"
                  onClick={() => handleAddToCard(elem)}
                >
                  Add to Card
                </a>
              </button>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-start items-start w-[300px] !p-4 h-[600px] bg-[#FFFFFF] rounded-[50px]">
          <div className="w-[300px] h-[200px] bg-amber-200">hi</div>
        </div>
      </div>
    </div>
  );
};

export default Products;
