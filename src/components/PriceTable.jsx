import React,{useState,useEffect} from 'react';
import { DataGrid,GridFooterContainer,GridFooter, getThemePaletteMode } from '@material-ui/data-grid';

import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import {update,addAproduct}from "../api/products"
import {Button,Paper,TableContainer,makeStyles,Container} from "@material-ui/core"
import {addProduct,getProducts,deleteproduct,editItem}from "../redux/actions/productActions"
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

];

const useStyles = makeStyles((theme)=>{
      return{


  root: {
    minWidth: 650,
    width:"80%",
/*     height:"100%", */
    margin:"auto",

/*     direction:"lt", */
/*     '& .MuiDataGrid-cell--editable': {
      backgroundColor,
    }, */
    '& .super-app-theme--cell': {
      "&:nth-of-type(odd)": {
        backgroundColor: "#c6cffe",
      },
      "&:nth-of-type(even)": {
        backgroundColor: "#e0e4fa",
      },
/*       backgroundColor: 'rgba(224, 183, 60, 0.55)',
      color: '#1a3e72',
      fontWeight: '600', */
    },
    '& .header':{
      backgroundColor:"#6980fc"
    }
    
  },
  paper: {
    width: "90%",
    display:"flex",
    // height:"200px",
    // margin: theme.spacing(5),
    // padding: theme.spacing(3)
    margin: "20px auto",
    // background:"lightgray"

  },
}
}
)
  ;  


export default function DataGridDemo() {
  const classes = useStyles();
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    const [updatedata, setupdatedata] = useState([])
    useEffect(() => {

        dispatch(getProducts());
      }, []); 
    const handleEditCellChange = ({ id, field, props }) => {

      let updatedObj = { field, value: props.value }
      // console.log(updatedObj);
      let obj = products.filter((item) => item.id === id)
  
      if (updatedObj.field === "amount") {
  
        obj[0].amount = updatedObj.value
  
      } else {
        obj[0].price = updatedObj.value
      }
  
      setupdatedata([...updatedata, ...obj])
  
    }
    const handleEdit = () => {
      Promise.all(updatedata.map(product => update(product.id, product)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
      ))
    }
  return (

   

    <div   style={{ height: 400, width: '80%',marginTop:"20px" }} className={classes.root}>
                  <Button /* className={classes.btn} */
                  variant="contained"
                  color="primary"
              onClick={handleEdit}
              disabled={updatedata.length === 0}
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

        /* icons={DeleteIcon} */
       /*  components={{
          Footer:CustomFooter,
        }}
        componentsProps={{footer:{footerProps:selectedrow}}}
        onRowSelected={(e)=>
          setSelectedrow(e.data.id)}
          onSelectionModelChange={(e)=>setSelectedrow(e.data)} */
      />
</div>


  );
}
