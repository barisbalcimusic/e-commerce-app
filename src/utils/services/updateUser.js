export const updateUser = async (fieldToEdit, fieldStates, userId) => {
  let value =
    fieldToEdit === "firstname"
      ? fieldStates.firstname
      : fieldToEdit === "lastname"
      ? fieldStates.lastname
      : fieldToEdit === "password"
      ? fieldStates.password
      : null;

  try {
    const res = await fetch("http://localhost:3000/users/user", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fieldToEdit, value, userId }),
      credentials: "include",
    });

    if (!res.ok) throw new Error(`Failed to change ${fieldToUpdate}`);

    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
