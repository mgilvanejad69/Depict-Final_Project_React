import CategoriesSideBar from "./CategoriesSideBar.jsx";
import ProductsWindow from "./ProductsWindow.jsx";

const Products = () => {
  return (
    <div className="base-container lg:!pl-4 !pt-[24px]">
      <div className="w-full flex flex-col lg:flex-row gap-2 lg:gap-4  rounded-[50px]">
        <CategoriesSideBar />
        <ProductsWindow />
      </div>
    </div>
  );
};

export default Products;
