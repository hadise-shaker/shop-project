import React,{useEffect} from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Header from "../components/Header"
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useDispatch,useSelector } from "react-redux";
import {addProduct,getProducts,deleteproduct,editItem}from "../redux/actions/productActions"
import {getCategoryList} from "../api/products"
import routes from "../CategoriesRoutes/routes";

import { BrowserRouter as Router, Route, Link,NavLink } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },

  NavLink:{
    color:"purple"
  },
  categoryTitle:{
    color:"blue",
    '&>li':{
      backgroundColor:"#eaefff",
      /* borderRadius:"0 40px 40px 0" */
      borderBottom:"3px solid blue"
    }
   
},
}));

const CategoriesDrawer = props => {
  const dispatch = useDispatch();
  useEffect(() => {

      dispatch(getProducts());

    }, []); 
/*   useEffect(() => {
    getCategoryList();
    }, []); */ 
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const products = useSelector((state) => state.allProducts.products);
  const categories = products.map((cat,i)=>cat.category);
  let AllCategories = [...new Set(categories)]

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {routes.map((route) => {
          return(
            <>
<NavLink exact to={route.path} className={classes.NavLink}  activeClassName={classes.categoryTitle}>
            {/*   <ListItem button key={route.name}> */}
  {/*               <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon> */}
                <ListItem > 
               <Typography component="h4" variant="h5">
               {route.name}
               </Typography>
               </ListItem>
               </NavLink>
  
                  {route.sub.map(item=>
                
                  (              
                      <Typography style={{padding:"5px 10px 0 0"}} /* component="h5" variant="h6" */>
                          {item}
                      </Typography>
                      ))}
  
              {/* </ListItem> */}
            </>
            
           
          
             )
         })}


  </List>
      <Divider />
    </div>  
    
    );

  return (
    <>
    <Header  className={classes.appBar} handleDrawerToggle={handleDrawerToggle}/>
    <Router>
      <div className={classes.root}>
        <CssBaseline />

         


        <nav className={classes.drawer}>
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "left" : "right"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>

        <main className={classes.content}>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </main>
      </div>
    </Router>
    </>
  );
};

CategoriesDrawer.propTypes = {
  container: PropTypes.object
};

export default CategoriesDrawer;