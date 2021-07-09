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
    function rand() {
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
      }
      const [modalStyle] = React.useState(getModalStyle);
      const [title, setTitle] = useState("")
      const [price, setPrice] = useState("")
      const [description, setDescription] = useState("")
      const [category, setCategory] = useState("")
     /*  const products = useSelector((state) => state.allProducts.products); */
      const dispatch= useDispatch();
      const handleSave=(e)=>{
        e.preventDefault() ;
          dispatch(addProduct({title,price,description,category,image}))
         /*  dispatch(getProducts()) */
          window.location.reload();

      }

      const [image, setImage] = useState("")
 
      const handleImageSelect = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]))
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
                <ImageUpload 
                    handleImageSelect={handleImageSelect}
                    image={image}
                    setImageSrc={setImage}
                    style={{
                        width: 120,
                        height: 120,
                        background: 'blue',
                        // marginLeft: "200%",
                    }}
                    />
                    <br></br><br></br>
          <button type="submit"> ذخیره</button>
        </form>

        <h2 id="simple-modal-title">Text in a modal</h2>
        <p id="simple-modal-description">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </p>
        <button onClick={handleClose}>close</button>
      </div>
    )
}

export default AddProduct
