import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import { makeStyles } from '@material-ui/core/styles';
import UserDeliveredOrder from "./UserDeliveredOrder"
import UserWaitingOrder from "./UserWaitingOrder"
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
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

    const [value, setValue] = React.useState('deliveredOrders');

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
