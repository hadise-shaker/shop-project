import React,{useEffect,useState,useContext} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {WaitingOrders}from "../../redux/actions/userActions"
import OrdersModal from "../../components/Modals/OrdersModal"
import UserOrderTables from "../../components/AdminManagment/UserOrderTables"
import {updateOrders}from "../../api/user"
const UserDeliveredOrder = () => {
    const orders = useSelector((state) => state.userOrders.orders);
    console.log(useSelector((state) => state.userOrders));

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(WaitingOrders())

      }, [])
      const [selectedProduct, setSelectedProduct] = useState({
        username:"",
        address:"",
        handleTime:"",
        ordertime:"",
        phone:"",
        products: {},
        id:"",
      });

    const [open, setOpen] = useState(false)

      const handleModal =(order)=>{
        setSelectedProduct({
            username:order.username,
            address:order.address,
            handleTime:order.handleTime,
            ordertime:order.ordertime,
            phone:order.phone,
            products:order.products,
            id:order.id,
        })
        setOpen(true)
      }
      const handleClose = () => {
        setOpen(false);
      };
      const SetToOrders=()=>{
        let time= new Date().toLocaleString();
        let userInfo = {
            "id":selectedProduct.id,
            "handleTime":time,
            "isDelivered":true,
          }
          updateOrders(userInfo).then(dispatch(WaitingOrders()))
          setOpen(false);
      }
    return (
        <div style={{marginTop:"20px"}}>

          <UserOrderTables orders={orders} handleModal={handleModal}/>
          {open&&<OrdersModal openModal={open} handleClose={handleClose} selectedProduct={selectedProduct} isDeliver={true} action={SetToOrders}/>}
        </div>
    )
}

export default UserDeliveredOrder
