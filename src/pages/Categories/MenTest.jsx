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
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { useParams } from "react-router-dom";
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

const MenTest = ({data,title}) => {
  const { category } = useParams()
/*   const [data, setData] = useState([])
  const [search, setSearch] = useState("") */
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);
  const categories = products.map((cat,i)=>cat.category);
  let AllCategories = [...new Set(categories)]
console.log("AllCategories",AllCategories);
  const classes = useStyles();
  useEffect(() => {

      dispatch(getProducts());



    }, []); 

/*     useEffect(() => {
        
      if (search !== '') {
          console.log("search");
          const filteredData = products.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
          console.log(filteredData);
          setData(filteredData)

      } 
     
  }, [ search, products]) */

    return (
        <div>
            <Link /* href="/AllProductsInGroup" */ >    <Typography variant="h4" style={{display:"flex",alignItems:"center",padding:"10px 10px 20px 0"}}>{title} <ArrowLeftIcon style={{fontSize:"30px"}}  /></Typography>   </Link>
            <div className={classes.container} >
           
           <br></br>
      
           <Grid container  justify="center">
           <Grid container justify="center" item xs={12} spacing={3}>
{/*            <OutlinedInput
                                    variant="outlined"
                                    placeholder="جستجو... "
                                    color="primary"
                                    fullWidth
                                    name="جستجو"
                                    
                                    // value={title}
                                    onChange={(e) => setSearch(e.target.value)}
                                /> */}
            {data?.map((filtered)=>{
              
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

export default MenTest
