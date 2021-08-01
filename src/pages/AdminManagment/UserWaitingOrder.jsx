import React,{useEffect,useState,useContext} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {WaitingOrders,DeleteWaitingOrder}from "../../redux/actions/userActions"
import DeleteIcon from '@material-ui/icons/Delete';
import {Orders}from "../../redux/actions/userActions"
import OrdersModal from "../../components/Modals/OrdersModal"
import UserOrderTables from "../../components/AdminManagment/UserOrderTables"
import {updateOrders}from "../../api/user"
import {Table,TableBody,Modal,TableCell,TableContainer,TableHead,TableRow,Paper,Button,Avatar,TablePagination,makeStyles,withStyles} from '@material-ui/core';
const UserDeliveredOrder = () => {
    const orders = useSelector((state) => state.userOrders.orders);
    console.log(useSelector((state) => state.userOrders));

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(WaitingOrders())

      }, [])
    const useStyles = makeStyles((theme)=>({
        table: {
          minWidth: 650,
          width:"80%",
          margin:"auto",
        },
        root:{
          fontSize:"30px",
          backgroundColor:"#6980fc"
        },
/*         large: {
            width: theme.spacing(8),
            height: theme.spacing(8),
          }, */
          pagination:{
            width:"35%"
          }
      })
      );
      const StyledTableRow = withStyles((theme) => ({
        root: {
          fontSize:"36px",
          "&:nth-of-type(odd)": {
            backgroundColor: "#c6cffe",
          },
          "&:nth-of-type(even)": {
            backgroundColor: "#e0e4fa",
          },
        },
      }))(TableRow);
      
      const classes = useStyles();
      const [page, setPage] = useState(0);
      const [rowsPerPage, setRowsPerPage] = useState(5);
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
/*           dispatch(DeleteWaitingOrder(userInfo)).then(dispatch(WaitingOrders())) */
          updateOrders(userInfo).then(dispatch(WaitingOrders()))
          setOpen(false);
      }
    return (
        <div style={{marginTop:"20px"}}>
{/*             <Paper square="true" > */}

    <UserOrderTables orders={orders} handleModal={handleModal}/>
{open&&<OrdersModal openModal={open} handleClose={handleClose} selectedProduct={selectedProduct} isDeliver={true} action={SetToOrders}/>}
{/*         </Paper> */}
        </div>
    )
}

export default UserDeliveredOrder
