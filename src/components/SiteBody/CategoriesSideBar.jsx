import { useContext, useEffect, useState } from "react";
import { AddToCardContext } from "../../Context/AddToCardContext";
import gsap from "gsap";
import { useRef } from "react";

const CategoriesSideBar = () => {
  const [categoriesList, setCategoriesList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const { categoryRef, setCategoryProducts } = useContext(AddToCardContext);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategoriesList(data))
      .catch((error) => console.log(error));
  }, []);

  const handleAllProducts = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((newData) => setCategoryProducts(newData.products))
      .catch((error) => console.log(error));
  };

  const handleSelectCategory = (item) => {
    fetch(`https://dummyjson.com/products/category/${item.name}`)
      .then((res) => res.json())
      .then((data) => setCategoryProducts(data.products))
      .catch((error) => console.log(error));
  };

  return (
    <div className="w-full lg:w-[250px] !px-4">
      <div className="w-full lg:w-[250px] flex flex-col items-center gap-2 ">
        <button
          className="w-full flex justify-center items-center text-[14px] gap-1 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex flex-col items-center justify-center gap-0.5">
            <span className="w-4 h-0.5 bg-neutral-800"></span>
            <span className="w-4 h-0.5 bg-neutral-800"></span>
            <span className="w-4 h-0.5 bg-neutral-800"></span>
          </div>
          <p>Categories</p>
        </button>
        <div
          className={`w-full lg:min-w-[250px] lg:w-[250px] lg:!pt-6 ${
            isOpen ? "h-[300px] !pt-6" : "h-0"
          } lg:h-[400px] overflow-y-scroll overflow-x-hidden bg-white flex flex-col justify-start items-center rounded-[50px] !pl-4 transition-all duration-300`}
        >
          <button
            className="w-full lg:w-[250px] !px-[32px] lg:!px-4 text-[18px] text-start text-[#181818] font-bold cursor-pointer hover:text-[#ff5314]"
            onClick={handleAllProducts}
          >
            All Categories
          </button>
          {categoriesList.map((elem) => (
            <button
              key={elem.name}
              className="w-full lg:w-[250px] leading-[24px] !px-[32px] lg:!px-4 flex items-center cursor-pointer text-[14px] hover:text-[#ff5314]"
              onClick={() => handleSelectCategory(elem)}
            >
              {elem.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSideBar;
