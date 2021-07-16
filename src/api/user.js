import axios from "axios";

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
