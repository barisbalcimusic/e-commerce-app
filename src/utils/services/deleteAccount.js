export const deleteAccount = async (id) => {
  try {
    const res = await fetch("http://localhost:3000/users/user", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
      credentials: "include",
    });

    if (!res.ok) {
      throw new Error("Failed to delete account");
    }

    const data = res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
