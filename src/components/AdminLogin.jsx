import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {loginUseStyle} from "../styles/index"
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import {login} from "../api/login"
import Header from "./Header"
import "react-toastify/dist/ReactToastify.css";
export default function SignIn() {

  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const history = useHistory();
  const classes = loginUseStyle();
  const handleLogin = (e) => {
    e.preventDefault();
    if (email,password) {
      login(email, password)
      .then((res) => {
        if (res.status === 400) {
          toast.error("ایمیل و پسورد را به درستی وارد کنید ");
        }
        console.log("res :",res.data);
        localStorage.setItem("token", res.data.token);
        history.push("/admin")
        /* window.location.reload(); */
      })
      .catch((err) => toast.error('ایمیل و رمز عبور را به درستی وارد نمایید'));
    }/* else{
      toast.error('ایمیل و رمز عبور را به درستی وارد نمایید')
    }
  */
};
/*   let history=useHistory(); */
/*   console.log(useHistory()); */
  return (
  <>
{/*  <ToastContainer/> */}
{/*     <Header/> */}
    <Container component="main" maxWidth="xs" color="primary"  className={classes.container}>
   
      {/* <CssBaseline /> */}
      <div className={classes.paper}>
        <Avatar className={classes.avatar }>
          <LockOutlinedIcon />
        </Avatar>
        <Typography /* component="h1" */ variant="h4" className={classes.text}>
         ورود
        </Typography>
        <form className={classes.form}  onSubmit={handleLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="پست الکترونیکی"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e)=>setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="رمز عبور"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e)=>setPassword(e.target.value)}
          />
{/*           <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            /* color="primary" */
            className={classes.submit}
           
          >
            ورود
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/" /* onClick={()=>{history.push("/")}} */ variant="body2">
                بازگشت به سایت
              </Link>
            </Grid>
{/*             <Grid item>
              <Link href="#" variant="body2">
              بازگشت به سایت
              </Link>
            </Grid> */}
          </Grid>
        </form>
      </div>
{/*       <Box mt={8}>
        <Copyright />
      </Box> */}
    </Container>
    </>
  );
}