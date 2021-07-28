import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from "react-redux";
import {addProduct,getProducts,deleteproduct,editItem}from "../../redux/actions/productActions"
import ProductCard from "../../components/Products/ProductCard"
import { makeStyles } from '@material-ui/core/styles';
import {COLORS} from "../../styles/constantsVariables"
import Grid from "@material-ui/core/Grid"
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
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
/*        backgroundColor:` ${COLORS.bg_modal}`, */
  /*         height: "600px", */
       alignItems:"center",
       justifyContent:"center",
       borderRadius:"15px",
       maxHeight:"100%",
       maxWidth:"100%",
  
   }
  }));
const LapTop = () => {
    const products = useSelector((state) => state.allProducts.products);
    const categories = products.map((cat,i)=>cat.category);
    let AllCategories = [...new Set(categories)]
    const classes = useStyles();
    return (
        <div>
            <Link /* href="/AllProductsInGroup" */ >    <Typography variant="h4" style={{display:"flex",alignItems:"center",padding:"10px 10px 20px 0"}}>{AllCategories[2]} <ArrowLeftIcon style={{fontSize:"30px"}}  /></Typography>   </Link>
            <div className={classes.container} >
           
           <br></br>
      
           <Grid container  justify="center">
           <Grid container justify="center" item xs={12} spacing={3}>
            {products?.filter(person=>person.category===AllCategories[2])?.map((filtered)=>{
              return(
                <Link href={`/AllProductsInGroup/${filtered.id}`}>
                <ProductCard item={filtered}/>
                </Link>
              )
            }
                       
            
                      
                            
                       )} 
                                 </Grid>
         </Grid>
         </div>
        </div>
    )
}

export default LapTop
