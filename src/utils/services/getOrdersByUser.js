const getOrdersByUser = async (userId) => {
  try {
    const res = await fetch(`http://localhost:3000/orders/?userId=${userId}`);

    if (!res.ok) throw new Error("Fetch error");

    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export default getOrdersByUser;
