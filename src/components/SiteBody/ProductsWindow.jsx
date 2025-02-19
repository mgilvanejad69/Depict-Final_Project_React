import { useContext, useEffect } from "react";
import { AddToCardContext } from "../../Context/AddToCardContext.js";
import SingleProductCard from "./SingleProductCard.jsx";

const ProductsWindow = () => {
  const { categoryProducts, setCategoryProducts } =
    useContext(AddToCardContext);

  useEffect(() => {
    if (categoryProducts.length === 0) {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((newData) => setCategoryProducts(newData.products))
        .catch((error) => console.log(error));
    }

    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="flex justify-center items-center grow !px-[64px] !py-4 bg-[#FFFFFF] rounded-[50px]">
        <div className="flex flex-wrap justify-start gap-y-[32px] gap-x-[24px]">
          {categoryProducts.map((elem) => (
            <SingleProductCard elem={elem} key={elem.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsWindow;
