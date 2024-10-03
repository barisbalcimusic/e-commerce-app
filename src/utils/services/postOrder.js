const postOrder = async (formData) => {
  try {
    const res = await fetch("http://localhost:3000/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      credentials: "include",
    });
  } catch (error) {
    throw error;
  }
};

export default postOrder;
