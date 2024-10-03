const logout = async () => {
  try {
    const res = await fetch("http://localhost:3000/logout", {
      method: "POST",
      credentials: "include",
    });

    if (!res.ok) throw new Error("Fetch error");

    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export default logout;
