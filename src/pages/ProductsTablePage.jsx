import React,{useEffect,useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Modal ,Button} from '@material-ui/core';
import ProductsTable from "../components/ProductsTable"
import Test from "../components/Test"
import AddProduct from "../components/AddProduct"
import { useDispatch, useSelector } from "react-redux";
import {addProduct,getProducts}from "../redux/actions/productActions"
const useStyles = makeStyles((theme)=>({
    table: {
      minWidth: 650,
    },
    root:{
      fontSize:"30px",
    }, 
     paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  

/*   function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  } */
const Products = () => {

 const products = useSelector((state) => state.allProducts.products);
const dispatch = useDispatch();
    useEffect(() => {

        dispatch(getProducts());
      }, []); 


      const classes = useStyles();
/*       const [modalStyle] = React.useState(getModalStyle); */
      const [open, setOpen] = React.useState(false);
    
      const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
      /* const body = (
        <div style={modalStyle} className={classes.paper}>
          <form>
            <lable>تصویر کالا</lable>
            <input onChange={(e)}/>
            <lable>نام کالا</lable>
            <input/>
            <lable>price</lable>
            <input/>
            <lable>description</lable>
            <input/>
            <lable>category</lable>
            <input/>
          </form>
          <h2 id="simple-modal-title">Text in a modal</h2>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          <button onClick={handleClose}>close</button>
        </div>
      ); */

    return (
        <div >
            
            <h1>products</h1>
            <Button variant="contained" color="primary" onClick={handleOpen}>
             افزودن کالا
           </Button>
           <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description" 
        children={<AddProduct handleClose={handleClose} />}
      >
       {/*  {body} */}
       
      </Modal>
           {/*  <TableContainer component={Paper} > */}
            <ProductsTable/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 style={{textAlign:"center"}}> TABLE TEST </h1>
            <Test/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
           {/*  </TableContainer> */}

        </div>
    )
}

export default Products
