import React,{useState} from 'react'
import {Input,TextField,Button,Grid, Container, Paper, Card,Typography} from "@material-ui/core"
import moment from "moment";
import jMoment from "moment-jalaali";
import JalaliUtils from "@date-io/jalaali";
import { useDispatch, useSelector } from 'react-redux';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {setNewOrder,addNewOrder} from "../redux/actions/userActions"
import { Redirect, useHistory } from "react-router-dom"
jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });
const useStyles=makeStyles((theme)=>({

    paper: {
        margin: "10% auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // minWidth:"300px",
        padding:theme.spacing(6),
        width:"70%"
      },

}))
const FinalShop = () => {
    const classes=useStyles()
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState("")
    const [selectedDate, handleDateChange] = useState(moment());
    const [isRedirect, setIsRedirect] = useState(false)
    const dispatch=useDispatch();
    const cartItems = useSelector((state) => state.cart.cart)
console.log("cartItems",cartItems);
    const productSum = cartItems.map(item => item.price * item.number)
    // console.log(productSum);
    const total = productSum.reduce((sum, item) => (sum += item))
    const handleNewOrder = (e) => {

        e.preventDefault();
        const fullName = `${name}  ${lastName}`
        const orderTime = new Date().toLocaleDateString('fa-IR')
        // const regex = RegExp(
        //     /$d{9}\09^/
        // );
        const regex = RegExp(
            /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
        );
        if (name && lastName && address && phone && selectedDate) {
            if (!regex.test(phone)) {
                alert("لطفا شماره تماس را  به درستی وارد کنید");
            } else {
                // console.log(selectedDate.format("jYYYY/jMM/jDD"));

                let newOrder = { username: fullName, address: address, phone: phone, ordertime: orderTime, handleTime: selectedDate.format("jYYYY/jMM/jDD"), products: cartItems, total: total, isDelivered: false };
                dispatch(setNewOrder(newOrder));
                setIsRedirect(true)
               
              /*   dispatch(removeItem(row.id)) */
                /* setShouldRedirect(true) */
                //   history.push(`/shaparak/payment`)
                // console.log(newOrder);

                // dispatch(addNewProduct(newProduct))
                // handleClose();
            }


        } else {
            alert("لطفا تمام اطلاعات را وارد کنید");
            // console.error("err")
        }
    };

    return (
        <MuiPickersUtilsProvider utils={JalaliUtils} locale="fa">
            <Container component="main" maxWidth="md">
                <Card className={classes.paper}>
                <Typography component="h1" variant="h5" /* className={classes.title} */>
             نهایی کردن خرید
          </Typography>
                
        <div /* style={{width:"50%",margin:"auto"}} */>
        <form style={{padding:"30px"}} onSubmit={(e)=>e.preventDefault()}>
        <Grid container column spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
                <TextField  label="نام" fullWidth
                
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
               
      </Grid>
        <Grid item xs={12} sm={6} md={6}>
       

        <TextField  label="نام خانوادگی" fullWidth                                         value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}/>



               
      </Grid>
        <Grid item xs={12} sm={6} md={6}>
        <TextField
         label="ادرس"                                     
        multiline
         required
          rows={1}
          rowsMax={3} 
          fullWidth
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          />
               
      </Grid>
        <Grid item xs={12} sm={6} md={6}>
        <TextField label="تلفن همراه"fullWidth                                         value={phone}
                                        onChange={(e) => setPhone(e.target.value)}/>
               
      </Grid>
        <Grid item xs={12} sm={6} md={6}>
        <DatePicker
        clearable
        okLabel="تأیید"
        cancelLabel="لغو"
        clearLabel="پاک کردن"
        labelFunc={date => (date ? date.format("jYYYY/jMM/jDD") : "")}
        value={selectedDate}
        onChange={handleDateChange}
        fullWidth
      />
               
      </Grid>




      </Grid>
      <Button variant="contained" color="primary"  onClick={handleNewOrder}>

پرداخت
</Button>
        </form>
        </div>
        </Card>
        </Container>
        {isRedirect&&<Redirect to='/shaparak/payment' />}
        </MuiPickersUtilsProvider>
    )
}

export default FinalShop