import React,{useEffect,useState} from "react";
import PropTypes from "prop-types";

import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import {useParams, useHistory} from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Typography from "@material-ui/core/Typography";
import Header from "../../components/MainComponents/Header"
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useDispatch,useSelector } from "react-redux";
import {addProduct,getProducts,deleteproduct,editItem}from "../../redux/actions/productActions"
import ProductCategory from "./ProductCategory"
import routes from "../../CategoriesRoutes/routes";
import MyDrawer from "./MyDrawer"
import { BrowserRouter as Router, Route, Link,NavLink,Switch } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

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
    width: drawerWidth,
    marginTop:"80px"
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
  const [myCategory, setMyCategory] = useState("")
  useEffect(() => {

      dispatch(getProducts());

    }, []); 
  const { container } = props;
    const {category}=useParams()
   
    useEffect(() => {
      console.log(category);
     setMyCategory(category)
    }, [])
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const products = useSelector((state) => state.allProducts.products);
  const loading=useSelector((state)=>state.allProducts.loading);
  const categories = products.map((cat,i)=>cat.category);
  let AllCategories = [...new Set(categories)]

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Divider />
      <List>
        {routes.map((route) => {
          return(
          
              <Switch>

             
            <>
           

           
<NavLink exact to={`/categorylist/${route.name}`} className={classes.NavLink}  activeClassName={classes.categoryTitle}>
                <ListItem > 
               <Typography component="h4" variant="h5">
               {route.name}
               </Typography>
               </ListItem>
               </NavLink>
  
                  {route.sub.map(item=>
                
                  (              
                      <Typography style={{padding:"5px 10px 0 0"}} >
                          {item}
                      </Typography>
                      ))}

            </>
            </Switch>
           
            
             )
         })}


  </List>
      <Divider />
    </div>  
    
    );

  return (
    <>
   
    <Header  className={classes.appBar} handleDrawerToggle={handleDrawerToggle}/>
    {loading&&<Loading/>}
      <div className={classes.root}>
      <Router>
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
              <Drawer/>
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
             {/*  <MyDrawer category={category}/> */}
            </Drawer>
          </Hidden>
        </nav>

{!loading&&
        <main className={classes.content}>
     
        {/*  <Switch> */}

        
         {routes.map((route, index) => (
           <Route
             exact
             path={`/categorylist/${route.name}`}
             
             /* component={()=><Men category={c}/>} */
             render={props=><ProductCategory {...props} category={route.name}/>}
           >
            {/*  <Men category={myCategory}/> */}
           </Route>
          
         
       ))}
         
       </main>
}

        </Router>
      </div>
  
    </>
  );
};

CategoriesDrawer.propTypes = {
  container: PropTypes.object
};

export default CategoriesDrawer;