import { useContext, useEffect, useState } from "react";
import { AddToCardContext } from "../../Context/AddToCardContext.js";
import Categories from "./Categories.jsx";
import CategoriesSideBar from "./CategoriesSideBar.jsx";
import { useLocation, useNavigate } from "react-router-dom";

const Products = () => {
  const [productData, setProductData] = useState([]);
  const {
    setAddToCard,
    cardList,
    setCardList,
    categoryProducts,
    setCategoryProducts,
  } = useContext(AddToCardContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (categoryProducts.length === 0) {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((newData) => setCategoryProducts(newData.products))
        .catch((error) => console.log(error));
    }
  }, []);

  const handleAddToCard = (item) => {
    setAddToCard((prev) => prev + 1);
    setCardList([...cardList, item]);
  };

  // const fixedImages = (images) => {
  //   if (images.startsWith("[") && images.endsWith("]")) {
  //     return images.slice(2, images.length - 2);
  //   }
  //   if (images.startsWith("[") && images.endsWith('"')) {
  //     return images.slice(2, images.length - 1);
  //   }
  //   if (!images.startsWith("[")) {
  //     return images;
  //   }
  // };

  const productsQuantity = (arr, item) => {
    let newArr = arr.filter((elem) => elem.id == item.id);
    return newArr.length;
  };

  const handleRemoveFromCard = (item) => {
    let newCardList = [...cardList];
    let itemIndex = newCardList.findIndex((elem) => elem.id == item.id);
    newCardList.splice(itemIndex, 1);
    setCardList(newCardList);
  };

  const handleProductDetail = (productID) => {
    return navigate(`/products/${productID}`);
  };
  return (
    <div className="base-container !mt-[24px]">
      <div className="w-full flex gap-4  rounded-[50px]">
        <CategoriesSideBar />
        <div className="flex justify-center items-center grow !px-[64px] !py-4 bg-[#FFFFFF] rounded-[50px]">
          <div className="flex flex-wrap justify-start gap-y-[32px] gap-x-[24px]">
            {categoryProducts.map((elem) => (
              <div
                className="group w-[30%] max-w-[350px] h-[450px]  rounded-[50px] !p-2 flex flex-col justify-center items-center overflow-hidden relative"
                key={elem.id}
                onClick={() => handleProductDetail(elem.id)}
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
                      <p className="font-bold w-[35px] text-end">
                        {elem.price}$
                      </p>
                    </div>
                  </div>
                  {productsQuantity(cardList, elem) > 0 ? (
                    <div className="!px-4 w-[112px] h-[36px] text-[#181818] text-[14px] !pb-1  absolute bottom-[104px] right-[-112px] opacity-80 main-color flex justify-between items-center rounded-l-[50px] cursor-pointer z-40 hover:text-[#FFFFFF] group-hover:right-0 transition-all hover:opacity-100">
                      <button
                        className="!px-2 text-[30px] text-center cursor-pointer hover:text-[#181818]"
                        onClick={() => handleRemoveFromCard(elem)}
                      >
                        -
                      </button>
                      <p className="!px-2 text-[16px] text-center">
                        {productsQuantity(cardList, elem)}
                      </p>
                      <button
                        className="!px-2 text-[24px] text-center cursor-pointer hover:text-[#181818]"
                        onClick={() => handleAddToCard(elem)}
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <a
                      className="!pl-4 w-[112px] h-[36px] text-[#181818] text-[14px] !pb-1  absolute bottom-[104px] right-[-112px] opacity-80 main-color flex justify-between items-center rounded-l-[50px] cursor-pointer z-40 hover:text-[#FFFFFF] group-hover:right-0 transition-all hover:opacity-100"
                      onClick={() => handleAddToCard(elem)}
                    >
                      Add to Card
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
