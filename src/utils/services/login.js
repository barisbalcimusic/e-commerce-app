const login = async (email, password) => {
  try {
    if (!email || !password) {
      throw new Error("Email and password are required.");
    }

    const res = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });

    const data = await res.json();

    if (res.status === 500) {
      throw new Error("Server error.");
    } else if (!res.ok && res.status !== 500) {
      throw new Error(data.message || "Login failed.");
    }

    return data;
  } catch (error) {
    throw error;
  }
};

export default login;
