import React,{useEffect,useState,useContext} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {Orders}from "../redux/actions/userActions"
import DeleteIcon from '@material-ui/icons/Delete';
import OrdersModal from "./OrdersModal"
import {Table,TableBody,Modal,TableCell,TableContainer,TableHead,TableRow,Paper,Button,Avatar,TablePagination,makeStyles,withStyles} from '@material-ui/core';
const UserDeliveredOrder = () => {
    const orders = useSelector((state) => state.userOrders);
    console.log(useSelector((state) => state.userOrders));

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Orders())

      }, [])
    const useStyles = makeStyles((theme)=>({
        table: {
          minWidth: 650,
          width:"50%",
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
            <h1>UserOrder</h1>
            <Paper square="true" >
         <TablePagination
        rowsPerPageOptions={[5, 10, 15,{ label: 'All', value: -1 }]}
        component="div"
        count={orders?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        dir="rtl"
        /* style={{margin:"auto"}} */
      />
      <Table className={classes.table} aria-label="simple table">
        <TableHead >
          <TableRow  className={classes.root}>
          <TableCell align="center" /* className={classes.root} */>نام کاربر</TableCell>
            <TableCell align="center" /* className={classes.root} */>مجموع مبلغ</TableCell>
            <TableCell align="center">زمان ثبت سفارش </TableCell>
            <TableCell align="center">بررسی </TableCell>
{/*             <TableCell align="right">description :) &nbsp;</TableCell>
            <TableCell align="right">category :) &nbsp;</TableCell>
            <TableCell align="right">edit :) &nbsp;</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
             {orders?.slice(page*rowsPerPage,page*rowsPerPage+rowsPerPage).map((order) => (
            <StyledTableRow key={order.id}>
                <TableCell align="center">
                  {order.username} 
              </TableCell>
              <TableCell align="center">
{/*                 {order.products.map((product)=>
                    product.price*product.number
                )} */}
              </TableCell>
              <TableCell align="center">{order.ordertime}</TableCell>
              
              <TableCell align="center">
                <Button variant="contained" color="primary" onClick={()=>handleModal(order)}>بررسی سفارش</Button>
              </TableCell>

              

            </StyledTableRow>
           
          ))}
           </TableBody>
        
      </Table>
{open&&<OrdersModal openModal={open} handleClose={handleClose} selectedProduct={selectedProduct} isDeliver={false}/>}
        </Paper>
        </div>
    )
}

export default UserDeliveredOrder
