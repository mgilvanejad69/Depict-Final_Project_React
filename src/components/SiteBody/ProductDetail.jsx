import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data))
      .catch((error) => console.log(error));
  }, []);
  console.log(singleProduct);
  return (
    <>
      <div className="base-container !mt-[24px] flex flex-col">
        <div className="w-full !p-4 rounded-[50px] bg-[#FFFFFF] flex justify-evenly items-center gap-10 border border-solid border-[#181818] !mt-[36px]">
          <div className="w-[25%] !mr-[32px]">
            <img
              src={singleProduct.images}
              alt={singleProduct.title}
              className="w-[100%] h-[450px] object-cover rounded-[8px]"
            />
          </div>
          <div className="w-[40%] flex flex-col justify-start items-start gap-4 !mt-[64px] ">
            <h1 className="text-[#181818] text-start font-bold text-[44px]">
              {singleProduct.title}
            </h1>
            <div className="flex items-center justify-between gap-2">
              <p className="text-[#181818] text-[18px] font-bold">Brand:</p>
              <p className="text-[#181818] text-[18px]">
                {singleProduct.brand}
              </p>
            </div>
            <div className="flex items-center justify-between gap-2">
              <p className="text-[#181818] text-[18px] font-bold">Category:</p>
              <p className="text-[#181818] text-[18px]">
                {singleProduct.category}
              </p>
            </div>
            <div className="flex items-center justify-between gap-2">
              <p className="text-[#181818] text-[18px] font-bold">
                Shipping Information:
              </p>
              <p className="text-[#181818] text-[18px]">
                {singleProduct.shippingInformation}
              </p>
            </div>
            <div className="flex items-center justify-between gap-2">
              <p className="text-[#181818] text-[18px] font-bold">
                Availability Status:
              </p>
              <p className="text-[#181818] text-[18px]">
                {singleProduct.availabilityStatus}
              </p>
            </div>
            <div className="flex flex-col items-start justify-between gap-2">
              <p className="text-[#181818] text-[18px] font-bold">
                Descriptions:
              </p>
              <p className="text-[#181818] text-[18px]">
                {singleProduct.description}
              </p>
            </div>
            <div className="flex items-center justify-center gap-5 !my-[64px]">
              <button className="!px-[48px] !py-4 rounded-2xl bg-[#ff5314] text-[#181818] cursor-pointer hover:text-[#FFFFFF]">
                Buy Now
              </button>
              <button className="!px-[48px] !py-4 rounded-2xl bg-[#ff5314] text-[#181818] cursor-pointer hover:text-[#FFFFFF]">
                Add to Card
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
