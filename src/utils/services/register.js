const register = async (email, password) => {
  try {
    if (!email || !password) {
      throw new Error("Email and password are required.");
    }
    const res = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const errorData = await res.json();

      throw new Error(errorData.message || "Registration failed.");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export default register;
