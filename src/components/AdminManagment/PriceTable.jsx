import React,{useState,useEffect} from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useDispatch, useSelector } from "react-redux";
import {update}from "../../api/products"
import {Button,makeStyles,} from "@material-ui/core"
import {getProducts}from "../../redux/actions/productActions"
const columns = [
  { 
    field: 'id',
     headerName: 'شماره ردیف', 
     flex:0.5,
      cellClassName: 'super-app-theme--cell',  
      headerClassName:"header",
        headerAlign: 'left', 
  },
  {
    field: 'title',
    headerName: 'نام محصول',
    /* width: 250, */
    flex:0.5,
    editable: false,
    headerClassName:"header",
    cellClassName: 'super-app-theme--cell',
        headerAlign: 'left',
  },
  {
    field: 'price',
    headerName: 'قیمت',
    type:'number',
    /* width: 150, */
    editable: true,
    headerClassName:"header",
    cellClassName: 'super-app-theme--cell',
    flex:0.5,
    headerAlign: 'left',
    align:"left"
  },
  {
    field: 'number',
    headerName: 'تعداد',
    type:'number',
    /* width: 150, */
    editable: true,
    headerClassName:"header",
    cellClassName: 'super-app-theme--cell',
    flex:0.5,
    headerAlign: 'left',
    align:"left"
  },

];

const useStyles = makeStyles((theme)=>{
      return{


  root: {
    minWidth: 650,
    width:"80%",
    margin:"auto",
    height: 400,
     width: '80%',
     marginTop:"20px",

    '& .super-app-theme--cell': {
      "&:nth-of-type(odd)": {
        backgroundColor: "#c6cffe",
      },
      "&:nth-of-type(even)": {
        backgroundColor: "#e0e4fa",
      },
    },
    '& .header':{
      backgroundColor:"#6980fc"
    }
    
  },
  paper: {
    width: "90%",
    display:"flex",
    margin: "20px auto",  
  },
}})
  ;  


export default function DataGridDemo() {
  const classes = useStyles();
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    const [editedData, setEditedData] = useState([])
    useEffect(() => {

        dispatch(getProducts());
      }, []); 


    const handleEditCellChange = ({ id, field, props }) => {

      let updatedObj = { field, value: props.value }
      let obj = products.filter((item) => item.id === id)
      if (updatedObj.field === "number") {
        obj[0].number = updatedObj.value
      } else {
        obj[0].price = updatedObj.value
      }
      setEditedData([...editedData, ...obj])
    }
    const handleEdit = () => {
      Promise.all(editedData.map(product => update(product.id, product)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
      ))
    }
  return (

   

    <div  className={classes.root}>
                  <Button /* className={classes.btn} */
                    variant="contained"
                    color="primary"
                    onClick={handleEdit}
                   disabled={editedData.length === 0}
                  >
                    ذخیره
                  </Button>
            <DataGrid
              rows={products}
              columns={columns}
              pageSize={5}
              onEditCellChangeCommitted={handleEditCellChange}
              hideFooterSelectedRowCount={true}
              disableColumnMenu={true}
              pagination
      />
</div>


  );
}
