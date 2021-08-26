import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";
import {AppBar,Toolbar,useScrollTrigger,Fab,Zoom,IconButton,Badge,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Link, NavLink, useHistory } from 'react-router-dom';
import {ShoppingCartTwoTone} from '@material-ui/icons/';
import logo from "../../assets/img/online-shop2.png"
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {isLoggedIn} from "../../utils/auth"
import { useLocation } from "react-router-dom"
import { COLORS, FONTS } from "../../styles/constantsVariables";
import SettingsIcon from '@material-ui/icons/Settings';
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
  root:{
    display: "flex",
    zIndex:" 1100",
    boxSizing: "border-box",
    flexShrink: 0,
    flexDirection: "column",
    backgroundColor: COLORS.mainColor,
    flexGrow: 1,
    marginBottom: "20px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  root1: {
    flexGrow: 1,
    fontWeight: "bold",
    color: "white",
    display:"contents",
    [theme.breakpoints.down("xs")]: {
      display:"none"
    },
    
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
    textAlign:"center",
    
/*         [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
      textAlign:"center",
      width: "40%",
    }, */
  },
  cart:{
    display:"contents",
    [theme.breakpoints.down("xs")]: {
      display:"none"
    },
  }
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
      <div style={{width:"100%"}}>

      
      <AppBar className={classes.root}>
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
           
          <Link /* variant="h6" */ className={classes.root1} to="/" >فروشگاه دعوت</Link>

          <div style={{margin:"auto"}}>

             {window.location.href.indexOf("admin")>-1? <>          
                <NavLink to="/admin" className={classes.tabs} exact activeClassName={classes.link_active} /* component={Products} */> کالا</NavLink>
                <NavLink to="/admin/price" className={classes.tabs}  exact activeClassName={classes.link_active}/* component={Price} */ > قیمت </NavLink>
                <NavLink to="/admin/orders" className={classes.tabs}  exact activeClassName={classes.link_active}/* component={Price} */ > سفارش ها </NavLink></>:null}

          </div>

          <NavLink to="/cart" className={classes.color} activeClassName={classes.link_active} exact>
          <Badge  /* showZero={true} */ badgeContent={cartCount?.length} color="primary" anchorOrigin={{vertical: 'top',horizontal: 'left',}}>
            <ShoppingCartTwoTone/>
          </Badge>
          <span className={classes.cart}>
          سبد خرید
          </span>
            
          </NavLink>
          <NavLink  to={!isLoggedIn()?"/login":"/admin"} className={classes.color} exact activeClassName={classes.link_active}>
              {window.location.href.indexOf("admin")>-1?         
                <Button variant="contained" color="primary" onClick={handlLogOut}>
                    <ExitToAppIcon/>
                   خروج از پنل مدیریت
                 </Button> :
                <>
                 <SettingsIcon style={{verticalAlign: "middle"}}/>
                 <div className={classes.cart}>
                 
                 مدیریت کالا
                 </div>
                 </>
                 }  
            </NavLink>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab  style={{backgroundColor:"blueviolet",color:"white"}} size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon  />
        </Fab>
      </ScrollTop>

      </div>
    </React.Fragment>
  );
}
