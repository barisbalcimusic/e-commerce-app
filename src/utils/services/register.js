const register = async (firstName, lastName, email, password) => {
  try {
    if (!firstName || !lastName || !email || !password) {
      throw new Error("All fields are required.");
    }
    const res = await fetch("http://localhost:3000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, email, password }),
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
