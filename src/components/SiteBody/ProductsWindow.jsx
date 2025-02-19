import { useContext, useEffect, useRef } from "react";
import { AddToCardContext } from "../../Context/AddToCardContext.js";
import SingleProductCard from "./SingleProductCard.jsx";
import gsap from "gsap";

const ProductsWindow = () => {
  const { categoryProducts, setCategoryProducts } =
    useContext(AddToCardContext);
  const allProductsRef = useRef();

  useEffect(() => {
    if (categoryProducts.length === 0) {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((newData) => setCategoryProducts(newData.products))
        .catch((error) => console.log(error));

      const allProducts = allProductsRef.current;

      gsap.from(allProducts, {
        y: "100px",
        opacity: 0,
        duration: "1",
        ease: "none ",
        delay: "0.5",
      });
    }

    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div
        className="flex justify-center items-center grow !px-[64px] !py-4 bg-[#FFFFFF] rounded-[50px]"
        ref={allProductsRef}
      >
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
