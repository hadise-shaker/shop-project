import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from "react-redux";
import {addProduct,getProducts,deleteproduct,editItem}from "../../redux/actions/productActions"
import {useParams, useHistory} from "react-router-dom";
import ProductCard from "../../components/Products/ProductCard"
import { makeStyles } from '@material-ui/core/styles';
import {COLORS} from "../../styles/constantsVariables"
import Grid from "@material-ui/core/Grid"
import {MenuItem, Select}from "@material-ui/core"
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import {getAllProducts} from "../../api/products"
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import NoResult from "../../assets/No_results.png"
import ReactPaginate from 'react-paginate'
import { CallMissedSharp } from '@material-ui/icons';
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    pagination: {
      display: "flex",
      justifyContent:" space-between",
      listStyle: "none",
      cursor: "pointer",
      margin: "15px auto",
    },

    pagination_a:{
/*       backgroundColor:" #3a9bff", */
      borderRadius: "5px",
      fontWeight:"bold",
      border: "2px solid #9fceff",
      height: "40px",
     /*  color: "#6c7ac9", */
     marginRight:"10px",
      padding: " 0px 12px",
      /* fontSize:"13px" */
    },
    pagination_active:{
      backgroundColor:"#3a9bff",
    },
    pagination_disable:{
      color: "rgb(198, 197, 202)",
      border: "1px solid rgb(198, 197, 202)",
      
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
  
   },
/*    search:{
     width:"48%",
     marginRight:"10px"
   }, */
   searchContainer:{
     padding:"20px",
     /* border:"2px solid blue", */
     borderRadius:"10px",
     /* boxShadow:"-2px 7px 13px 10px #c3c3c3", */
     marginBottom:"10px",
     display:"flex",
     justifyContent:"space-between",
     alignItems:"center"
   },
   select:{
     width:"50%",
     marginRight:"10px",
     backgroundColor:"#9fceff",
     borderRadius:"5px",
     paddingRight:"5px"
   },
   search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#9fceff",
/*     '&:hover': {
      backgroundColor: "#0000ff5c",
    }, */
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '48%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '48%',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '80ch',
    },
  },
  img:{
    width:"40%",
    marginTop:"-40px",
    margin:"auto"
  }
  }));
const ProductCategory = ({category}) => {
/*   const {category}=useParams() */
 /*  console.log("category",category); */
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const [productsCategory, setProductsCategory] = useState([])
  const [Mycategory, setMyCategory] = useState("")
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);
  const test = products?.sort((a, b) => (new Date(a) < new Date(b) ? 1 : -1))
  const categories = products.map((cat,i)=>cat.category);
  let AllCategories = [...new Set(categories)]
/* console.log("AllCategories",AllCategories); */
  const classes = useStyles();
  useEffect(() => {
      dispatch(getProducts());



    }, []); 
/*   useEffect(() => {
    setMyCategory(category)

console.log("category",category);
    }, []);  */

    const [valueSort, setValueSort] = useState("انتخاب کنید")
    const [sortParam, setSortParam] = useState('id')
    const [order, setOrder] = useState('desc')
    const [empty, setEmpty] = useState([])
    const handleSort = (e) => {
        setValueSort(e.target.value)
/*         if (e.target.value === 'جدید ترین') {
            setSortParam('id')
            setOrder('desc')
        }
        if (e.target.value === "قدیمی ترین") {
            setSortParam('id')
            setOrder('asc')
        } */
        if (e.target.value === "گران ترین") {
          setData(products.sort((item1,item2)=>item2.price-item1.price))
/*             setSortParam('price')
            setOrder('desc') */
        }
        if (e.target.value === "ارزان ترین") {
          setData(products.sort((item1,item2)=>item1.price-item2.price))
/*             setSortParam('price')
            setOrder('asc') */
        }
        if (e.target.value === "انتخاب کنید") {
          setData(products)
/*             setSortParam('price')
            setOrder('asc') */
        }

    }

    useEffect(() => {
        
      if (search !== '') {
         /*  console.log("search"); */
          const filteredData = products.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
         /*  console.log(filteredData); */
          
          setEmpty(filteredData)
          setData(filteredData)

      } else {

          setData(products)
          setEmpty(products)
      }
     
  }, [ search, products,sortParam,order,valueSort])

