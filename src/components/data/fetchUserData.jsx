const fetchUserData = async () => {
  try {
    const res = await fetch("./authorisation.json");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchUserData;
