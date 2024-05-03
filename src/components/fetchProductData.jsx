const fetchProductData = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchProductData;
