import { useEffect, useState } from "react";

const Categories = () => {
  const [categoriesList, setCategoriesList] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategoriesList(data))
      .catch((error) => console.log(error));
  }, []);

  const handleSelectCategory = (item) => {
    if (categoryProducts.length > 0) {
      fetch(`https://dummyjson.com/products/category/${item.name}`)
        .then((res) => res.json())
        .then((data) => setCategoryProducts(data))
        .catch((error) => console.log(error));
    }
  };
  console.log(categoryProducts);
  return (
    <>
      <div className="flex flex-col justify-start items-start !w-[300px] !p-4 h-[600px] 0v overflow-hidden flex-nowrap    bg-[#FFFFFF] rounded-[50px] gap-1">
        {categoriesList.map((elem) => (
          <button
            key={elem.id}
            className="w-[300px] h-[40px] bg-neutral-200 rounded-[4px] !px-4 flex items-center cursor-pointer text-[14px]"
            onClick={() => handleSelectCategory(elem)}
          >
            {elem.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default Categories;
