import axios from "axios";

export const getAllCart = async () => {
  let res = await axios({
    method: "get",
    url: "http://localhost:5000/cart",
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));
  return res;
};
export const increaseAmount2 = async (product) => {
  console.log("increase", product);
  const data = await axios
    .put(`http://localhost:5000/cart/${product.amount}`, product)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

export const getAitemById = async (id) => {
  let res = await axios({
    method: "get",
    url: `http://localhost:5000/cart/${id}`,
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
export const addAcart = async (cart) => {
  const data = await axios
    .post(`http://localhost:5000/cart`, cart)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log("error"));
  /*   return await axios.post(`http://localhost:5000/products`, data); */
};
export const deleteAcart = async (id) => {
  /*   fetch(`http://localhost:5000/products/${taskId}`, {
    method: "DELETE",
  }); */
  /*   const res = await axios.delete("http://localhost:5000/products", {
    data: { id },
  });
  return res.data.json; */
  await axios.delete(`http://localhost:5000/cart/${id}`).then((res) => {
    console.log(res);
  });
};
