const fetchUserData = async () => {
  try {
    const res = await fetch("/db/users.json");

    if (!res.ok) throw new Error("Fetch error");

    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export default fetchUserData;
