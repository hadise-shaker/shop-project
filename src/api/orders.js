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
    }
    if (res.status === 500) {
    }

    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
