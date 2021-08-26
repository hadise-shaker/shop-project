import React,{useEffect,useState} from 'react'
import { useDispatch } from "react-redux";
import {Orders}from "../../redux/actions/userActions"
import {Table,TableBody,TableCell,TableHead,TableRow,Button,TablePagination,makeStyles,withStyles} from '@material-ui/core';
const UserDeliveredOrder = ({orders,handleModal}) => {
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
      const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };
    return (

<>
      <Table className={classes.table} aria-label="simple table">
        <TableHead >
          <TableRow  className={classes.root}>
            <TableCell align="center" >نام کاربر</TableCell>
            <TableCell align="center" >مجموع مبلغ</TableCell>
            <TableCell align="center">زمان ثبت سفارش </TableCell>
            <TableCell align="center">بررسی </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
             {orders?.slice(page*rowsPerPage,page*rowsPerPage+rowsPerPage).map((order) => (
            <StyledTableRow key={order.id}>
                <TableCell align="center">
                  {order.username} 
              </TableCell>
              <TableCell align="center">
                {order.products.map((product)=>
                   Number(product.price*product.number) 
                ).toLocaleString()}
                  تومان  
              </TableCell>
              <TableCell align="center">{order.ordertime}</TableCell>
              
              <TableCell align="center">
                <Button variant="contained" color="primary" onClick={()=>handleModal(order)}>بررسی سفارش</Button>
              </TableCell>

              

            </StyledTableRow>
           
          ))}
           </TableBody>
        
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10,25,{ label: 'همه', value: -1 }]}
        component="div"
        count={orders?.length}
        rowsPerPage={rowsPerPage}
        className={classes.pagination}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        dir="rtl"
        labelRowsPerPage='تعداد سطر های هر صفحه'
      />
      </>

    )
}

export default UserDeliveredOrder
