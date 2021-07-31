import React, { useEffect,useState } from "react";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Box from '@material-ui/core/Box';
import {useParams, useHistory} from "react-router-dom";
import { getAProduct,getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header"
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
import {COLORS} from "../../styles/constantsVariables"
import { SettingsCellOutlined } from "@material-ui/icons";
import { addToCart,increaseAmount,setCount} from "../../redux/actions/cart.reducer";
/* import {AddCart,increaseAmount} from "../redux/actions/cartActions" */
const useStyles = makeStyles((theme) => ({
  root1: {
/*     display: 'flex',
    width: "80%", */
    /* minWidth:400, */
    padding: "10px",
    /* boxShadow:"-2px 7px 13px 10px #c3c3c3", */
/*     justifyContent:"center", */
/*     alignItems:"center", */
   /*  border: "2px solid", */
    /* border:`3px solid ${COLORS.mainColor}`, */
/*     margin:"0 0 10px 10px", */
/*     backgroundColor:"aqua", */
/*     backgroundImage: "linear-gradient(180deg, #b06ab3,#4568dc)", */
border:"none",
    transition: "backgroundImage 0.2s linear",

  },
  elevation1:{
    boxShadow:"none",
    textAlign:"center",
  },
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    fontSize:"32px"
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
    backgroundColor:"pink",
    width: "77%",
/*     height:"100%", */
/*    border:"2px solid black", */
  /*  boxShadow:"-2px 7px 13px 10px #c3c3c3", */
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
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  };
}
const ProductDetail = ({image,title,description,action}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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

         <Grid className={classes.container} container /*  justify="center" */>
{/*           <Card className={classes.root}> */}
<Grid item xs={6} md={3} /* sm={3} */ spacing={3} >
{product?.image? <img className={classes.cover} src={product?.image}/>
:

null
}

</Grid>
<Grid item xs={12} md={3} >
<Card className={classes.elevation1} >

   {/*  <img className={classes.cover} src={product?.image}/> */}
       {/*  <div className={classes.details}> */}
          <CardContent className={classes.content}>
            <Typography className={classes.space} component="h4" variant="h4">
              {product?.title}
            </Typography>
            <Typography className={classes.space} component="h5" variant="h5">
              {product?.category}
            </Typography>
           
{/*             <Typography className={classes.space} variant="subtitle1" >
            {product?.description}
            </Typography> */}
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
     {/*  <Grid item xs={12} style={{ boxShadow:"-2px 7px 13px 10px #c3c3c3",padding:"20px",marginTop:"10px"}} spacing={1}> */}
{/*       <Typography variant="h3" component="h3" >
        توضیحات:

        </Typography> */}
        <div className={classes.root}>
        <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
         /*  variant="fullWidth" */
          aria-label="scrollable prevent tabs example"
        >

          <Tab /* style={{fontSize:"32px"}} */ label="توضیحات" /* icon={<HelpIcon />} */  aria-label="help" {...a11yProps(0)} />
          

        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      {product?.description}
      </TabPanel>
      </div>
      {/* </Grid> */}

</Grid> 



       {/*   </Grid> */}
        {/*  </div> */}
        </>
    )
}

export default ProductDetail
