import Categories from "../components/product/Categories";
import { useSidebarContext } from "../contexts/SidebarContext";
import HighlightedProducts from "../components/product/HighlightedProducts";

const Home = () => {
  const { isSidebarOpened, handleSidebarClick } = useSidebarContext();

  return (
    <div
      className="home-container"
      onLoad={isSidebarOpened ? () => handleSidebarClick() : null}
    >
      <div className="categories-div">
        <h2>Categories</h2>
        <Categories />
      </div>
      <div className="highlights-div">
        <h2>Discounted products</h2>
        <HighlightedProducts type="discounted" />
      </div>
      <div className="highlights-div">
        <h2>Bestseller - Top 5</h2>
        <HighlightedProducts type="bestseller" />
      </div>
      <div className="highlights-div">
        <h2>Best rated products</h2>
        <HighlightedProducts type="best-rated" />
      </div>
    </div>
  );
};

export default Home;
