import React,{useState,useEffect} from 'react'
import {Box,Button,Container,Grid,Typography} from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import dargah from "../../assets/img/dargah.jpg"
import { useDispatch, useSelector } from "react-redux";
import { useHistory,Redirect } from "react-router-dom";
import {addNewOrder} from "../../redux/actions/userActions"
import clearAllCart from "../../redux/actions/cart.reducer"
const useStyles = makeStyles({
    container:{
        margin:"50px auto"
    },
    img:{
        width:"100%",
    }
    
})

const Payment = () => {
    const [fail, setFail] = useState(false)
    const [success, setSuccess] = useState(false)
    const SetOrder = useSelector((state)=>state.userOrders.newOrder)
    const dispatch=useDispatch()
    const successPayment=()=>{
        dispatch(addNewOrder(SetOrder))
/*         localStorage.clear() */
        localStorage.removeItem("cart")
       /*  dispatch(clearAllCart()) */
        
        /* window.location.reload() */
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
