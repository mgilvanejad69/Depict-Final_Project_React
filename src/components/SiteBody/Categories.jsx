import { useContext, useEffect, useState } from "react";
import { AddToCardContext } from "../../Context/AddToCardContext";
import gsap from "gsap";
import { Link, useNavigate } from "react-router-dom";

const Categories = () => {
  const [categoriesList, setCategoriesList] = useState([]);
  const navigate = useNavigate();

  const { categoryRef, setCategoryProducts } = useContext(AddToCardContext);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategoriesList(data))
      .catch((error) => console.log(error));
  }, []);

  const handleSelectCategory = (item) => {
    fetch(`https://dummyjson.com/products/category/${item.name}`)
      .then((res) => res.json())
      .then((data) => setCategoryProducts(data.products))
      .catch((error) => console.log(error));

    return navigate("/Products");
  };

  const handleAllProducts = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((newData) => setCategoryProducts(newData.products))
      .catch((error) => console.log(error));

    return navigate("/Products");
  };

  const handleCloseCategory = () => {
    gsap.to(categoryRef.current, {
      top: "-100vh",
      ease: "power2.out",
      duration: 0.5,
    });
  };

  return (
    <div
      className="max-h-[100vh] h-full bg-white opacity-[95%] hidden lg:flex justify-center items-center fixed top-[-100vh] left-0 z-50 !p-[64px]"
      ref={categoryRef}
    >
      <div className="w-[60%] h-[60%] flex flex-col justify-center items-start !p-4 bg-[#cfcfcf] rounded-[50px] shadow-2xl relative">
        <div className="w-full flex justify-center items-center !px-[64px]">
          <button
            className="text-[18px] text-[#181818] font-bold cursor-pointer hover:text-[#ff5314]"
            onClick={handleAllProducts}
          >
            All Categories
          </button>
        </div>
        <div className="flex flex-wrap justify-center items-center !p-10 ">
          {categoriesList.map((elem, index) => (
            <button
              key={index}
              className="w-[200px] h-[40px] leading-[18px] rounded-[4px] !px-4 flex items-center cursor-pointer text-[14px] hover:text-[#ff5314]"
              onClick={() => handleSelectCategory(elem)}
            >
              {elem.name}
            </button>
          ))}
          <button
            className="h-[18px] cursor-pointer absolute bottom-5 text-[14px] text-[#ff5314]"
            onClick={handleCloseCategory}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
