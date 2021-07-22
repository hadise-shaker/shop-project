
import React, {useEffect,useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import EmptyCart from "../components/EmptyCart";
import {setCartItems, setTotal,removeItem,decreaseAmount,increaseAmount} from "../redux/actions/cart.reducer";
import {Table,TableBody,Modal,TableCell,TableContainer,TableHead,TableRow,Paper,Button,Avatar,TablePagination,makeStyles,withStyles} from '@material-ui/core';
import {getCart,getAitem,deletecart} from "../redux/actions/cartActions"
import Header from "../components/Header"
import DeleteIcon from '@material-ui/icons/Delete';
function Cart() {
  const useStyles = makeStyles((theme)=>({
    table: {
      minWidth: 650,
      width:"100%",
      margin:"auto",
    },
    root:{
      fontSize:"30px",
      backgroundColor:"orange"
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
     /*  "&:nth-of-type(odd)": {
        backgroundColor: "#c6cffe",
      },
      "&:nth-of-type(even)": {
        backgroundColor: "#e0e4fa",
      }, */
      backgroundColor:"white"
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
    const dispatch = useDispatch()
/*     const user = useSelector(state => state.user.user) */
    const cart = useSelector(state => state.cart.cart)
    const total = useSelector(state => state.cart.total)
console.log("cart",cart);
    useEffect(() => {
        // Localstorage
        localStorage.setItem("cart", JSON.stringify(cart))

        // Cart Items
        let newCartItems = cart.reduce((total, cartItem) => {
            return (total += cartItem.amount)
        }, 0)
        dispatch(setCartItems(newCartItems))

        // Cart Total
        let newTotal = cart.reduce((total, cartItem) => {
          return total += (cartItem.amount * cartItem.price)
      }, 0)

      newTotal = parseFloat(newTotal.toFixed(2))
      dispatch(setTotal(newTotal))

    }, [cart])
/* 
    const removeItemFromCart = () => {
      if (amount === 1) {
          dispatch(removeItem(id))
      } else {
          dispatch(decreaseAmount(id, amount))
      }
  } */

/*     if (cart.length === 0) return <EmptyCart/> */

    return (
      <>
      <Header/>
        <section className="cart-items section">
            <h2>your cart</h2>
<Paper style={{width:"100%",margin:"auto"}} square="true" >


               <Table className={classes.table} aria-label="simple table">
                 <TableHead >
                   <TableRow  className={classes.root}>
                     <TableCell align="center" /* className={classes.root} */>نام کالا :)</TableCell>
                     <TableCell align="center">قیمت </TableCell>
                     <TableCell align="center">تعداد </TableCell>
                     <TableCell align="center">حذف </TableCell>
         {/*             <TableCell align="right">description :) &nbsp;</TableCell>
                     <TableCell align="right">category :) &nbsp;</TableCell>
                     <TableCell align="right">edit :) &nbsp;</TableCell> */}
                   </TableRow>
                 </TableHead>
                 <TableBody>
                      {cart?.slice(page*rowsPerPage,page*rowsPerPage+rowsPerPage).map((row) => (
                     <StyledTableRow key={row.id}>
{/*                          <TableCell align="center">
                         <Avatar alt="Remy Sharp" src={row.image} className={classes.large} />
                       </TableCell> */}
                       <TableCell align="center"/* component="th" scope="row" */>
                         {row.title}
                       </TableCell>
         {/*               <TableCell align="center">{row.price}</TableCell>
                       <TableCell align="center">{row.description}</TableCell> */}
                       <TableCell align="center">{row.price}</TableCell>
                       <TableCell align="center">{row.amount}</TableCell>
                       
                       <TableCell align="center">
                         
                         <Button style={{cursor:"pointer"}}onClick={() => dispatch(removeItem(row.id))} ><DeleteIcon/></Button>
         
                       
                       
                       </TableCell>
{/*                        <TableCell align="center">
                         
                         <Button style={{cursor:"pointer"}}  onClick={()=>action(row)}><EditIcon/></Button>
                       
                        
                       </TableCell> */}
                       
         
                     </StyledTableRow>
                    
                   ))}
                    </TableBody>
                 
               </Table>
         {/*       <Modal
                 open={open}
                 onClose={handleClose}
                 aria-labelledby="simple-modal-title"
                 aria-describedby="simple-modal-description" 
                 children={<EditProduct handleClose={handleClose} action={handleEditSubmit}/> }
               >
                
               </Modal> */}
                                <TablePagination
                 rowsPerPageOptions={[5, 10, 15,{ label: 'All', value: -1 }]}
                 component="div"
                 count={cart?.length}
                 rowsPerPage={rowsPerPage}
                 page={page}
                 onChangePage={handleChangePage}
                 onChangeRowsPerPage={handleChangeRowsPerPage}
                 dir="rtl"
                 style={{margin:"auto"}}
                 labelRowsPerPage='تعداد سطر های هر صفحه'
               />
                 </Paper>
                  )
                
                
                  <Button  style={{float:"left"}} variant="contained" color="primary">نهایی کردن سبد خرید</Button>
            <h2>جمع {total}</h2>
{/*             {
                user
                    ?
                    <Link to="/checkout" className="btn btn-primary btn-block">checkout</Link>
                    :
                    <Link to="/login" className="btn btn-primary btn-block">login</Link>
            } */}
        </section>
        </>
    )
}


export default Cart

