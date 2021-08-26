import React, {useEffect,useState} from "react";
import CartTable from "../../components/Shop/CartTable"
import {useDispatch, useSelector} from "react-redux";
import {setCartItems, setTotal} from "../../redux/actions/cart.reducer";
import {Paper,Button,TablePagination} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Typography from "@material-ui/core/Typography"
import EmptyCart from "../../assets/img/EmptyCart3.png"
import FullCart from "../../assets/img/EmptyCart4.png"
function Cart() {
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
const history = useHistory()
    return (
      <>
        <section className="cart-items section">
         
            <Typography component="h4" variant="h5" align="center">
              <br></br>

              {cart.length===0?<><img style={{width:"30%",margin:"auto"}} src={EmptyCart}/>  <Typography component="h4" variant="h5" align="center"> سبد خرید شما خالی است !</Typography> </>
            
                :
              <>
              <img style={{width:"15%",margin:"auto"}} src={FullCart}/> 
               <Typography component="h4" variant="h5" align="center"> 
               سبد خرید شما !
               </Typography>
              </>
              }

              
            </Typography>
             
         {cart.length>0&&
         <>
         <Paper style={{width:"100%",margin:"auto"}} square="true" >


            <CartTable cart={cart} page={page} rowsPerPage={rowsPerPage}/>

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
            <Button  onClick={()=>history.push("/finalShop")} disabled={cart.length===0} style={{float:"left"}} variant="contained" color="primary">
              نهایی کردن سبد خرید
            </Button>
              <h2 >  جمع : {(Number(total)).toLocaleString()} تومان</h2>
            </div>
            </>
          } 
        </section>
        


        </>
    )
}


export default Cart

