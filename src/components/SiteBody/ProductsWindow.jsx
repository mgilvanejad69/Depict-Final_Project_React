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
        className={`min-h-[100vh] flex flex-wrap ${
          categoryProducts.length % 3 === 2
            ? "justify-start"
            : "justify-between"
        } items-start grow !px-[64px] !py-8 bg-[#FFFFFF] gap-y-6 rounded-[50px]`}
        ref={allProductsRef}
      >
        {categoryProducts.map((elem) => (
            <SingleProductCard elem={elem} key={elem.id} />
          ))}
      </div>
    </>
  );
};

export default ProductsWindow;
