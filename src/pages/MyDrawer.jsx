
import React,{useEffect} from "react";
import PropTypes from "prop-types";

import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import {useParams, useHistory} from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Typography from "@material-ui/core/Typography";
import Header from "../components/Header"
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useDispatch,useSelector } from "react-redux";
import {addProduct,getProducts,deleteproduct,editItem}from "../redux/actions/productActions"
import Men from "./Categories/ProductCategory"
import routes from "../CategoriesRoutes/routes";
import { BrowserRouter as Router, Route, Link,NavLink,Switch } from "react-router-dom";

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
const MyDrawer = ({category}) => {
  const classes = useStyles();
    return (
        <div>
        <Divider />
        <List>
          {routes.map((route) => {
            return(
              <>
 {/*  <Link exact to={"/"+route.name} className={classes.NavLink}  activeClassName={classes.categoryTitle}> */}
                  <ListItem component={Link} to={`/categorylist/${route.name}`} /* onClick={()=>window.location.reload()}  */> 
                 <Typography component="h4" variant="h5">
                 {route.name}
                 </Typography>
                 </ListItem>
{/*                  </Link> */}
    
                    {route.sub.map(item=>
                  
                    (              
                        <Typography style={{padding:"5px 10px 0 0"}} >
                            {item}
                        </Typography>
                        ))}
  
              </>
              
               )
           })}
  
  
    </List>
        <Divider />
      </div>  
    )
}

export default MyDrawer
