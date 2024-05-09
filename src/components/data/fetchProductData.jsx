const fetchProductData = async () => {
  try {
    const res = await fetch("http://localhost:3000/products");
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchProductData;
