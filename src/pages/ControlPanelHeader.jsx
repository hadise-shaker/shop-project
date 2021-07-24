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
import logo from "../styles/img/online-shop2.png"
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
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
justifyContent:"center",
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
    history.push("/");
    window.location.reload();
}

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header} >
     
        <Toolbar className="link link-admin">
        <Link to="/" className="right" >فروشگاه فلان</Link>
        <img className="admin-img" src={logo} onClick={()=>history.push("/")} />
          {/* <NavLink to="/" exact></NavLink> */}
          <NavLink to="/admin"  exact activeClassName="link_active" /* component={Products} */> کالا</NavLink>
          <NavLink to="/admin/price" exact activeClassName="link_active"/* component={Price} */ > قیمت </NavLink>
          <NavLink to="/admin/orders" exact activeClassName="link_active"/* component={Price} */ > سفارش ها </NavLink>
          {/* <NavLink to="/" exact className="left" activeClassName="link_active" > بازگشت به سایت </NavLink> */}
          <Button variant="contained" color="primary" className="left" onClick={handlLogOut}>
          <ExitToAppIcon/>
            
            
             خروج از پنل مدیریت</Button>  


        </Toolbar>
      </AppBar>
      
    </div>
  );
}
