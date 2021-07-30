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

export const getCategoryList = async (category) => {
  let res = await axios({
    method: "get",
    url: `"http://localhost:5000/products?category=${category}&start=0&_limit=6`,
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));
  return res;
  // console.log(res.data);
  // setData(res.data)
};
export const getChangeList = async (page) => {
  let res = await axios({
    method: "get",
    url: `"http://localhost:5000/products?page[number]=${page}`,
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));
  return res;
  // console.log(res.data);
  // setData(res.data)
};
/* export const updateProduct = async (id, updateProduct) => {
  try {
    let res = await axiosConfig({
      method: "put",
      url: `/products/${id}`,
      headers: { "content-type": "application/json" },
      data: updateProduct,
    });
    return res;
  } catch (err) {
    throw err;
  }
  // console.log("res put api",res);
}; */

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
    toast.error("404 Not Found");
  }
  if (res.status === 500) {
    toast.error("Network");
  }
  if (res.status === 201) {
    toast.success("Successful");
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
