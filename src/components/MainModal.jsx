import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import {addProduct,getProducts,editItem,editProduct}from "../redux/actions/productActions"
import MenuItem from '@material-ui/core/MenuItem';
const MainModal = ({ openModal, handleClose , selectedProduct , option}) => {


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
      function getModalStyle() {
      
        return {
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        };
      }
  console.log(selectedProduct);
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [title, setTitle] = useState(selectedProduct.title);
  const [category, setCategory] = useState(selectedProduct.category);
  const [description, setDescription] = useState(selectedProduct.description);
  const [image, setImage] = useState(selectedProduct.image);
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
    /* if(option){
       
      dispatch(editProduct({
        title,
        category,
        description,
        image,
        id
      }))
    }
    else{
    dispatch(addProduct({
      title,
      category,
      description,
      image,
    }));
  } */
  window.location.reload();
    handleClose();

  }
/*   useEffect(() => {
            dispatch(addProduct({
        title,
        category,
        description,
        image,
      }));

  }, [        title,
    category,
    description,
    image,]) */
  
  const onImageChange=(event)=>{
    if (event.target.files&& event.target.files[0]) {
      let img = event.target.files[0];
      setImage(URL.createObjectURL(img))
    }
  }
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
        
          <TextField label="نام کالا" value={title} onChange={(e)=>setTitle(e.target.value)} fullWidth/>
          
          {/* <input placeholder="قیمت" value={price} onChange={(e)=>setPrice(e.target.value)}/> */}
          
          <TextField label="توضیحات" value={description} onChange={(e)=>setDescription(e.target.value)} fullWidth/>
          <InputLabel id="demo-simple-select-label">دسته بندی</InputLabel>
          <Select
                labelId="demo-simple-select-label"
                value={category}
                onChange={(e)=>setCategory(e.target.value)}
/*                 inputProps={{
                  name: "category",
                  id: "category",
                }} */
                fullWidth
              >
               {/*  <option aria-label="None" value=""  /> */}
                <MenuItem>{category}</MenuItem>
                <MenuItem>لباس مردانه</MenuItem>
                <MenuItem>الکترونیک</MenuItem>
                <MenuItem>جواهرات</MenuItem>
                <MenuItem>لباس زنانه</MenuItem>
              </Select>
          
       {/*    <input placeholder="دسته بندی" value={category} onChange={(e)=>setCategory(e.target.value)}/> */}
          {/* <input placeholder="عکس" value={image} onChange={(e)=>setImage(e.target.value)}/> */}
          <label>:تصویر کالا </label><br></br>
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

                    <img src={image} style={{width:"100px",height:"100px"}}/>
                    <h1>select image</h1>
                    <input type="file" name="myImage" onChange={onImageChange}/>

                    <br></br><br></br>
          <button    onClick={()=>handleSave(selectedProduct.id)}> ذخیره</button>
        </form>
        <button onClick={handleClose}>close</button>
      </div>
      </Modal>
    </div>
  );
};
export default MainModal;