const [currentPage, setCurrentPage] = useState(1)
const [postsPerPage, setPostsPerPage] = useState(10)
const handlePageClick = (e) => {
  const selectedPage = e.selected;
  // console.log(selectedPage);
  setCurrentPage(selectedPage + 1)
}

useEffect(() => {
  const categoryPosts=[];
  data?.filter((person)=>person.category===category)?.map((filtered)=>{
/*     for (let i = 0; i <= filtered.length; i++) { */
      categoryPosts.push(filtered)
      console.log("categoryPosts",categoryPosts);
     
/*       
    } */
   
  })
  setProductsCategory(categoryPosts)
  console.log("ProductsCategory",productsCategory);
}, [products,data,valueSort])

/* cusom pagination */

      const indexOfLastPost=currentPage * postsPerPage;
      const indexOfFirstPost=indexOfLastPost- postsPerPage;
      const currentPosts=productsCategory?.slice(indexOfFirstPost,indexOfLastPost)
      const pageCount = Math.ceil(Number(productsCategory?.length/postsPerPage) )
/*   getChangeList().then(res => {
    console.log("res",res);
    setData(res.data)
}) */

    return (
        <>
           {/*  <Link  >    <Typography variant="h4" style={{display:"flex",alignItems:"center",marginBottom:"30px"}}>{category} <ArrowLeftIcon style={{fontSize:"30px"}}  /></Typography>   </Link> */}
           {/*  <div className={classes.container} > */}
           
      
          {/*  <Grid container  justify="center"> */}
          <Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>
           <Grid container /* justify="center" */   spacing={3}>
          
             <Grid item xs={12} spacing={1} justify="center" className={classes.searchContainer}>
           
{/*              <Input
                                    
                                    placeholder="جستجو... "
                                    color="primary"
                                    className={classes.search}
                                    
                                    name="جستجو"
                                    onChange={(e) => setSearch(e.target.value)}
                                /> */}
                                          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
            onChange={(e) => setSearch(e.target.value)}
              placeholder="جستجو..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
                               {/*  <TextField  className={classes.search} id="outlined-search" label="جستجو ..." type="search" variant="outlined"   onChange={(e) => setSearch(e.target.value)}/> */}

<Select
                                       
                                      native
                                       value={valueSort}
                                       className={classes.select}
                                       onChange={(e) => handleSort(e)}
                                       label="جدیدترین"
                                      /* defaultValue="انتخاب کنید" */
                                   >
                                       <option value={'انتخاب کنید'}>
                                          انتخاب کنید
                                       </option>
                                       <option value={"گران ترین"}>گران ترین</option>
                                       <option value={"ارزان ترین"}>ارزان ترین</option>
                                   </Select>
             </Grid>
            {empty?.length!==0&&<Link /* href="/AllProductsInGroup" */ >    <Typography variant="h4" style={{display:"flex",alignItems:"center",marginBottom:"30px"}}>{category} <ArrowLeftIcon style={{fontSize:"30px"}}  /></Typography>   </Link>} 

             <Grid container justify="center" xs={12}>

             {empty?.length===0&& <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}> <img src={NoResult} alt="" className={classes.img}/><Typography variant="h4" component="h4" color="error" align="center">کالایی یافت نشد !</Typography></div>}
            
            {currentPosts?.filter((person)=>person.category===category)?.map((filtered)=>{
             /*  console.log("filtered",filtered); */
              return(
                <Link href={`/AllProductsInGroup/${filtered.id}`}>

                <ProductCard item={filtered}/>
                </Link>
              )
            }
                       

                       )} 

                        </Grid>
                        <ReactPaginate
                                previousLabel={"قبلی →"}
                                nextLabel={"بعدی ←"}
                                
                                pageCount={pageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={handlePageClick}
                                containerClassName={classes.pagination}
                                activeLinkClassName={classes.pagination_active}
                                pageLinkClassName={classes.pagination_a}
                                nextClassName={classes.pagination_a}
                                previousClassName={classes.pagination_a}
                                disabledClassName={classes.pagination_disable}
                                />
                                 </Grid>

         </Grid>
       {/*   </div> */}
        </>
    )
}

export default ProductCategory;
