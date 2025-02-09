const Footer = ({ children }) => {
  return (
    <>
      {children}
      <div className="base-container !mt-[80px]">
        <div className="w-full h-[83vh] bg-[#181818] rounded-[50px] flex flex-col justify-center items-center">
          <div className="text-[160px] text-[#181818] font-[NeueMontrealMedium] font-[600] leading-[160px] tracking-[-2]">
            <strong>⚡️</strong>
            Experience
            <strong>⚡️</strong>
          </div>
          <div className="text-[160px] text-[#181818] font-[NeueMontrealMedium] font-[600] leading-[160px]  tracking-[-2]">
            Elegance with us
          </div>
          <button className="w-[176px] !px-6 !py-8 !mt-8 flex gap-2 items-center justify-center bg-[#181818] text-white !font-[NeueMontrealMedium] rounded-[24px] !leading-5 cursor-pointer !text-[18px]">
            Try it...
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
