import React,{useEffect,useState} from 'react'
import Header from "../../components/MainComponents/Header"
import { useDispatch,useSelector } from "react-redux";
import {addProduct,getProducts,deleteproduct,editItem}from "../../redux/actions/productActions"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid"
import {COLORS} from "../../styles/constantsVariables"
import doubleArrow from "../../assets/double-left.png"
import MainCarousel from "../../components/MainComponents/MainCarousel"
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import NoResult from "../../assets//No_results.png"
import Loading from "../../components/Loading/Loading"
import ProductCard from "../../components/Products/ProductCard"
import { useHistory,Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      width: "400px",
      padding: "10px 10px 10px 30px",
      borderRadius:"10px",
      border:`3px solid ${COLORS.mainColor}`,
      margin:"10px 0 10px 10px"
    },
    container:{
        alignItems:"center",
        justifyContent:"center",
        borderRadius:"15px",
        maxHeight:"100%",
        maxWidth:"100%",

    },
    title:{
      backgroundColor:"#9dc5ff",
      textAlign:"center",
      borderRadius:"10px",
      display:"flex",
      justifyContent:"center",
      marginTop:"20px",
    },
    categoryTitle:{
      fontSize:"2.5rem",
      display:"flex",
      alignItems:"center",
      textAlign:"center"
    },
    categoryListContainer:{
      color:"white",
      textDecoration:"none",
      padding:"5px"
    },
    ProductCardContainer:{

      textDecoration:"none",
      textAlign:"center",
      marginRight:"10px"
    },
    SeeMoreContainer:{
      width:"100%",
      textAlign:"right",
      padding:"10px"
    },
    icon:{
      width:"9px"
    },
    SeeMore:{
      color:"black",
      '&:hover':{
        color:"blue"
      }
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor:COLORS.mainColor,
      marginLeft: 0,
      width: "100%",
      height:"60px",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
      display:"flex"
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "black",
      width: "100%",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "100%",
        "&:focus": {
          width: "100%",
        },
      },
      fontSize:"20px",
      fontWeight:"bold",
      color:"black"
    },
    NoData:{
      textAlign:"center",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center"
      
    },  
    img:{
      width:"40%",
      marginTop:"-40px",
      margin:"auto"
    }


  }));
const Home = () => {
    const classes = useStyles();
    const [search, setSearch] = useState("")
    const [data, setData] = useState([])
    /* get data & loading from redux */
    const products = useSelector((state) => state.allProducts.products);
    const loading=useSelector((state)=>state.allProducts.loading);
    /* console.log("Loading",loading); */


    /* get all gategories */
    const categories = products?.map((cat,i)=>cat.category);
    let AllCategories = [...new Set(categories)]
    /* **** */


    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(getProducts());

      }, []); 

      /* get searched data */
    useEffect(() => {
      if (search !== '') {
        console.log("search");
        const filteredData = products.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
        console.log("filteredData",filteredData);
        setData(filteredData)

      }
      else{
          setData(products)
        }
      }, [search,products])

    return (

        <>
        <MainCarousel/>

      <div className={classes.search}>
              <div className={classes.searchIcon}>
              <SearchIcon />
              </div>
            <InputBase
              placeholder="جستجو کنید ..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e)=>setSearch(e.target.value)}
            />
             
          </div>
          {/* set Loading */}
    {loading&&<Loading/>}

      {!loading&&
      <>
        {data.length>0?
            AllCategories.map((val,i)=>{
                          return(
                          <div  key={i}>
                              <div className={classes.title}>

                                    <Link to={`/categorylist/${val}`}  className={classes.categoryListContainer}>   
                                        <Typography variant="h4" className={classes.categoryTitle} >
                                          {val}
                                        </Typography>  
                                    </Link>
                              </div>
                            <div className={classes.container} >
                         
                                <br></br>
                    
                                <Grid container  justify="center">
                                      <Grid container justify="center" item xs={12} spacing={3}>
                                          {data.length>0&&data.filter(person=>person.category===val).filter((val,i)=>i<6).map((filtered)=>{
                                            return( <>
  
                                           <Link className={classes.ProductCardContainer} to={`/AllProductsInGroup/${filtered.id}`}>
                                
                                                <ProductCard item={filtered}/>
                                 
                                           </Link>
       
                                                 </>    
                                                  )} ) 

                                          }

                                     {
                                       data.length>0&&                      
                                         <div  className={classes.SeeMoreContainer} >
                                              <Link  className={classes.SeeMore}  to={`/categorylist/${val}`} >  مشاهده بیشتر   <img className={classes.icon}  src={doubleArrow}/> </Link>       
                                        </div>
                                     }
              
                        
                                </Grid>
                                      </Grid>
                              </div>
                                 <br></br>
                           </div>
                          )
                        })
                          
         :
               <div className={classes.NoData} >
                  <Typography variant="h4" component="h4" color="error" align="center">کالایی یافت نشد !</Typography> 
                  <img src={NoResult} alt="" className={classes.img}/>
               </div>
       }
          </>
    }

        </>
    )
}

export default Home
