import axios from "axios";
import { toast } from "react-toastify";
export const getAllProducts = async () => {
  let res = await axios({
    method: "get",
    url: "http://localhost:5000/products",
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));
  return res;
};

export const update = async (id, product) => {
  const data = await axios
    .put(`http://localhost:5000/products/${id}`, product)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
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
export const addAproduct = async (product) => {
  let res = await axios({
    method: "post",
    url: `http://localhost:5000/products`,
    headers: { "content-type": "application/json" },
    data: product,
  });
  if (res.status === 404) {
    return toast.error("404 Not Found");
  }
  if (res.status === 500) {
    return toast.error("Network");
  }
  if (res.status === 201) {
    return toast.success("Successful");
  }

  return res;

  /*   return await axios.post(`http://localhost:5000/products`, data); */
};
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
