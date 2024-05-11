import BestRatedProducts from "../components/product/BestRatedProducts";
import Categories from "../components/product/Categories";
import { useSidebarContext } from "../contexts/SidebarContext";

const Home = () => {
  const { isSidebarOpened, handleSidebarClick } = useSidebarContext();

  return (
    <div
      className="home-container"
      onLoad={isSidebarOpened ? () => handleSidebarClick() : null}>
      <div className="categories-div">
        <h2>Categories</h2>
        <Categories />
      </div>
      <div className="best-rating-div">
        <h2>Best rated</h2>
        <BestRatedProducts />
      </div>
    </div>
  );
};

export default Home;
