const Home = () => {
  return (
    <>
      <div className="base-container flex gap-4">
        <div className="w-[40%] h-[660px] bg-white rounded-[50px] !p-[64px] flex flex-col items-start justify-start gap-5">
          <div className="!px-4 !py-3 !mb-2 bg-[#E7E7E7] rounded-[8px] flex items-center justify-center gap-2">
            <img
              src="https://cdn.prod.website-files.com/6630ceeee6fd1a867237f62e/664dab427e473146df5cd04f_shopify%201.svg"
              alt="shopify-icon"
            />
            <div className="black-color !font-medium">Made for Shopify</div>
          </div>
          <h1 className="text-[64px] !leading-[64px]  !font-[NeueMontrealBold]">
            Look Good✨ Feel Great,
            <br /> Dress Smart, <br />
            Shop Now.
          </h1>
          <h3 className="!text-[18px] text-[#787878] !font-[NeueMontrealMedium] !mt-4">
            Elevate your style, embrace confidence, <br /> and shop effortlessly
            today!
          </h3>
          <button className="w-[176px] !px-6 !py-8 flex gap-2 items-center justify-center main-color !font-[NeueMontrealMedium] rounded-[24px] !leading-5 cursor-pointer !text-[18px]">Premium Offer</button>
        </div>
        <div className="w-[60%] h-[660px] bg-white rounded-[50px] p-6 flex items-center justify-center gap-5"></div>
      </div>
    </>
  );
};

export default Home;
