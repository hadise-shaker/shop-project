import React,{useEffect,useState} from 'react'
import ProductsTable from "../../components/AdminManagment/ProductsTable"
import { useDispatch, useSelector } from "react-redux";
import MainModal from "../../components/Modals/MainModal"
import {getProducts}from "../../redux/actions/productActions"
import Loading from '../../components/Loading/Loading';

const Products = () => {

 const loading=useSelector((state)=>state.allProducts.loading);
const dispatch = useDispatch();
    useEffect(() => {

        dispatch(getProducts());
      }, []); 
      const [open, setOpen] = useState(false);
      const [isEdit, setIsEdit] = useState(false)
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
        setIsEdit(true);
        setOpen(true);

        
      };
     
    
  
    return (
        <div>
            

          {loading&&<Loading/>}
          {!loading&&
            <>
              <ProductsTable edit={handleEdit} handleOpen={()=>handleOpen()} />
              {open&&
              <MainModal openModal={open} handleClose={handleClose} selectedProduct={selectedProduct} isEdit={isEdit}/>
              }

            </>
          }

        </div>
    )
}

export default Products
