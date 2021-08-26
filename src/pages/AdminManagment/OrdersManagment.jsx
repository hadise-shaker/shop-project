import React,{useState} from 'react';
import {Radio,RadioGroup,FormControlLabel,FormControl} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import UserDeliveredOrder from "./UserDeliveredOrder"
import UserWaitingOrder from "./UserWaitingOrder"
const useStyles = makeStyles((theme) => ({
    root: {
            display: "flex",
            flexWrap: "wrap",
            flexDirection:"row",
    },
    container:{
        margin:"auto",
        marginBottom:"20px",
    },
    container1:{
        margin:"auto",
        /* backgroundColor:"pink", */
        textAlign:"center",
        alignItems:"center",
        marginTop:"20px",
        
    }
  }));
const OrdersManagment = () => {
    const classes = useStyles();

    const [value, setValue] = useState('deliveredOrders');

    const handleChange = (event) => {
      setValue(event.target.value);
    };
    return (
        <div className={classes.container1}>

            <FormControl component="fieldset" className={classes.container}>
                <RadioGroup value={value} onChange={handleChange} className={classes.root}>
                    <FormControlLabel value="deliveredOrders" control={<Radio />} label="سفارش های تحویل  شده" />
                    <FormControlLabel value="waitingOrders" control={<Radio />} label="سفارش های در انتظار ارسال" />
                </RadioGroup>
            </FormControl>
      {value==='deliveredOrders'&&<UserDeliveredOrder/>}
      {value==="waitingOrders"&&<UserWaitingOrder/>}
        </div>
    )
}

export default OrdersManagment
