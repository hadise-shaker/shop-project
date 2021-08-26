import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {Orders}from "../../redux/actions/userActions"
import OrdersModal from "../../components/Modals/OrdersModal"
import UserOrderTables from "../../components/AdminManagment/UserOrderTables"
const UserDeliveredOrder = () => {
    const orders = useSelector((state) => state.userOrders.orders);
    /* console.log("orders",orders); */

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Orders())

      }, [])
      const [selectedProduct, setSelectedProduct] = useState({
        username:"",
        address:"",
        handleTime:"",
        ordertime:"",
        phone:"",
        products: {},
      });

    const [open, setOpen] = useState(false)

    

      const handleModal =(order)=>{
        setSelectedProduct({
            username:order.username,
            address:order.address,
            handleTime:order.handleTime,
            ordertime:order.ordertime,
            phone:order.phone,
            products:order.products
        })
        setOpen(true)
      }
      const handleClose = () => {
        setOpen(false);
      };
    return (
        <div>
          <UserOrderTables orders={orders} handleModal={handleModal}/>
          {open&&<OrdersModal openModal={open} handleClose={handleClose} selectedProduct={selectedProduct} isDeliver={false}/>}
        </div>
    )
}

export default UserDeliveredOrder
