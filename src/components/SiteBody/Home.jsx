import Brands from "./Brands";
import Cards from "./Cards";
import InfinitSlider from "./InfiniteSlider";
import OrangeBanner from "./OrangeBanner";
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
      <OrangeBanner />
    </div>
  );
};

export default Home;
