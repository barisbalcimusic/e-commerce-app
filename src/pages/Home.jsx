import BestRatedProducts from "../components/product/BestRatedProducts";
import Categories from "../components/product/Categories";

const Home = () => {
  return (
    <>
      <div className="categories-div">
        <h2>Categories</h2>
        <Categories />
      </div>
      <div className="best-rating-div">
        <h2>Best rated</h2>
        <BestRatedProducts />
      </div>
    </>
  );
};

export default Home;
