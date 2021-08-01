import React, { useState } from 'react';
import {Avatar,Button,TextField,Link,Grid,Typography,Container,makeStyles} from '@material-ui/core';
import { COLORS, FONTS } from "../../styles/constantsVariables";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useHistory } from 'react-router-dom';
import { toast } from "react-toastify";
import {login} from "../../api/login"
import "react-toastify/dist/ReactToastify.css";
const useStyles=makeStyles((theme)=>({

  container: {
    marginTop: theme.spacing(8),
    border: `2px solid ${COLORS.lightMainColor}`,
    borderRadius: "7px",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: COLORS.mainColor,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: COLORS.mainColor,
    fontSize: "2rem",
  },
}))
export default function SignIn() {

  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const history = useHistory();
  const classes = useStyles();
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
    }
};

  return (
  <>
    <Container component="main" maxWidth="xs" color="primary"  className={classes.container}>
  
      <div className={classes.paper}>
        <Avatar className={classes.avatar }>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h4" >
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

          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
           
          >
            ورود
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/"  variant="body2">
                بازگشت به سایت
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>

    </Container>
    </>
  );
}