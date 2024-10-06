const getProductsByOrder = async (orderId) => {
  try {
    const res = await fetch(`http://localhost:3000/orders/${orderId}`);

    if (!res.ok) throw new Error("Fetch error");

    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export default getProductsByOrder;
