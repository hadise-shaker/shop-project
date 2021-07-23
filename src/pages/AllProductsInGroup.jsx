import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from "react-redux";
import {addProduct,getProducts,deleteproduct,editItem}from "../redux/actions/productActions"
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Header from "../components/Header"
import Grid from "@material-ui/core/Grid"
import {COLORS} from "../styles/constantsVariables"
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import Link from '@material-ui/core/Link';
import ProductCard from "../components/ProductCard"
import TestDrawer from "./TestDrawer"
import ResponsiveDrawer from"./ResponsiveDrawer"
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
    paddingTop:"15px",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  container:{
    /*  display: "flex", */
     backgroundColor:` ${COLORS.bg_modal}`,
/*         height: "600px", */
     alignItems:"center",
     justifyContent:"center",
     borderRadius:"15px",
     maxHeight:"100%",
     maxWidth:"100%",

 }
}));

const AllProductsInGroup=()=> {
    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(getProducts());
/*         fetchProduct(); */
      }, []); 
  const classes = useStyles();
  const products = useSelector((state) => state.allProducts.products);
  const categories = products.map((cat,i)=>cat.category);
  let AllCategories = [...new Set(categories)]
  const LimitedProducts2=products?.map((cat,i)=>cat.category).reduce((val,i)=>val.includes(i)?val:[...val,i],[])

  return (
    <div className={classes.root}>
      <CssBaseline />
{/*       <AppBar position="fixed" className={classes.appBar}>
         <Header />
      </AppBar> */}

<ResponsiveDrawer product={products}/>
    </div>
  );
}
export default AllProductsInGroup