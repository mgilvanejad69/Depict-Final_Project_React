import { useContext, useEffect, useState } from "react";
import { AddToCardContext } from "../../Context/AddToCardContext";
import gsap from "gsap";

const CategoriesSideBar = () => {
  const [categoriesList, setCategoriesList] = useState([]);

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
    <div className=" min-w-[250px] h-[400px] overflow-y-scroll overflow-x-hidden bg-white flex flex-col justify-start items-center rounded-[50px] !pt-6  !pl-4">
      <button
        className="w-[250px] !px-4 text-[18px] text-start text-[#181818] font-bold cursor-pointer hover:text-[#ff5314]"
        onClick={handleAllProducts}
      >
        All Categories
      </button>
      {categoriesList.map((elem) => (
        <button
          key={elem.name}
          className="w-[250px] leading-[24px] !px-4 flex items-center cursor-pointer text-[14px] hover:text-[#ff5314]"
          onClick={() => handleSelectCategory(elem)}
        >
          {elem.name}
        </button>
      ))}
    </div>
  );
};

export default CategoriesSideBar;
