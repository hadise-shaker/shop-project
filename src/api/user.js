import axios from "axios";

export const getAllOrders = async () => {
  let res = await axios({
    method: "get",
    url: "http://localhost:5000/users",
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));

  return res;
};

export const addedOrder = async (newOrder) => {
  try {
    let res = await axios({
      method: "post",
      url: "http://localhost:5000/users",
      headers: { "content-type": "application/json" },
      data: newOrder,
    });

    if (res.status === 404) {
      // console.log("post data is ok");
      // return toast.error("Not found")
    }
    if (res.status === 500) {
      // return toast.error("Network error")
    }
    console.log("post api new order", res);
    return res;
  } catch (err) {
    //  console.log(err)
    throw err;
  }
};

export const getWaitingOrders = async () => {
  const data = await axios({
    method: "GET",
    url: "http://localhost:5000/users?isDelivered=false",
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));
  return data;
};

export const getDeliveredOrders = async () => {
  const data = await axios({
    method: "get",
    url: "http://localhost:5000/users?isDelivered=true",
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));
  return data;
};
export const updateOrders = async (userInfo) => {
  const data = await axios
    .patch(`http://localhost:5000/users/${userInfo.id}`, userInfo)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};
