import React, { useEffect,useState } from "react";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import {useParams} from "react-router-dom";
import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import {Card,CardContent,Typography,Button,Grid,Input} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { addToCart,increaseAmount,setCount} from "../../redux/actions/cart.reducer";
const useStyles = makeStyles((theme) => ({
  root1: {
    padding: "10px",
    border:"none",
    transition: "backgroundImage 0.2s linear",

  },
  elevation1:{
    boxShadow:"none",
    textAlign:"center",
    background:"transparent"
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
    background:"transparent"
  },
  cover: {
    backgroundColor:"pink",
    width: "77%",
    borderRadius: "10px",
    alignItems: "center",
    alignSelf: "center",
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
    margin:"5% auto"


  },
  container2:{

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
const ProductDetail = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
  

         <Grid className={classes.container} container >
            <Grid item xs={6} md={3} spacing={3} >
                {product?.image? <img className={classes.cover} src={product?.image}/>
                  :   
                  null
                }

            </Grid>
            <Grid item xs={12} md={3} >
                  <Card className={classes.elevation1} >
                      <CardContent className={classes.content}>
                        <Typography className={classes.space} component="h4" variant="h4">
                            {product?.title}
                        </Typography>
                        <Typography className={classes.space} component="h5" variant="h5">
                            {product?.category}
                        </Typography>
                        <Typography className={classes.space} variant="h4" >
                            {product?.price?  (Number(product?.price)).toLocaleString() : " - "}
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
                              value={amount1}
                              className={classes.input}/>
                        </Typography>
           

                          <Button disabled={product?.number===0} onClick={handleAddToCartClick}className={classes.btn} variant="contained" color="primary">

                            <AddCircleIcon/>افزودن به سبد خرید
             
                          </Button>
           
                          {product?.number ===0? <Typography variant="h5" component="h5" style={{color:"red"}}>اتمام موجودی</Typography> : null}
                      </CardContent>



              </Card>
             </Grid>
          <div className={classes.root}>
            <AppBar position="static" color="default">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                aria-label="scrollable prevent tabs example"
              >

                <Tab  label="توضیحات"   aria-label="help" {...a11yProps(0)} />
          

              </Tabs>
            </AppBar>
                <TabPanel value={value} index={0}>
                      {product?.description}
                </TabPanel>
          </div>

      </Grid> 

        </>
    )
}

export default ProductDetail
