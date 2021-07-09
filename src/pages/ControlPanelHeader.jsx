import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { COLORS, FONTS } from "../styles/constantsVariables";
import {Link, NavLink,useHistory} from "react-router-dom"
import {Logout}from "../utils/auth"
import Price from "./Price"
import {loginUseStyle} from "../styles/index"
import "../assets/header.css"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  header: {
    position: "fixed",
/*     bottom: theme.spacing(2),
    right: theme.spacing(2), */
    backgroundColor: COLORS.mainColor,
  }
}));


export default function ButtonAppBar(props) {
  const history =useHistory();
  const classes = useStyles();
const handlLogOut=()=>{
    localStorage.clear();
    history.push("/home");
    window.location.reload();
}

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header} >
        <Toolbar className="link link-admin">


          {/* <NavLink to="/" exact></NavLink> */}
<Link to="/products"  /* component={Products} */> کالا</Link>
          <Link to="/price"  /* component={Price} */ > قیمت </Link>
          <Link to="/home"  /* component={Price} */ > خانه </Link>
          <Button color="inherit" onClick={handlLogOut}>Log Out</Button>  


        </Toolbar>
      </AppBar>
      
    </div>
  );
}
