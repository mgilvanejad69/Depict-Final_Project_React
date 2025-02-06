import Brands from "./Brands";
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
    </div>
  );
};

export default Home;
