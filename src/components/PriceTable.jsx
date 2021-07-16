import React,{useState,useEffect} from 'react';
import { DataGrid,GridFooterContainer,GridFooter } from '@material-ui/data-grid';
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import {Button} from "@material-ui/core"
import {addProduct,getProducts,deleteproduct,editItem}from "../redux/actions/productActions"
const columns = [
  { field: 'id', headerName: 'شماره ردیف', width: 250 },
  {
    field: 'title',
    headerName: 'نام محصول',
    width: 250,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'قیمت',
    type:'number',
    width: 150,
    editable: true,
  },
/*   {
    field: 'category',
    headerName: 'دسته بندی',
    width: 250,
    editable: true,
  }, */
/*   {
    field: 'number',
    headerName: 'موجودی',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,

  }, */
];



export default function DataGridDemo() {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(getProducts());
      }, []); 
    console.log("products",products);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={products}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
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
