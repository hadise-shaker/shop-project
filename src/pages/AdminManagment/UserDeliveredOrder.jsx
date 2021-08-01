import React,{useEffect,useState,useContext} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {Orders}from "../../redux/actions/userActions"
import OrdersModal from "../../components/Modals/OrdersModal"
import UserOrderTables from "../../components/AdminManagment/UserOrderTables"
import {Table,TableBody,TableCell,TableHead,TableRow,Paper,Button,Avatar,TablePagination,makeStyles,withStyles} from '@material-ui/core';
const UserDeliveredOrder = () => {
    const orders = useSelector((state) => state.userOrders.orders);
    console.log("orders",orders);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Orders())

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
      });

    const [open, setOpen] = useState(false)
      const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };
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
