import React,{useEffect,useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Modal ,Button} from '@material-ui/core';
import ProductsTable from "../components/ProductsTable"
import AddProduct from "../components/AddProduct"
import EditProduct from "../components/EditProduct"
import { useDispatch, useSelector } from "react-redux";
import {update,addAproduct}from "../api/products"
import MainModal from "../components/MainModal"
import {addProduct,getProducts,deleteproduct,editItem}from "../redux/actions/productActions"
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
  


const Products = () => {

 const products = useSelector((state) => state.allProducts.products);
const dispatch = useDispatch();
    useEffect(() => {

        dispatch(getProducts());
      }, []); 


      const classes = useStyles();
/*       const [modalStyle] = React.useState(getModalStyle); */
      const [open, setOpen] = useState(false);
      const [open2, setOpen2] = useState(false);
      const [option, setOption] = useState(false)
      const [selected, setSelected] = useState();
      const [selectedProduct, setSelectedProduct] = useState({
        title:"",
        category:"",
        description:"",
        image:"",
      });
      const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
      const handleEdit = (row) => {
        setSelectedProduct(row);
        setOption(true);
        setOpen(true);

        
      };
    
/*       const handleClose2 = () => {
        setOpen2(false);
      }; */
  
    return (
        <div >
            


           <ProductsTable action={handleEdit} handleOpen={()=>handleOpen()} />
{/*            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description" 
        children={<AddProduct handleClose={handleClose} />}
      >

       
      </Modal> */}
{open&&(<MainModal openModal={open} handleClose={handleClose} selectedProduct={selectedProduct} option={option}/>)}
         


        </div>
    )
}

export default Products
