import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from "react-redux";
import {getProducts}from "../../redux/actions/productActions"
import ProductCard from "../../components/Products/ProductCard"
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Select,Link,Typography,InputBase} from "@material-ui/core"
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import SearchIcon from '@material-ui/icons/Search';
import NoResult from "../../assets/img/No_results.png"
import ReactPaginate from 'react-paginate'
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    pagination: {
      display: "flex",
      justifyContent:" space-between",
      listStyle: "none",
      cursor: "pointer",
      margin: "15px auto",
    },

    pagination_a:{
      borderRadius: "5px",
      fontWeight:"bold",
      border: "2px solid #9fceff",
      height: "40px",
      marginRight:"10px",
      padding: " 0px 12px",
    },
    pagination_active:{
      backgroundColor:"#3a9bff",
    },
    pagination_disable:{
      color: "rgb(198, 197, 202)",
      border: "1px solid rgb(198, 197, 202)",
      
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    container:{
       alignItems:"center",
       justifyContent:"center",
       borderRadius:"15px",
       maxHeight:"100%",
       maxWidth:"100%",
  
   },
   categoryTitle:{
    display:"flex",
    alignItems:"center",
    marginBottom:"30px"
   },
   searchContainer:{
     padding:"20px",
     borderRadius:"10px",
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
  },
  noResult:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center"
  }
  }));
const ProductCategory = ({category}) => { 
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const [productsCategory, setProductsCategory] = useState([])
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);
  const classes = useStyles();

  useEffect(() => {
      dispatch(getProducts());

    }, []); 


    const [valueSort, setValueSort] = useState("???????????? ????????")
    const [empty, setEmpty] = useState([])
    const handleSort = (e) => {
        setValueSort(e.target.value)
        if (e.target.value === "???????? ????????") {
          setData(products.sort((item1,item2)=>item2.price-item1.price))
        }
        if (e.target.value === "?????????? ????????") {
          setData(products.sort((item1,item2)=>item1.price-item2.price))
        }
        if (e.target.value === "???????????? ????????") {
          setData(products)
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
     
  }, [ search, products,valueSort])

const [currentPage, setCurrentPage] = useState(1)
const [postsPerPage, setPostsPerPage] = useState(10)
const handlePageClick = (e) => {
  const selectedPage = e.selected;
  setCurrentPage(selectedPage + 1)
}

  useEffect(() => {
    const categoryPosts=[];
    data?.filter((person)=>person.category===category)?.map((filtered)=>{
      categoryPosts.push(filtered)
      console.log("categoryPosts",categoryPosts);

   
    })
    setProductsCategory(categoryPosts)
}, [products,data,valueSort])

/* custom pagination */

      const indexOfLastPost=currentPage * postsPerPage;
      const indexOfFirstPost=indexOfLastPost- postsPerPage;
      const currentPosts=productsCategory?.slice(indexOfFirstPost,indexOfLastPost)
      const pageCount = Math.ceil(Number(productsCategory?.length/postsPerPage) )


    return (
        <>
          <Grid container direction="row" justifyContent="center"alignItems="center">
           <Grid container spacing={3}>
             <Grid item xs={12} spacing={1} justify="center" className={classes.searchContainer}>
               <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="??????????..."
                    classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </div>
              

                <Select
                  native
                  value={valueSort}
                  className={classes.select}
                  onChange={(e) => handleSort(e)}
                  label="????????????????"
                                     
                >
                  <option value={'???????????? ????????'}>???????????? ????????</option>
                  <option value={"???????? ????????"}>???????? ????????</option>
                  <option value={"?????????? ????????"}>?????????? ????????</option>
                </Select>
             </Grid>
            {empty?.length!==0&&
            <Link>
                <Typography variant="h4" className={classes.categoryTitle}>
                  {category} <ArrowLeftIcon style={{fontSize:"30px"}}  />
                </Typography>   
            </Link>
            } 
            <Grid container justify="center" xs={12}>

                {empty?.length===0&& 
                  <div className={classes.noResult}> 
                    <img src={NoResult} alt="" className={classes.img}/>
                    <Typography variant="h4" component="h4" color="error" align="center">???????????? ???????? ?????? !</Typography>
                  </div>
                }
            
                {currentPosts?.filter((person)=>person.category===category)?.map((filtered)=>{
                  return(
                    <Link href={`/AllProductsInGroup/${filtered.id}`}>
                      <ProductCard item={filtered}/>
                    </Link>
                    )}
                  )} 

            </Grid>
            <ReactPaginate
             previousLabel={" ???"}
             nextLabel={" ???"}
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
        </>
    )
}

export default ProductCategory;
