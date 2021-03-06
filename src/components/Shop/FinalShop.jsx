import React,{useState} from 'react'
import {TextField,Button,Grid, Container, Paper, Card,Typography} from "@material-ui/core"
import moment from "moment";
import jMoment from "moment-jalaali";
import JalaliUtils from "@date-io/jalaali";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { makeStyles } from '@material-ui/core/styles';
import {saveNewOrder} from "../../redux/actions/userActions"
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom"
import {toast} from "react-toastify"
import FillingForm from "../../assets/img/Project_16-244.png"
jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });
const useStyles=makeStyles((theme)=>({

    paper: {
        margin: "10% auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width:"70%",
        boxShadow:"0px -2px 13px 4px gray"
      },
      img:{
        width:"60%",
        marginTop:"-20px",
        marginBottom:"-10px"
      },
      form:{
        padding:"30px"
      }

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
    /* console.log("cartItems",cartItems) */;
    const productSum = cartItems.map(item => Number(item.price * item.number))
    const total = productSum.reduce((sum, item) => (sum += item))
    const handleSetNewOrder = (e) => {

       e.preventDefault();
        const fullName = `${name}`+`  ${lastName}`
        const orderTime = new Date().toLocaleDateString('fa-IR')
        const phoneRegex = RegExp(
            '^(\\+98|0)?9\\d{9}$'
        );
        if (name && lastName && address && phone && selectedDate) {
            if (!phoneRegex.test(phone)) {
                toast.error("???????? ?????????? ???????? ????  ???? ?????????? ???????? ????????");
            } else {
/* set new order */
                let savedOrder = { username: fullName, address: address, phone: phone, ordertime: orderTime, handleTime: selectedDate.format("jYYYY/jMM/jDD"), products: cartItems, total: total, isDelivered: false };
                dispatch(saveNewOrder(savedOrder));

                toast.success("?????????????? ?????? ?????? ????");
                setIsRedirect(true)
            }


        } else {
           toast.error("?????????????? ???? ?????????? ????????????");
        }
    };

    return (
        <MuiPickersUtilsProvider utils={JalaliUtils} locale="fa">
            <Container component="main" maxWidth="md">

                  <Card className={classes.paper}>
                      <img  className={classes.img} src={FillingForm} alt=""/>
                      <Typography component="h1" variant="h5">

                         ?????????? ???????? ????????
                      </Typography>

                    <form  className={classes.form}  onSubmit={(e)=>e.preventDefault()}>
                      <Grid container column spacing={2}>

                          <Grid item xs={12} sm={6} md={6}>
                              <TextField  label="??????" fullWidth required value={name} onChange={(e) => setName(e.target.value)}/>
                          </Grid>
                          <Grid item xs={12} sm={6} md={6}>
                              <TextField label="?????? ????????????????" fullWidth required value={lastName} onChange={(e) => setLastName(e.target.value)}/>
              
                          </Grid>
                          <Grid item xs={12} sm={6} md={6}>
                                <TextField
                                  label="????????"                                     
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
                                <TextField 
                                  label="???????? ?????????? (?????? ?????????????? ?????????? ??????????)" 
                                  fullWidth
                                  required  
                                  value={phone}
                                  onChange={(e) => setPhone(e.target.value)}
                                />
                          </Grid>
                          <Grid item xs={12} sm={6} md={6}>
                                <DatePicker
                                  clearable
                                  label="?????????? ??????????"
                                  okLabel="??????????"
                                  cancelLabel="??????"
                                  clearLabel="?????? ????????"
                                  labelFunc={date => (date ? date.format("jYYYY/jMM/jDD") : "")}
                                  value={selectedDate}
                                  onChange={handleDateChange}
                                  fullWidth
                                  required
                                  />
                          </Grid>
                          <Grid item xs={12} sm={6} md={6} spacing={3}>
                                <Button variant="contained" color="primary" fullWidth  onClick={handleSetNewOrder}>
                                   ????????????
                                </Button>
                          </Grid>


                      </Grid>


                  </form>
            </Card>
        </Container>
              {isRedirect&&<Redirect to='/payment' />}
    </MuiPickersUtilsProvider>
    )
}

export default FinalShop