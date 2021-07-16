import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import {addProduct,getProducts,editItem,editProduct}from "../redux/actions/productActions"
import MenuItem from '@material-ui/core/MenuItem';
import UserProductTable from "./UserProductTable"
const MainModal = ({ openModal,handleClose,selectedProduct}) => {
/*   const orders = useSelector((state) => state.userOrders); */

    const useStyles = makeStyles((theme)=>({
        table: {
          minWidth: 650,
        },
        root:{
          fontSize:"30px",
        }, 
         paper: {
          position: 'absolute',
          /* width: 400, */
          backgroundColor: theme.palette.background.paper,
          border: '2px solid #000',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
        },
      }));
      function getModalStyle() {
      
        return {
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        };
      }
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
/*   const [title, setTitle] = useState(selectedProduct.title);
  const [category, setCategory] = useState(selectedProduct.category);
  const [description, setDescription] = useState(selectedProduct.description);
  const [image, setImage] = useState(selectedProduct.image);
  const dispatch = useDispatch(); */
  /* const handleSave = (id)=>{
    {option?      
        dispatch(editProduct({
        title,
        category,
        description,
        image,
        id
      })):
      dispatch(addProduct({
        title,
        category,
        description,
        image,
      }));
    }
    
  window.location.reload();
    handleClose();

  } */

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        /* children={<UserProductTable products={selectedProduct.products}/>} */
      >
         <div style={modalStyle} className={classes.paper}>
         <UserProductTable products={selectedProduct.products}/>
        <form /* onSubmit={(e)=>e.preventDefault()} */ >
        
        <h1 >
          نام مشتری :  {selectedProduct.username}
      </h1>
      <h1 >
        آدرس :  {selectedProduct.address}
      </h1>
      <h1 >
        تلفن : {selectedProduct.phone}
      </h1>
      <h1 >
        زمان تحویل :{selectedProduct.handleTime}
      </h1>
      <h1 >
       زمان سفارش :{selectedProduct.ordertime}
      </h1>   
         {/*  <button    onClick={()=>handleSave(selectedProduct.id)}> ذخیره</button> */}
        </form>
        {/* <button onClick={handleClose}>close</button> */}
       
      </div>
      
      </Modal>
      
    </div>
  );
};
export default MainModal;
