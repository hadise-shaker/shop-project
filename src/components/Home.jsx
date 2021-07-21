import React,{useEffect,useState} from 'react'
import Header from "./Header"
import { useDispatch,useSelector } from "react-redux";
import {addProduct,getProducts,deleteproduct,editItem}from "../redux/actions/productActions"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Grid from "@material-ui/core/Grid"
import {COLORS} from "../styles/constantsVariables"
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import Link from '@material-ui/core/Link';
import ProductCard from "./ProductCard"
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      width: "400px",
      padding: "10px 10px 10px 30px",
      borderRadius:"10px",
      border:`3px solid ${COLORS.mainColor}`,
      margin:"10px 0 10px 10px"
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: "100%",
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
    gridcontainer:{
        display:"flex",
        justifyContent:"space-evenly"
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
const Home = () => {
    const [category, setCategory] = useState([])
    const history=useHistory()
    const classes = useStyles();
    const theme = useTheme();
    const products = useSelector((state) => state.allProducts.products);
    const categories = products.map((cat,i)=>cat.category);
    let AllCategories = [...new Set(categories)]
    let LimitedProducts={}
     LimitedProducts=products.filter((val,i)=>val.category===AllCategories[0])
    const LimitedProducts2=products?.map((cat,i)=>cat.category).reduce((val,i)=>val.includes(i)?val:[...val,i],[])
    console.log("LimitedProducts2",LimitedProducts2);
    const LimitedProducts3=products.filter((val,i)=>val.category===AllCategories[2])
    const LimitedProducts4=products.filter((val,i)=>val.category===AllCategories[3])
    const LimitedProducts5=products.filter((val,i)=>val.category===AllCategories[4])
    console.log("LimitedProducts",LimitedProducts);

    console.log("AllCategories",AllCategories);
    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(getProducts());

      }, []); 


    return (

        <>
            <Header/>
            
            {AllCategories.map((val,i)=>{
            return(
              <div key={i}>
              <Link href={`/AllProductsInGroup/${val}`}>    <Typography variant="h4" style={{display:"flex",alignItems:"center",padding:"30px 10px 20px 0"}}>{val} <ArrowLeftIcon style={{fontSize:"30px"}}  /></Typography>   </Link>
              <div className={classes.container} >
           
           <br></br>
      
           <Grid container  justify="center">
           {products.filter(person=>person.category===val)?.filter((val,i)=>i<6).map((filtered)=>{
               return(
                <Link href={`/AllProductsInGroup/${filtered.id}`}>
               <Grid container justify="center" item xs={12} spacing={3}>
           
                
                    
                    {console.log("filtered id",filtered)}
                   
                      
                  
                    <ProductCard item={filtered}/>
                   
                   
                
            
                     

                       
                                 </Grid>
                                 </Link>
                                 )}
                                )  
                            }
         </Grid>
         </div>
         <br></br>
              </div>
            )
          })}
            )
        </>
    )
}

export default Home
