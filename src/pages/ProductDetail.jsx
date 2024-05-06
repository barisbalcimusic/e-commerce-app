import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  return <div>{id ? `bu sayfa ${id} idli ürünü gösteriyor.` : "loading"}</div>;
};

export default ProductDetail;
