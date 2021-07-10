import React,{useEffect,useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Modal ,Button} from '@material-ui/core';
import ProductsTable from "../components/ProductsTable"
import Test from "../components/Test"
import AddProduct from "../components/AddProduct"
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
const Products = () => {

 const products = useSelector((state) => state.allProducts.products);
const dispatch = useDispatch();
    useEffect(() => {

        dispatch(getProducts());
      }, []); 


      const classes = useStyles();
      const [modalStyle] = React.useState(getModalStyle);
      const [open, setOpen] = React.useState(false);
      const [open2, setOpen2] = useState(false);
      const [selected, setSelected] = useState();
    
      const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
      const handleOpen2 = (row) => {
        setOpen2(true);
        setSelected(row);

        
      };
    
      const handleClose2 = () => {
        setOpen2(false);
      };
      /* const body = (
        <div style={modalStyle} className={classes.paper}>
          <form>
            <lable>تصویر کالا</lable>
            <input onChange={(e)}/>
            <lable>نام کالا</lable>
            <input/>
            <lable>price</lable>
            <input/>
            <lable>description</lable>
            <input/>
            <lable>category</lable>
            <input/>
          </form>
          <h2 id="simple-modal-title">Text in a modal</h2>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          <button onClick={handleClose}>close</button>
        </div>
      ); */
      function setdisplay() {
        return{
          width:"100%"
        }
        
      }
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

        let product = {
            "id":selected.id,
            "title":title, 
            "category":category,
            "image":image,
          }


            update(product);

          dispatch(editItem(product));
          dispatch(getProducts());
/*           window.location.reload() */
      setOpen2(false);
  }
    return (
        <div >
            
            <h1>products</h1>
            <Button variant="contained" color="primary" onClick={handleOpen}>
             افزودن کالا
           </Button>
           <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description" 
        children={<AddProduct handleClose={handleClose} />}
      >
       {/*  {body} */}
       
      </Modal>

           {/*  <TableContainer component={Paper} > */}
            <ProductsTable action={handleOpen2}/>


            <Modal        
        open={open2}
        onClose={handleClose2}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description" >

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

      </Modal>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 style={{textAlign:"center"}}> TABLE TEST </h1>
            <Test/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
           {/*  </TableContainer> */}

        </div>
    )
}

export default Products
