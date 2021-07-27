import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux";
import {addProduct,getProducts}from "../redux/actions/productActions"
import ImageUpload from 'image-upload-react';
import 'image-upload-react/dist/index.css';
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
const AddProduct = ({handleClose,action}) => {
    const classes = useStyles();

      function getModalStyle() {
      
        return {
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        };
      }
      const [modalStyle] = React.useState(getModalStyle);
      const [title, setTitle] = useState("")
      const [price, setPrice] = useState("")
      const [description, setDescription] = useState("")
      const [category, setCategory] = useState("")
  
      const dispatch= useDispatch();
      const handleSave=(e)=>{
        e.preventDefault() ;
          dispatch(addProduct({title,price,description,category,image})).then(dispatch(getProducts()))

      }

      const [image, setImage] = useState("")
 
/*       const handleImageSelect = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]))
      } */
      const onImageChange=(event)=>{
        if (event.target.files&& event.target.files[0]) {
          let img = event.target.files[0];
          setImage(URL.createObjectURL(img))
        }
      }
    return (
        <div style={modalStyle} className={classes.paper}>
        <form onSubmit={handleSave} >
        
          <input placeholder="نام کالا" value={title} onChange={(e)=>setTitle(e.target.value)}/>
          
          <input placeholder="قیمت" value={price} onChange={(e)=>setPrice(e.target.value)}/>
          
          <input placeholder="توضیحات" value={description} onChange={(e)=>setDescription(e.target.value)}/>
          
          <input placeholder="دسته بندی" value={category} onChange={(e)=>setCategory(e.target.value)}/>
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

                    <img src={image}/>
                    <h1>select image</h1>
                    <input type="file" name="myImage" onChange={onImageChange}/>

                    <br></br><br></br>
          <button type="submit"> ذخیره</button>
        </form>
        <button onClick={handleClose}>close</button>
      </div>
    )
}

export default AddProduct
