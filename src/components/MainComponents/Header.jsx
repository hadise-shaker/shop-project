import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import { Link, NavLink, useHistory } from 'react-router-dom';
import {loginUseStyle} from "../styles/index"
import {ShoppingCartTwoTone} from '@material-ui/icons/';
import logo from "../styles/img/online-shop2.png"
import "../assets/header.css"
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddIcon from '@material-ui/icons/Add'
import {isLoggedIn} from "../utils/auth"
import { useLocation } from "react-router-dom"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/* import {img} from "../styles/img/download.jfif" */
function ScrollTop(props) {
  const { children, window } = props;
  const classes = loginUseStyle();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
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

export default function BackToTop({children,props,handleDrawerToggle}) {
  let history = useHistory()
  const classes = loginUseStyle();
 /*   const [count, setCount] = React.useState(1); */
 const count = useSelector(state => state.cart.count)
 const location = useLocation();
 const handlLogOut=()=>{
  localStorage.clear();
  history.push("/");
/*   window.location.reload(); */
}
  return (
    <React.Fragment /* className={classes.root} */>
    {/*   <CssBaseline /> */}
      <AppBar className={classes.backgroundColor}>
        <Toolbar className="link">
         
        
          <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
           <img className="img" src={logo} onClick={()=>history.push("/")} />

{/*            <Button variant="contained" color="primary" className="left" onClick={handlLogOut}>
          <ExitToAppIcon/>
            
            
             خروج از پنل مدیریت</Button> */} 
           
          
          <Link /* variant="h6" */ className={classes.root} to="/" >فروشگاه فلان</Link>
          

        
          <div style={{width:"35%",margin:"auto"}}>

             {window.location.href.indexOf("admin")>-1? <>          
          <NavLink to="/admin" /* className={classes.root} */ exact activeClassName="link_active" /* component={Products} */> کالا</NavLink>
          <NavLink to="/admin/price" className="tabs"  exact activeClassName="link_active"/* component={Price} */ > قیمت </NavLink>
          <NavLink to="/admin/orders" className="tabs"  exact activeClassName="link_active"/* component={Price} */ > سفارش ها </NavLink></>:null}

          </div>
          <Badge badgeContent={count} color="primary" anchorOrigin={{
    vertical: 'top',
    horizontal: 'left',
  }}>
          <ShoppingCartTwoTone/>
          </Badge>
          <Link to="/cart" activeClassName="link_active" exact>سبد خرید</Link>
          <Link  to={!isLoggedIn()?"/login":"/admin"} exact activeClassName="link_active">  {window.location.href.indexOf("admin")>-1?           <Button variant="contained" color="primary" /* className="left" */ onClick={handlLogOut}>
          <ExitToAppIcon/>
            
            
             خروج از پنل مدیریت</Button> :"مدیریت کالا"}    </Link>
 

            
        </Toolbar>


          


        
      </AppBar>
      
      <Toolbar id="back-to-top-anchor" />
{/*       <Container>
        <Box my={2}>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
      </Container> */}
      <ScrollTop {...props}>
        <Fab /* className={classes.backgroundColor} */ style={{backgroundColor:"blueviolet",color:"white"}} size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon  />
        </Fab>
      </ScrollTop>


    </React.Fragment>
  );
}
