import SignIn from "../Header/SignIn";
import Brands from "./Brands";
import Cards from "./Cards";
import Categories from "./Categories";
import InfinitSlider from "./InfiniteSlider";
import OrangeBanner from "./OrangeBanner";
import SiteTitle from "./SiteTitle";

const Home = () => {
  window.scrollTo(0, 0);
  return (
    <div className="w-full !p-4 base-container flex flex-col">
      <Categories />
      <div className="w-full flex flex-col lg:flex-row gap-4">
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
