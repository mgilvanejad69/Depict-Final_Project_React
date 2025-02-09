import Brands from "./Brands";
import Cards from "./Cards";
import InfinitSlider from "./InfiniteSlider";
import SiteTitle from "./SiteTitle";

const Home = () => {
  return (
    <div className="base-container flex flex-col">
      <div className="w-full flex gap-4">
        <SiteTitle />
        <InfinitSlider />
      </div>
      <Brands />
      <Cards />
      <div className="w-full h-[1800px]"></div>
    </div>
  );
};

export default Home;
