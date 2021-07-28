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
/*     display: 'flex',
    width: "80%", */
    /* minWidth:400, */
    padding: "10px",
    boxShadow:"-2px 7px 13px 10px #c3c3c3",
/*     justifyContent:"center", */
/*     alignItems:"center", */
   /*  border: "2px solid", */
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
    width: "77%",
/*     height:"100%", */
/*    border:"2px solid black", */
   boxShadow:"-2px 7px 13px 10px #c3c3c3",
   /* padding:"10px" */
  /*  marginLeft:"20px", */
   borderRadius: "10px",
   alignItems: "center",
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
    width: "100%",
/*     display: "flex",
    flexWrap: "wrap",
    boxSizing: "border-box",
    alignItems:"center" */
margin:"5% auto"
   /*  margin: "20px 20px", */


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
      {/* <br></br> */}

{/*         <Grid container spacing={3}> */}
{/*           <Grid item xs={12}> */}

         {/*  <div style={{display:"flex",width:"70%",margin:"auto"}}> */}

         <Grid className={classes.container} container  justify="center">
{/*           <Card className={classes.root}> */}
<Grid item xs={6} md={3} /* sm={3} */ spacing={3} >
{product?.image? <img className={classes.cover} src={product?.image}/>
:

null
}

</Grid>
<Grid item xs={12} md={3} >
<Card className={classes.root} >

   {/*  <img className={classes.cover} src={product?.image}/> */}
       {/*  <div className={classes.details}> */}
          <CardContent className={classes.content}>
            <Typography className={classes.space} component="h4" variant="h4">
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
           

            <Button disabled={product?.number===0} onClick={handleAddToCartClick}

             className={classes.btn} variant="contained" color="primary">

            <AddCircleIcon/>افزودن به سبد خرید
             
            </Button>
           
{product?.number ===0? <Typography variant="h5" component="h5" style={{color:"red"}}>اتمام موجودی</Typography> : null}
          </CardContent>

        {/* </div> */}


      </Card>
      </Grid>
      <Grid item xs={12} style={{ boxShadow:"-2px 7px 13px 10px #c3c3c3",padding:"20px",marginTop:"10px"}} spacing={1}>
      <Typography variant="h3" component="h3" >
        توضیحات:

        </Typography>
      <Typography variant="h5" component="h5" >
       
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </Typography>
      </Grid>

</Grid> 



       {/*   </Grid> */}
        {/*  </div> */}
        </>
    )
}

export default ProductDetail
