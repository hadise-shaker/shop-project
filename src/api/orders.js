import axios from "axios";
// import {toast} from "react-toastify"
/*
 * GET api for get all orders
 */

export const getAllOrders = async () => {
  let res = await axios({
    method: "get",
    url: "http://localhost:5000/users",
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));

  return res;
};

/*
 * PUT api for change orderStatus
 */

/* export const putStatus=async (id,updatedObj) =>{
let res=await axios({
  method:"put",
  url: `http://localhost:5000/orders/${id}`,
  headers: { "content-type": "application/json" },
  data:updatedObj,
})
return res
} */

/*
 *  POST api for add a new Order
 */

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
