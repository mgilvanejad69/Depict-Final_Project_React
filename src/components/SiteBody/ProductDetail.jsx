import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import gsap from "gsap";

import AddToCardButtonProductDetail from "./AddToCardButtonProductDetail";

const ProductDetail = () => {
  const params = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const myProductRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data))
      .catch((error) => console.log(error));

    const myProduct = myProductRef.current;
    const myProductChild = Array.from(myProduct.children);

    gsap.from(myProductChild, {
      y: "100px",
      opacity: 0,
      duration: "0.5",
      ease: "power2.out",
      stagger: 0.1,
    });

    gsap.from(imageRef.current, {
      y: "100px",
      opacity: 0,
      duration: "0.5",
      ease: "power2.out",
      delay: "0.5",
    });

    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="base-container !mt-4 lg:!mt-[48px] flex ">
        <div className="w-full !p-4 rounded-[50px] bg-[#FFFFFF] flex flex-col !mx-4 lg:flex-row justify-evenly items-center lg:gap-10 border border-solid border-[#181818] shadow-2xl">
          <div className="lg:w-[25%] lg:!mr-[32px] ">
            <img
              src={singleProduct.images}
              alt={singleProduct.title}
              className="w-[100%] h-[450px] object-cover rounded-[8px]"
              ref={imageRef}
            />
          </div>
          <div
            className="w-[100%] lg:w-[40%] flex flex-col justify-start items-start gap-1 lg:gap-4 lg:!mt-[36px]"
            ref={myProductRef}
          >
            <h1 className="text-[#181818] text-start font-bold text-[24px] lg:text-[44px]">
              {singleProduct.title}
            </h1>
            <div className="flex items-center justify-between gap-2">
              <p className="text-[#181818] text-[18px] lg:text-[22px] font-bold">
                Price:
              </p>
              <p className="text-[#ff5314] text-[20px] xl:text-[24px] font-bold">
                {singleProduct.price}$
              </p>
            </div>
            <div className="flex items-center justify-between gap-2">
              <p className="text-[#181818] text-[14px] lg:text-[18px] font-bold">
                Brand:
              </p>
              <p className="text-[#181818] text-[14px] lg:text-[18px]">
                {singleProduct.brand}
              </p>
            </div>
            <div className="flex items-center justify-between gap-2">
              <p className="text-[#181818] text-[14px] lg:text-[18px] font-bold">
                Category:
              </p>
              <p className="text-[#181818] text-[14px] lg:text-[18px]">
                {singleProduct.category}
              </p>
            </div>
            <div className="flex items-center justify-between gap-2">
              <p className="text-[#181818] text-[14px] lg:text-[18px] font-bold">
                Shipping Information:
              </p>
              <p className="text-[#181818] text-[14px] lg:text-[18px]">
                {singleProduct.shippingInformation}
              </p>
            </div>
            <div className="flex items-center justify-between gap-2">
              <p className="text-[#181818] text-[14px] lg:text-[18px] font-bold">
                Availability Status:
              </p>
              <p className="text-[#181818] text-[14px] lg:text-[18px]">
                {singleProduct.availabilityStatus}
              </p>
            </div>
            <div className="flex flex-col items-start justify-between gap-2">
              <p className="text-[#181818] text-[14px] lg:text-[18px] font-bold">
                Descriptions:
              </p>
              <p className="text-[#181818] text-[14px] lg:text-[18px]">
                {singleProduct.description}
              </p>
            </div>
            <div className="flex items-center justify-center !mx-auto lg:!mx-0 gap-5 !my-[24px]">
              <button className="w-[140px] h-[48px] rounded-2xl bg-[#ff5314] text-[#181818] cursor-pointer hover:text-[#FFFFFF]">
                Buy Now
              </button>
              <AddToCardButtonProductDetail elem={singleProduct} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
