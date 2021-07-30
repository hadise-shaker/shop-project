import React,{useState,useEffect} from 'react'
import {addProduct,getProducts,deleteproduct,editItem,editProduct}from "../../redux/actions/productActions"
import {Box,Button,Container,Grid,Typography} from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import dargah from "../../assets/dargah.jpg"
import { useDispatch, useSelector } from "react-redux";
import { useHistory,Redirect } from "react-router-dom";
import {addNewOrder} from "../../redux/actions/userActions"
import clearAllCart from "../../redux/actions/cart.reducer"
import {clearCart} from"../../redux/actions/cartActions"
const useStyles = makeStyles({
    container:{
        margin:"50px auto"
    },
    img:{
        width:"100%",
       /*  height:"400px" */
    }
    
})

const Payment = () => {
    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(getProducts());

      }, []); 

    const [fail, setFail] = useState(false)
    const [success, setSuccess] = useState(false)
    const products = useSelector((state) => state.allProducts.products);
    console.log("products",products);
    const SetOrder = useSelector((state)=>state.userOrders.newOrder)
    const ordersId=SetOrder?.products?.map((item)=>item.id)
    console.log("id",ordersId);
    console.log("SetOrder",SetOrder);
    let FindProdInProducts=products?.filter((prod)=>prod.id==ordersId)
    console.log("FindProdInProducts",FindProdInProducts);
    const { image, title, price,number,category,description} = FindProdInProducts 
    console.log("title",title);
/*     function getArraysIntersection(a1,a2){
        return  a1.filter(function(n) { return a2.indexOf(n) !== -1;});
    }
    let final=getArraysIntersection(products, ordersId); */
   
/*     const { image, title, price,number,category,description} = FindProdInProducts */
/*     let final3=FindProdInProducts.map((item)=>item.number) */
/*     let updatedProductObj={...FindProdInProducts, title:title,image:image,category:category,description:description,price:price,number:number-1};
    console.log("updatedProductObj",updatedProductObj); */



    const successPayment=()=>{
        dispatch(addNewOrder(SetOrder))
/*         localStorage.clear() */
        localStorage.removeItem("cart")
       /*  dispatch(clearAllCart()) */
        
        window.location.reload()
setSuccess(true)
    }
    const failedPayment=()=>{
        setFail(true)
    }
    const classes=useStyles()
    return (
        <Container maxWidth="lg" className={classes.container}>
            <Grid container>
                    <Grid xs={12}>
                        <img src={dargah} alt="درگاه پرداخت"  className={classes.img}/>
                           
                    </Grid>
                    <Grid xs={12}>
                           <Button variant="contained" color="primary" onClick={successPayment}> پرداخت  </Button>

                           <Button variant="contained" color="secondary" onClick={failedPayment}> انصراف </Button>
                    </Grid>
            </Grid>
        {fail&&<Redirect to="/payment/failed"/>}
        {success&&<Redirect to="/payment/success"/>}
        </Container>
    )
}

export default Payment
