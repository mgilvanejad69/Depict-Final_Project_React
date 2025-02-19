import CategoriesSideBar from "./CategoriesSideBar.jsx";
import ProductsWindow from "./ProductsWindow.jsx";

const Products = () => {
  return (
    <div className="base-container !mt-[24px]">
      <div className="w-full flex gap-4  rounded-[50px]">
        <CategoriesSideBar />
        <ProductsWindow />
      </div>
    </div>
  );
};

export default Products;
