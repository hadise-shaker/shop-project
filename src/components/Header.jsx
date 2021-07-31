import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";
import {AppBar,Toolbar,Typography,CssBaseline,useScrollTrigger,Box,Container,Fab,Zoom,IconButton,Badge,Button} from '@material-ui/core';
import { makeStyles,alpha } from '@material-ui/core/styles';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Link, NavLink, useHistory } from 'react-router-dom';
import {loginUseStyle} from "../styles/index"
import {ShoppingCartTwoTone} from '@material-ui/icons/';
import logo from "../styles/img/online-shop2.png"
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddIcon from '@material-ui/icons/Add'
import {isLoggedIn} from "../utils/auth"
import { useLocation } from "react-router-dom"
import { COLORS, FONTS } from "../styles/constantsVariables";
const useStyles=makeStyles((theme)=>({
  header: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  link: {
    fontSize: "22px",
    fontWeight: "bold",
    color: " white",
    justifyContent: "center",
    color: "white",
    textDecoration: "none",
    /* margin: "0 0px 0 40px", */

  },
  backgroundColor: {
    backgroundColor: COLORS.mainColor,
    flexGrow: 1,
    marginBottom: "20px",
    /* zIndex: "999999", */
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  root: {
    flexGrow: 1,
    fontWeight: "bold",
    color: "white",
  },
  img: {
    width: "80px",
    height: "80px",
    cursor: "pointer",
  },
  link_active: {
    color: "rgb(120, 0, 178)  !important",
    fontSize: "20px",
    paddingBottom: "5px",
    borderBottom: "2px solid  rgb(120, 0, 178)",
    fontWeight: "bold",
  },
  tabs: {
    margin: "20px",
    color: "white",
    textDecoration: "none",
    margin: "0 0px 0 40px",
    fontWeight: "bold",
  },
  color: {
    color: "white",
    fontWeight: "bold",
    justifyContent: "center",
    marginRight: "30px",
        [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
      textAlign:"center",
      width: "40%",
    },
  },
}))
function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.header}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Header({props,handleDrawerToggle}) {
  let history = useHistory()
  const classes = useStyles();
 const cartCount = useSelector((state) => state.cart.cart)
 const location = useLocation();
 const handlLogOut=()=>{
  localStorage.removeItem("token");
  history.push("/");

}
  return (
    <React.Fragment >
      <AppBar className={classes.backgroundColor}>
        <Toolbar className={classes.link}>
         
        
          <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
           <img className={classes.img} src={logo} onClick={()=>history.push("/")} />
           
          <Link /* variant="h6" */ className={classes.root} to="/" >فروشگاه دعوت</Link>

          <div style={{width:"40%",margin:"auto"}}>

             {window.location.href.indexOf("admin")>-1? <>          
                <NavLink to="/admin" className={classes.tabs} exact activeClassName={classes.link_active} /* component={Products} */> کالا</NavLink>
                <NavLink to="/admin/price" className={classes.tabs}  exact activeClassName={classes.link_active}/* component={Price} */ > قیمت </NavLink>
                <NavLink to="/admin/orders" className={classes.tabs}  exact activeClassName={classes.link_active}/* component={Price} */ > سفارش ها </NavLink></>:null}

          </div>

          <NavLink to="/cart" className={classes.color} activeClassName={classes.link_active} exact>
          <Badge  /* showZero={true} */ badgeContent={cartCount?.length} color="primary" anchorOrigin={{vertical: 'top',horizontal: 'left',}}>
            <ShoppingCartTwoTone/>
          </Badge>
            سبد خرید
          </NavLink>
          <NavLink  to={!isLoggedIn()?"/login":"/admin"} className={classes.color} exact activeClassName={classes.link_active}>
              {window.location.href.indexOf("admin")>-1?         
                <Button variant="contained" color="primary" onClick={handlLogOut}>
                    <ExitToAppIcon/>
                   خروج از پنل مدیریت
                 </Button> :
                 "مدیریت کالا"}  
                   </NavLink>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab  style={{backgroundColor:"blueviolet",color:"white"}} size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon  />
        </Fab>
      </ScrollTop>


    </React.Fragment>
  );
}
