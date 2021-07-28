import React from 'react'
import {Box,Button,Container,Grid,Typography} from '@material-ui/core'
import Success from "../../assets/successPayment.png"
import { makeStyles } from "@material-ui/core/styles";
const SuccessPayment = () => {
    const useStyles = makeStyles({
        container:{
            margin:"30px auto"
        },
        img:{
            width:"100%",
           /*  height:"400px" */
        },
        grid:{
            width:"50%",
            margin:"auto"
        }
        
    })
    const classes=useStyles()
    return (
        
        <Container maxWidth="lg" className={classes.container}>
            <Typography align="center" component="h4" variant="h4"> پرداخت شما با موفقیت انجام شد!   </Typography>
            <Typography align="center" component="p" /* variant="h4" */> سفارش شما در صف تحویل قرار دارد   </Typography>
            <Grid container className={classes.grid}>
                    <Grid xs={12}>
                        <img src={Success} className={classes.img} alt="پرداخت موفق"/>
                    </Grid>
            </Grid>
        </Container>
    )
}

export default SuccessPayment
