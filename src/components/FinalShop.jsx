import React,{useState} from 'react'
import {Input,TextField,Button,Grid, Container, Paper, Card,Typography} from "@material-ui/core"
import moment from "moment";
import jMoment from "moment-jalaali";
import JalaliUtils from "@date-io/jalaali";
import { useDispatch, useSelector } from 'react-redux';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {saveNewOrder,addNewOrder} from "../redux/actions/userActions"
import { Redirect, useHistory } from "react-router-dom"
import {toast} from "react-toastify"
import FillingForm from "../assets/Project_16-244.png"
jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });
const useStyles=makeStyles((theme)=>({

    paper: {
        margin: "10% auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
/*         padding:theme.spacing(6), */
        width:"70%",
        boxShadow:"0px -2px 13px 4px gray"
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
    const productSum = cartItems.map(item => Number(item.price * item.number))
    const total = productSum.reduce((sum, item) => (sum += item))
    const handleNewOrder = (e) => {

        e.preventDefault();
        const fullName = `${name}  ${lastName}`
        const orderTime = new Date().toLocaleDateString('fa-IR')
        const regex = RegExp(
            '^(\\+98|0)?9\\d{9}$'
        );
        if (name && lastName && address && phone && selectedDate) {
            if (!regex.test(phone)) {
                toast.error("لطفا شماره تماس را  به درستی وارد کنید");
            } else {

                let savedOrder = { username: fullName, address: address, phone: phone, ordertime: orderTime, handleTime: selectedDate.format("jYYYY/jMM/jDD"), products: cartItems, total: total, isDelivered: false };
                dispatch(saveNewOrder(savedOrder));
                toast.error("اطلاعات شما ثبت شد");
                setIsRedirect(true)
            }


        } else {
           toast.error("اطلاعات را تکمیل نمایید");
        }
    };

    return (
        <MuiPickersUtilsProvider utils={JalaliUtils} locale="fa">
            <Container component="main" maxWidth="md">

            <Card className={classes.paper}>
{/*              <Grid item xs={12} md={6}> */}
                <img style={{width:"60%",marginTop:"-20px",marginBottom:"-10px"}} src={FillingForm} alt=""/>
{/*              </Grid> */}
                <Typography component="h1" variant="h5" /* className={classes.title} */>

             نهایی کردن خرید
          </Typography>

        <div /* style={{width:"50%",margin:"auto"}} */>
        <form style={{padding:"30px"}} onSubmit={(e)=>e.preventDefault()}>
        <Grid container column spacing={2}>

        <Grid item xs={12} sm={6} md={6}>
                <TextField  label="نام" fullWidth
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
               
      </Grid>
        <Grid item xs={12} sm={6} md={6}>
       

        <TextField  label="نام خانوادگی" fullWidth          required                               value={lastName}
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
        <TextField label="تلفن همراه (جهت هماهنگی ارسال سفارش)"fullWidth             required                            value={phone}
                                        onChange={(e) => setPhone(e.target.value)}/>
               
      </Grid>
        <Grid item xs={12} sm={6} md={6}>
        <DatePicker
        clearable
        label="تاریخ تحویل"
        okLabel="تأیید"
        cancelLabel="لغو"
        clearLabel="پاک کردن"
        labelFunc={date => (date ? date.format("jYYYY/jMM/jDD") : "")}
        value={selectedDate}
        onChange={handleDateChange}
        fullWidth
        required
      />
               
      </Grid>



      <Grid item xs={12} sm={6} md={6} spacing={3}>
      <Button variant="contained" color="primary" fullWidth  onClick={handleNewOrder}>

             پرداخت
      </Button>
      </Grid>
      </Grid>


        </form>
        </div>
        </Card>
        </Container>
        {isRedirect&&<Redirect to='/payment' />}
        </MuiPickersUtilsProvider>
    )
}

export default FinalShop