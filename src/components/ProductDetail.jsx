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
import { addToCart,increaseAmount,setCount} from "../redux/actions/cart.reducer";
/* import {AddCart,increaseAmount} from "../redux/actions/cartActions" */
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: "80%",
    padding: "10px",
    justifyContent:"center",
    alignItems:"center",
    border: "2px solid",
    /* border:`3px solid ${COLORS.mainColor}`, */
/*     margin:"0 0 10px 10px", */
/*     backgroundColor:"aqua", */
/*     backgroundImage: "linear-gradient(180deg, #b06ab3,#4568dc)", */

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
    width: "30%",
   /*  height:"400px", */
   border:"2px solid black",
   boxShadow: "0px 0px 7px 5px #ca7c1c",
   /* padding:"10px" */
   marginLeft:"20px",
   height: "50%",
   borderRadius: "10px",
   /* align-items: center; */
   alignSelf: "center",
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
  },
  container:{
    width: "75%",
    display: "flex",
    flexWrap: "wrap",
    boxSizing: "border-box",

    margin: "20px 20px",


  },
  container2:{
/*     border: "2px solid", */
    textAlign:"center"
  }
}));
const ProductDetail = ({image,title,description,action}) => {
  const classes = useStyles();
  const history = useHistory()
  const theme = useTheme()
  const { id } = useParams();
/*   const [count, setCount] = useState(0); */
  const [amount1, setAmount1] = useState(1)
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
    const cart = useSelector((state) => state.cart.cart)
    const count = useSelector(state => state.cart.count)
    console.log("cart",cart);
    const handleAddToCartClick = () => {

      console.log("count",count);
      dispatch(setCount(count+1))
      const {id, image, title, price,number} = product
      const item = cart.find(item => item.id === id)
      if (item) {
          cart.map(item => item.id === id && dispatch(increaseAmount(item.id)))
      } else {
          const newItem = {id, image, title, price, number: amount1}
          dispatch(addToCart(newItem))
          
      }
/*       history.push("/cart") */
  }


    return (
      <>
     {/*  <Header count={count}/> */}
      <br></br>

{/*         <Grid container spacing={3}> */}
{/*           <Grid item xs={12}> */}

          <div style={{display:"flex",width:"70%",margin:"auto"}}>

          
{/*           <Card className={classes.root}> */}
{product?.image? <img className={classes.cover} src={product?.image}/>
:

null
}
<Grid className={classes.container} container  justify="center">
           <Grid className={classes.container2} container justify="center" item xs={12} spacing={4} >
<Card className={classes.root} >

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
              {product?.price?  (Number(product?.price)).toLocaleString() : " - "}
           {/*  {(Number(product?.price)).toLocaleString()} */}
               تومان
            </Typography>
            <Typography className={classes.space} variant="h4" >
            
            <Input type="number"
             onChange={(e)=>setAmount1(e.target.value)} 
             inputProps={{
             
                max: product?.number, min: 1 
                    
                }}    
          onkeydown={(e) => {
               e.preventDefault();
                    }}
           onKeyPress={(e) => {
               e.preventDefault();
               }} 
            /* InputProps={{
                inputProps: { 
                  max: product?.number, min: 0 
                        }
                  }}    
            onkeydown={(e) => {
                 e.preventDefault();
                      }}
             onKeyPress={(e) => {
                 e.preventDefault();
                 }}  */
                /*  defaultValue={1} */
                 value={amount1}
                  className={classes.input}/>
            </Typography>
           

            <Button disabled={product?.number==="0"} onClick={handleAddToCartClick}

             className={classes.btn} variant="contained" color="primary">

            <AddCircleIcon/>افزودن به سبد خرید
             
            </Button>
           
{product?.number ==="0"? <Typography variant="h5" component="h5" style={{color:"red"}}>اتمام موجودی</Typography> : null}
          </CardContent>

        </div>


      </Card>
      </Grid>
         </Grid>
         </div>
        </>
    )
}

export default ProductDetail
