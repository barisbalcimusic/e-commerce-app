const registerUser = async (email, password) => {
  try {
    const res = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });

    if (!res.ok) throw new Error("Fetch error");

    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export default registerUser;
