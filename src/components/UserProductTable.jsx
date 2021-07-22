import React,{useEffect,useState,useContext} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {Orders}from "../redux/actions/userActions"
import DeleteIcon from '@material-ui/icons/Delete';
import OrdersModal from "../components/OrdersModal"
import {Table,TableBody,Modal,TableCell,TableContainer,TableHead,TableRow,Paper,Button,Avatar,TablePagination,makeStyles,withStyles} from '@material-ui/core';
const UserProductTable = ({products}) => {
/*     const orders = useSelector((state) => state.userOrders); */
    console.log("user products",products);

/*     const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Orders())

      }, []) */
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
        large: {
            width: theme.spacing(8),
            height: theme.spacing(8),
          },
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
      const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };
    return (
        <div>
            <h1>UserOrder</h1>
            <Paper  square="true" >

      <Table className={classes.table} aria-label="simple table">
        <TableHead >
          <TableRow  className={classes.root}>
          <TableCell align="center" >نام کاربر</TableCell>
            <TableCell align="center" >مجموع مبلغ</TableCell>
            <TableCell align="center">زمان ثبت سفارش </TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
             {products?.slice(page*rowsPerPage,page*rowsPerPage+rowsPerPage).map((order) => (
            <StyledTableRow key={order.id}>
                <TableCell align="center">
                  {order.producttitle} 
              </TableCell>
              <TableCell align="center">
                 {order.price}
              </TableCell>
              <TableCell align="center">
                 {order.number}
              </TableCell>


              

            </StyledTableRow>
           
          ))}
           </TableBody>
           <TablePagination
        rowsPerPageOptions={[5, 10, 15,{ label: 'کل', value: -1 }]}
        component="div"
        count={products?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        dir="rtl"
        style={{margin:"auto"}}
        labelRowsPerPage='تعداد سطر های هر صفحه'
      />
      </Table>
        </Paper>
        </div>
    )
}

export default UserProductTable
