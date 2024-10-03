const postOrder = async (id, total, order) => {
  try {
    const res = await fetch("http://localhost:3000/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, total, order }),
      credentials: "include",
    });

    if (!res.ok) {
      throw new Error("Failed to post order");
    }

    const data = res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export default postOrder;
