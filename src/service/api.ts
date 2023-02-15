import axios from "axios";

export async function getProducts() {
  const { data } = await axios.get("http://localhost:3000/data");
  return data.nodes
};