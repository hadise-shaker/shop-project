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
const Men = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);
  const test = products?.sort((a, b) => (new Date(a) < new Date(b) ? 1 : -1))
  const categories = products.map((cat,i)=>cat.category);
  let AllCategories = [...new Set(categories)]
console.log("AllCategories",AllCategories);
  const classes = useStyles();
  useEffect(() => {
      dispatch(getProducts());



    }, []); 

    useEffect(() => {
        
      if (search !== '') {
          console.log("search");
          const filteredData = products.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
          console.log(filteredData);
          setData(filteredData)

      } /* else {
          getChangeList(productCategory, sortParam, order, page).then(res => {
              console.log(res);
              setData(res.data)
          })
      } */
     
  }, [ search, products])


    return (
        <>
            <Link /* href="/AllProductsInGroup" */ >    <Typography variant="h4" style={{display:"flex",alignItems:"center",marginBottom:"30px"}}>{AllCategories[0]} <ArrowLeftIcon style={{fontSize:"30px"}}  /></Typography>   </Link>
           {/*  <div className={classes.container} > */}
           
      
          {/*  <Grid container  justify="center"> */}
          <Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>
           <Grid container justify="center" item xs={12} spacing={3}>
{/*            <OutlinedInput
                                    variant="outlined"
                                    placeholder="جستجو... "
                                    color="primary"
                                    fullWidth
                                    name="جستجو"
                                    onChange={(e) => setSearch(e.target.value)}
                                /> */}
            {test?.filter(person=>person.category===AllCategories[0])?.map((filtered)=>{
              
              return(
                <Link href={`/AllProductsInGroup/${filtered.id}`}>

                <ProductCard item={filtered}/>
                </Link>
              )
            }
                       

                       )} 
                                 </Grid>
         </Grid>
       {/*   </div> */}
        </>
    )
}

export default Men
