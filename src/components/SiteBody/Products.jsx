import { useEffect, useState } from "react";

const Products = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    if (productData.length === 0) {
      fetch("https://api.escuelajs.co/api/v1/products")
        .then((res) => res.json())
        .then((newData) => setProductData(newData))
        .catch((error) => console.log(error));
    }
  }, []);
  console.log(productData);

  return (
    <div className="base-container !mt-[24px]">
      <div className="w-full flex gap-6">
        <div className="flex justify-between items-center grow flex-wrap !p-[64px] gap-y-[64px] bg-[#FFFFFF] rounded-[50px]">
          {productData.map((elem) => (
            <div
              className="w-[30%] max-w-[350px] h-[450px] bg-gray-300 rounded-[50px] !p-2 flex flex-col justify-center items-center relative"
              key={elem.id}
            >
              <a
                href="#"
                className="w-full h-full decoration-0 flex justify-center"
              >
                <img
                  src={elem.images[0]}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover bg-gray-600 rounded-[50px]"
                />
                <div className="w-[80%] h-[40px]  absolute bottom-[32px] flex items-center bg-[#FFFFFF] opacity-80 rounded-[50px]"></div>
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-start items-start w-[300px] !p-4 h-[600px] bg-[#FFFFFF] rounded-[50px]">
          <div className="w-[300px] h-[200px] bg-amber-200">hi</div>
        </div>
      </div>
    </div>
  );
};

export default Products;
