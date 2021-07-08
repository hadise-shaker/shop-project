import axios from "axios";

export const getAllProducts = async () => {
  let res = await axios({
    method: "get",
    url: "http://localhost:5000/products",
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));
  return res;
};

export const getAProductById = async (id) => {
  let res = await axios({
    method: "get",
    url: `http://localhost:5000/products/${id}`,
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));
  return res;
};

/* export const deleteAproduct = async (id) => {
  await axios({
    method: "delete",
    url: `http://localhost:5000/products/${id}`,
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));
};
 */
export const deleteAproduct = async (id) => {
  /*   fetch(`http://localhost:5000/products/${taskId}`, {
    method: "DELETE",
  }); */
  /*   const res = await axios.delete("http://localhost:5000/products", {
    data: { id },
  });
  return res.data.json; */
  await axios.delete(`http://localhost:5000/products/${id}`).then((res) => {
    console.log(res);
  });
};
