import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from "react-redux";
import {addProduct,getProducts,deleteproduct,editItem}from "../redux/actions/productActions"
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Header from "../components/Header"
import Grid from "@material-ui/core/Grid"
import {COLORS} from "../styles/constantsVariables"
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import Link from '@material-ui/core/Link';
import ProductCard from "../components/ProductCard"
const useStyles = makeStyles((theme) => ({
    root1: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
/*     drawer: {
      width: drawerWidth,
      flexShrink: 0,
    }, */
/*     drawerPaper: {
      width: drawerWidth,
    }, */
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
       backgroundColor:` ${COLORS.bg_modal}`,
  /*         height: "600px", */
       alignItems:"center",
       justifyContent:"center",
       borderRadius:"15px",
       maxHeight:"100%",
       maxWidth:"100%",
  
   },
   root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  }));
function TabPanel(props) {

    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(getProducts());
/*         fetchProduct(); */
      }, []); 
      console.log("props",props);
  const classes = useStyles();
  const { children, value, index, ...other } = props;
  const products = useSelector((state) => state.allProducts.products);
  const categories = products.map((cat,i)=>cat.category);
  let AllCategories = [...new Set(categories)]

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <>
          
{/*           <Link href="/AllProductsInGroup" >    <Typography variant="h4" style={{display:"flex",alignItems:"center",padding:"30px 10px 20px 0"}}>{AllCategories[0]} <ArrowLeftIcon style={{fontSize:"30px"}}  /></Typography>   </Link>
        <div className={classes.container} >
           
            <br></br>
       
            <Grid container  justify="center" >
            <Grid container justify="center" item xs={12} spacing={3}> */}
            {products.filter(person=>person.category===props.data[0])?.map(filtered=>
                       
            
      <ProductCard item={filtered}/>
           
      )} 
{/*           </Grid>
         </Grid>
         </div> */}
        </>
      )}
      
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  data:PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

/* const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
})); */

export default function VerticalTabs({data}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
      </Tabs>
      <TabPanel data={data} value={value} index={0}>
      {/*  {data} */}
       Item one
       { console.log("data",data)}
      </TabPanel>
      <TabPanel data={data} value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel data={data} value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel data={data} value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel data={data} value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel data={data} value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel data={data} value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}