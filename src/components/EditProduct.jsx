import React,{useEffect,useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux";
import {update,addAproduct}from "../api/products"
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
const EditProduct = ({action}) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
/*     const [open2, setOpen2] = useState(false); */
    const [selected, setSelected] = useState();
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [image, setImage] = useState("")
    const onImageChange=(event)=>{
      if (event.target.files&& event.target.files[0]) {
        let img = event.target.files[0];
        setImage(URL.createObjectURL(img))
      }
    }
    const handleEditSubmit = (e) => {
      e.preventDefault() ;
console.log("action",action);
      let product = {
          "id":action.id,
          "title":title, 
          "category":category,
          "image":image,
        }


          update(product);

        dispatch(editItem(product));
        dispatch(getProducts());
          window.location.reload()
/*     setOpen2(false); */
}
function setdisplay() {
    return{
      width:"100%"
    }
    
  }
    return (
<div style={getModalStyle()} className={classes.paper}>
          افزودن/ ویرایش کالا <br></br><br></br>
            <form style={setdisplay()} noValidate autoComplete="off">
            <input placeholder="نام کالا" value={title} onChange={(e)=>setTitle(e.target.value)}/>
          
          <input placeholder="قیمت" value={price} onChange={(e)=>setPrice(e.target.value)}/>
          
          <input placeholder="توضیحات" value={description} onChange={(e)=>setDescription(e.target.value)}/>
          
          <input placeholder="دسته بندی" value={category} onChange={(e)=>setCategory(e.target.value)}/>
          <img src={image}/>
                    <h1>select image</h1>
                    <input type="file" name="myImage" onChange={onImageChange}/>

                    <br></br><br></br>
                    <button type="submit" onClick={handleEditSubmit}>ذخیره</button>
            </form>
          </div>
    )
}

export default EditProduct
