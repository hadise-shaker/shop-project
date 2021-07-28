import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input"
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import NativeSelect from "@material-ui/core/NativeSelect"
import { useDispatch } from "react-redux";
import {addProduct,getProducts,editItem,editProduct}from "../redux/actions/productActions"
import MenuItem from '@material-ui/core/MenuItem';
import CancelIcon from '@material-ui/icons/Cancel';
import {COLORS}from "../styles/constantsVariables"
import Avatar from '@material-ui/core/Avatar';
import Box from "@material-ui/core/Box"
import Fab from "@material-ui/core/Fab";
import { ToastContainer, toast } from "react-toastify";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import { useFilePicker } from "use-file-picker";
const MainModal = ({ openModal, handleClose , selectedProduct , option}) => {


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
          minWidth:"20%"
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
  console.log(selectedProduct);
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [title, setTitle] = useState(selectedProduct.title);
  const [category, setCategory] = useState(selectedProduct.category);
  const [description, setDescription] = useState(selectedProduct.description);
  const [image, setImage] = useState(selectedProduct.image);
/*   const [price, setPrice] = useState(selectedProduct.price);
  const [number, setNumber] = useState(selectedProduct.number); */
  const dispatch = useDispatch();
/*   let imageUrl ;

  const [openFileSelector, { filesContent, loading, errors }] = useFilePicker({
    readAs: "DataURL",
    accept: "image/*",
    multiple: true,
    limitFilesConfig: { max: 2 },
    maxFileSize: 50 ,
  }); */
  
/* const uploadImage =()=>{
  openFileSelector();
  console.log(filesContent.content);
  // imageUrl = filesContent[0];
  filesContent.map((index,file)=>{
    imageUrl+=file.content;
  })
  console.log(imageUrl);
  setImage(imageUrl);
  } */
  const handleSave = (id)=>{
/*     let product = {
        "id":action.id,
        "title":title, 
        "category":category,
        "image":image,
      } */
      let updatedProductObj={...selectedProduct, title,image:filesContent[0]?.content || image ,category,description};
    {option?      
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
         /*  window.location.reload() */
          

        
     
    }
    dispatch(getProducts())
;
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
  

  
/*   const onImageChange=(event)=>{
    if (event.target.files&& event.target.files[0]) {
      let img = event.target.files[0];
      setImage(URL.createObjectURL(img))
    }
  } */

  const [openFileSelector, { filesContent }] = useFilePicker({
    readAs: "DataURL",
    accept: "image/*",
    multiple: true,
    // limitFilesConfig: { max: 1 },
    // minFileSize: 0.1, // in megabytes
    // maxFileSize: 50,
    // imageSizeRestrictions: {
    //   maxHeight: 900, // in pixels
    //   maxWidth: 1600,
    //   minHeight: 600,
    //   minWidth: 768,
    // },
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

          {/* <input placeholder="قیمت" value={price} onChange={(e)=>setPrice(e.target.value)}/> */}
          
          <TextField className={classes.root} label="توضیحات" value={description} onChange={(e)=>setDescription(e.target.value)} fullWidth/>
{/*           <TextField className={classes.root} label="قیمت" value={price} onChange={(e)=>setPrice(e.target.value)} fullWidth/>
          <TextField className={classes.root} label="تعداد" value={number} onChange={(e)=>setNumber(e.target.value)} fullWidth/> */}
{/*           <TextField
                  variant="outlined"
                  name="image"
                  // margin="normal"
                  // disabled
                  className={classes.input}
                  fullWidth
                  value={image}
                  onChange={(e) => setImage(e.target.value)}

                /> */}
{/*                 <TextField                   value={image}
                  onChange={(e) => setImage(e.target.value)}> */}
               {/*  <Avatar src={image}   variant="square" className={classes.image} /> */}
{/*                 </TextField> */}
         
{/*           <img src={image}/> */}
         
          <div className={classes.input}>

              <TextField
                  variant="outlined"
                  name="image"
                  className={classes.image} 
                  // margin="normal"
                  // disabled
                  /* type="file" */
                  className={classes.input}
                  defaultValue={image}
                  /* fullWidth */
                  onChange={(e) => setImage(e.target.value)}
                  /* value={image} */
                 
/*                   onClick={() => {
                    openFileSelector();
                  }} */

                />
             <label htmlFor="btn-upload">
{/*              <Fab component="span" className={classes.button}>
                <AddPhotoAlternateIcon />
              </Fab> */}
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
{/*                 <option>
                {category}
                </option> */}
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
{/*                 <ImageUpload 
                    handleImageSelect={handleImageSelect}
                    imageSrc={image}
                    setImageSrc={setImage}
                    style={{
                        width: 120,
                        height: 120,
                        background: 'blue',
                        // marginLeft: "200%",
                    }}
                    /> */}

          <Button   variant="contained"  color="primary" onClick={()=>handleSave(selectedProduct.id)}> ذخیره</Button>
        </form>
        
      </div>
      </Modal>
    </div>
  );
};
export default MainModal;
