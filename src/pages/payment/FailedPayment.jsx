import React from 'react'
import {Box,Button,Container,Grid,Typography} from '@material-ui/core'
import Failed from "../../assets/img/failed2.png"
import { makeStyles } from "@material-ui/core/styles";
const FailedPayment = () => {
    const useStyles = makeStyles({
        container:{
            margin:"30px auto"
        },
        img:{
            width:"100%",
        },
        grid:{
            width:"50%",
            margin:"auto"
        }
        
    })
    const classes=useStyles()
    return (
        
        <Container maxWidth="lg" className={classes.container}>
            <Typography align="center" component="h4" variant="h4"> پرداخت شما موفقیت آمیز نبود !   </Typography>
            <Typography align="center" component="p" /* variant="h4" */> لطفا برای پرداخت دوباره اقدام نمایید   </Typography>
            <Grid container className={classes.grid}>
                    <Grid xs={12}>
                        <img src={Failed} className={classes.img} alt="پرداخت ناموفق"/>
                    </Grid>
            </Grid>
        </Container>
    )
}

export default FailedPayment
