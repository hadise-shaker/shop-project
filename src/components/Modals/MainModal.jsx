import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Modal,Backdrop,TextField,InputLabel,Button,NativeSelect,Avatar} from "@material-ui/core";
import { useDispatch } from "react-redux";
import {addProduct,getProducts,editProduct}from "../../redux/actions/productActions"
import CancelIcon from '@material-ui/icons/Cancel';
import {COLORS}from "../../styles/constantsVariables"
import { ToastContainer, toast } from "react-toastify";
import { useFilePicker } from "use-file-picker";
const MainModal = ({ openModal, handleClose , selectedProduct , isEdit}) => {


    const useStyles = makeStyles((theme)=>({
        table: {
          minWidth: 650,
        },
        root:{
          fontSize:"30px",
          color: "rgba(0, 0, 0, 0.54)",
          paddingBottom: "20px",
          fontSize: "1.3rem",
          fontFamily: "B Nazanin",
          fontWeight: 400,
          lineHeight: 1,

        }, 
         paper: {
          position: 'absolute',
          minWidth: "300px",
          backgroundColor: COLORS.bg_modal,
          border: `3px  solid ${COLORS.border_modal}`,
          borderRadius:"10px",
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 2, 3),
        },
        closebtn:{
          float:"right",
          width:"8%",
          height:"8%",
          cursor:"pointer"
        },
        image:{
         width:"115px",
         height:"0%",
          margin:"auto",
          borderRadius:"10px",
          minWidth:"20%",
          textAlign:"center"
        },
        input:{
          textAlign:"center"
        },
        select:{
          marginBottom:"20px"
        },
        button: {
          color: "blue",
          margin: 10
        },
      }));
      function getModalStyle() {
      
        return {
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width:"27%"
        };
      }
      useEffect(() => {
        dispatch(getProducts());
      }, [])
/*   console.log(selectedProduct); */
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [title, setTitle] = useState(selectedProduct.title);
  const [category, setCategory] = useState(selectedProduct.category);
  const [description, setDescription] = useState(selectedProduct.description);
  const [image, setImage] = useState(selectedProduct.image);

  const dispatch = useDispatch();
  const handleSave = (id)=>{

      let updatedProductObj={...selectedProduct, title,image:filesContent[0]?.content || image ,category,description};
    {isEdit?      
        dispatch(editProduct(selectedProduct.id,updatedProductObj)).then(dispatch(getProducts()))
        :
        title && category ?
          dispatch(addProduct({
            title:title,
            category:category,
            description:description,
            image: filesContent[0]?.content,
            number:0,
            price:0
          })): toast.error("لطفا برای افزودن نام کالا و دسته بندی را مشخص نمایید");
          window.location.reload()   
    }
    dispatch(getProducts());
    handleClose();

  }
  const getBase64 = (file) => {
    return new Promise(resolve => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        console.log("Called", reader);
        baseURL = reader.result;
        console.log(baseURL);
        resolve(baseURL);
      };
      console.log(fileInfo);
    });
  };
  

  

  const [openFileSelector, { filesContent }] = useFilePicker({
    readAs: "DataURL",
    accept: "image/*",
    multiple: true,
  });
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
        <form onSubmit={(e)=>e.preventDefault()} >

          <CancelIcon  color="primary"  onClick={handleClose} className={classes.closebtn} />
          <TextField className={classes.root} label="نام کالا" value={title} onChange={(e)=>setTitle(e.target.value)} fullWidth/>
          <TextField className={classes.root} label="توضیحات" value={description} onChange={(e)=>setDescription(e.target.value)} fullWidth/>
         
          <div className={classes.input}>
          <Avatar src={image}/>

              <TextField
                  variant="outlined"
                  name="image"
                  className={classes.image} 
                  defaultValue={image}
                  onChange={(e) => setImage(e.target.value)}

                />
             <label htmlFor="btn-upload">
              <Button
                  type="button"
                  onClick={() => {
                    openFileSelector();
                  }}
                  className={classes.btnFile}
                >
                  Browse
              </Button> 
          </label>
          </div>
         
               
          <InputLabel id="demo-simple-select-label" >دسته بندی</InputLabel>


              <NativeSelect  className={classes.select} fullWidth  name="دسته بندی" value={category} onChange={(e)=>setCategory(e.target.value)}>
                <option>
                لباس مردانه
                </option>
                <option>
                 لپتاپ
                </option>
                <option>
                مانیتور
                </option>
                <option>
                لباس زنانه
                </option>
              </NativeSelect>


          <Button   variant="contained"  color="primary" onClick={()=>handleSave(selectedProduct.id)}> ذخیره</Button>
        </form>
        
      </div>
      </Modal>
    </div>
  );
};
export default MainModal;
