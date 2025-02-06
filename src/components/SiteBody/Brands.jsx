import BRANDS from "../../DATA/BRANDS";

const Brands = () => {
  return (
    <div className="w-full !px-8 !py-10 !mt-4 bg-[#181818] rounded-[40px] flex flex-col items-center">
      <div className="text-[#FBFBFB] text-[18px] !pb-[3px] font-bold">
        Loved By Fashion Brands
      </div>
      <div className="brands-container w-full h-[20.8px] overflow-hidden flex !mt-6 justify-between">
        {BRANDS.map((elem) => (
          <img
            key={elem.id}
            src={elem.src}
            alt={`brands-${elem.id + 1}`}
            className={elem.style}
          />
        ))}
      </div>
    </div>
  );
};

export default Brands;
