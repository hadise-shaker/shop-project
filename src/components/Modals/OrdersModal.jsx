import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import {COLORS}from "../../styles/constantsVariables"
import CancelIcon from '@material-ui/icons/Cancel';
import { useDispatch, useSelector } from "react-redux";
import {addProduct,getProducts,editItem,editProduct}from "../../redux/actions/productActions"
import MenuItem from '@material-ui/core/MenuItem';
import ModalTableProduct from "../AdminManagment/ModalTableProduct"
import Typography from "@material-ui/core/Typography"
const OrdersModal = ({ openModal,handleClose,selectedProduct,isDeliver,action}) => {
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
          backgroundColor: COLORS.bg_modal,
          border: `2px solid ${COLORS.border_modal}`,
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
          borderRadius:"10px"
        },
        closebtn:{
          float:"right",
          width:"5%",
          height:"6%",
          cursor:"pointer",
          fontSize:"22px"
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
      >
         <div style={modalStyle} className={classes.paper}>
        
        <form  >
            <CancelIcon  color="primary"  onClick={handleClose} className={classes.closebtn} />
            <Typography component="h5" variant="h5" >
              نام مشتری :  {selectedProduct.username}
            </Typography>
            <Typography component="h5" variant="h5">
              آدرس :  {selectedProduct.address}
            </Typography>
            <Typography component="h6" variant="h6">
              تلفن : {selectedProduct.phone}
            </Typography>
            <Typography component="h6" variant="h6">
              زمان تحویل :{selectedProduct.handleTime}
            </Typography>
            <Typography component="h6" variant="h6">
              زمان سفارش :{selectedProduct.ordertime}
            </Typography>   

        </form>
        <ModalTableProduct products={selectedProduct.products}/>
        {isDeliver&&<Button onClick={action} variant="contained" color="primary" >تحویل شد</Button>}
      </div>
      
      </Modal>
      
    </div>
  );
};
export default OrdersModal;
