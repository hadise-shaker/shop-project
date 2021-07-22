import React, { useEffect,useState } from "react";
import {useParams, useHistory} from "react-router-dom";
import { getAProduct,getProducts } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Button from "@material-ui/core/Button"
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Grid from '@material-ui/core/Grid';
import Input from "@material-ui/core/Input"
import {COLORS} from "../styles/constantsVariables"
import { SettingsCellOutlined } from "@material-ui/icons";
import { addToCart,increaseAmount} from "../redux/actions/cart.reducer";
/* import {AddCart,increaseAmount} from "../redux/actions/cartActions" */
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: "100%",
    padding: "0",

    /* border:`3px solid ${COLORS.mainColor}`, */
/*     margin:"0 0 10px 10px", */
/*     backgroundColor:"aqua", */
    backgroundImage: "linear-gradient(180deg, #b06ab3,#4568dc)",

    transition: "backgroundImage 0.2s linear",
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop:"20px",
    
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: "20%",
   /*  height:"400px", */
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
  imgContainer:{
    display:"flex",
  },
  space:{
    paddingBottom:"10px"
  },
  btn:{
    fontSize:"20px",
    marginTop:"20px",
   
  },
  input:{
    fontSize:"21px",
    width:"25%"
  }
}));
const ProductDetail = ({image,title,description,action}) => {
  const classes = useStyles();
  const history = useHistory()
  const theme = useTheme()
  const { id } = useParams();
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
      useEffect(() => {

        dispatch(getProducts(id));

      }, []); 



    const selectedProduct = useSelector(
      (state) => state.allProducts.selectedProduct
    );
  
    console.log(useSelector(
      (state) => state
    ));
    console.log("selectedProduct",selectedProduct);
    const handleCountProduct = (e)=>{
      //   if(e.target.value <)
    }
    const products = useSelector((state) => state.allProducts.products)
    const product = products?.find(item => item.id === parseInt(id))
    console.log("product",products);
    const cart = useSelector((state) => state.cart.cart)
    console.log("cart",cart);
    const handleAddToCartClick = () => {
      setCount(count+1)
      const {id, image, title, price} = product
      const item = cart.find(item => item.id === id)
      if (item) {
          cart.map(item => item.id === id && dispatch(increaseAmount(item.id)))
      } else {
          const newItem = {id, image, title, price, amount: 1}
          dispatch(addToCart(newItem))
          
      }
/*       history.push("/cart") */
  }

    return (
      <>
      <Header count={count}/>
      <br></br>

{/*         <Grid container spacing={3}> */}
{/*           <Grid item xs={12}> */}

          
{/*           <Card className={classes.root}> */}
<Grid container  justify="center">
           <Grid container justify="center" item xs={12} spacing={4} >
<Card className={classes.root} >
{product?.image? <img className={classes.cover} src={product?.image}/>
:

null
}
   {/*  <img className={classes.cover} src={product?.image}/> */}
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography className={classes.space} component="h2" variant="h2">
              {product?.title}
            </Typography>
            <Typography className={classes.space} component="h5" variant="h5">
              {product?.category}
            </Typography>
            <Typography className={classes.space} variant="subtitle1" >
            {product?.description}
            </Typography>
            <Typography className={classes.space} variant="h4" >
              {product?.price} تومان
            </Typography>
            <Typography className={classes.space} variant="h4" >
            <Input type="number" defaultValue={1} onChange={(e)=>handleCountProduct(e)} className={classes.input}/>
            </Typography>
           

            <Button onClick={handleAddToCartClick}
             className={classes.btn} variant="contained" color="primary">
            <AddCircleIcon/>افزودن به سبد خرید
             
            </Button>
           
          </CardContent>

        </div>


      </Card>
      </Grid>
         </Grid>
        </>
    )
}

export default ProductDetail
