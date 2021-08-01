
import React, {useEffect,useState} from "react";
import CartTable from "../../components/Shop/CartTable"
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {setCartItems, setTotal,removeItem,decreaseAmount,increaseAmount} from "../../redux/actions/cart.reducer";
import {Table,TableBody,Modal,TableCell,TableContainer,TableHead,TableRow,Paper,Button,Avatar,TablePagination,makeStyles,withStyles} from '@material-ui/core';
import {getCart,getAitem,deletecart} from "../../redux/actions/cartActions"
import Header from "../../components/MainComponents/Header"
import { useHistory } from 'react-router-dom';
import Typography from "@material-ui/core/Typography"
import DeleteIcon from '@material-ui/icons/Delete';
import shoppingBasket from "../../assets/shopping-basket-2-512.png"
import EmptyCart from "../../assets/EmptyCart3.png"
import FullCart from "../../assets/EmptyCart4.png"
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
            return Number(total += cartItem.number)
        }, 0)
        dispatch(setCartItems(newCartItems))

        // Cart Total
        let newTotal = cart.reduce((total, cartItem) => {
          return total += Number(cartItem.number * cartItem.price)
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
const history = useHistory()
    return (
      <>
     {/*  <Header/> */}
        <section className="cart-items section">
         
            <Typography component="h4" variant="h5" align="center">
           
          
           {/*  <img src={shoppingBasket} style={{width:"100px",marginTop:"50px"}} /> */}
            <br></br>

            {cart.length===0?<><img style={{width:"30%",margin:"auto"}} src={EmptyCart}/>  <Typography component="h4" variant="h5" align="center"> سبد خرید شما خالی است !</Typography> </>
            
            :
            <><img style={{width:"15%",margin:"auto"}} src={FullCart}/>  <Typography component="h4" variant="h5" align="center"> سبد خرید شما !</Typography> </>
            }

              
              </Typography>
             
         {cart.length>0&&
         <>
         <Paper style={{width:"100%",margin:"auto"}} square="true" >


<CartTable cart={cart} page={page} rowsPerPage={rowsPerPage}/>
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
                
                <div>
                <Button  onClick={()=>history.push("/finalShop")} disabled={cart.length===0} style={{float:"left"}} variant="contained" color="primary">نهایی کردن سبد خرید</Button>
                  <h2 >  جمع : {(Number(total)).toLocaleString()} تومان</h2>
                </div>

           
{/*             {
                user
                    ?
                    <Link to="/checkout" className="btn btn-primary btn-block">checkout</Link>
                    :
                    <Link to="/login" className="btn btn-primary btn-block">login</Link>
            } */}
            </>
          } 
        </section>
        


        </>
    )
}


export default Cart

