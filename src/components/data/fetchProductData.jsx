const fetchProductData = async () => {
  try {
    const res = await fetch("/db/products.json");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchProductData;
