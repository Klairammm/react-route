const BASE_URL = "https://dummyjson.com/";

//funzione asincrona
const GET = async (endpoint) => {
  const res = await fetch(BASE_URL + endpoint);
  return res.json();
};

export { GET };
