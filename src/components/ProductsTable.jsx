import React,{useEffect,useState,useContext} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/productActions";

import { useParams } from "react-router-dom";

import {deleteproduct} from "../redux/actions/productActions"
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
/* import EditProduct from "./EditProduct" */
import {Table,TableBody,Modal,TableCell,TableContainer,TableHead,TableRow,Paper,Button,Avatar,TablePagination,makeStyles,withStyles} from '@material-ui/core';
const ProductsTable = ({action,handleOpen}) => {
    const products = useSelector((state) => state.allProducts.products);

const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getProducts());
      }, []);
      console.log("products:",products);
      const useStyles = makeStyles((theme)=>({
        table: {
          minWidth: 650,
          width:"80%",
          margin:"auto",
        },
        root:{
          fontSize:"30px",
          backgroundColor:"#6980fc",
          margin: "auto"
        },
        large: {
            width: theme.spacing(8),
            height: theme.spacing(8),
            margin: "auto"
          },
          pagination:{
            width:"35%"
          }
      })
      );
      const StyledTableRow = withStyles((theme) => ({
        root: {
          fontSize:"36px",
          "&:nth-of-type(odd)": {
            backgroundColor: "#c6cffe",
          },
          "&:nth-of-type(even)": {
            backgroundColor: "#e0e4fa",
          },
        },
      }))(TableRow);
      
      const classes = useStyles();
      const [page, setPage] = useState(0);
      const [rowsPerPage, setRowsPerPage] = useState(5);
    
      const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };

      const handleDeleteAProduct=(id)=>{
        dispatch(deleteproduct(id))
        dispatch(getProducts())
      }
    return (
        
        <div   style={{ height: 400, width: '100%',marginTop:"20px" }} /* className={classes.root} */>

      <Table className={classes.table} aria-label="simple table">

        <TableHead >
        <Button variant="contained" color="primary" onClick={handleOpen}>
             افزودن کالا
           </Button>
          <TableRow  className={classes.root}>
          <TableCell align="center" /* className={classes.root} */>تصویر :)</TableCell>
            <TableCell align="center" /* className={classes.root} */>نام کالا :)</TableCell>
            <TableCell align="center">دسته بندی :) </TableCell>
            <TableCell align="center">حذف </TableCell>
            <TableCell align="center">ویرایش </TableCell>
{/*             <TableCell align="right">description :) &nbsp;</TableCell>
            <TableCell align="right">category :) &nbsp;</TableCell>
            <TableCell align="right">edit :) &nbsp;</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
             {products?.slice(page*rowsPerPage,page*rowsPerPage+rowsPerPage).map((row) => (
            <StyledTableRow key={row.id}>
                <TableCell align="center"/* component="th" scope="row" */>
                <Avatar alt="Remy Sharp" src={row.image} className={classes.large} />
              </TableCell>
              <TableCell align="center"/* component="th" scope="row" */>
                {row.title}
              </TableCell>
{/*               <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center">{row.description}</TableCell> */}
              <TableCell align="center">{row.category}</TableCell>
              
              <TableCell align="center">
                
                <Button style={{cursor:"pointer"}} onClick={()=>{handleDeleteAProduct(row.id)}} ><DeleteIcon/></Button>

              
                {/* <button style={{cursor:"pointer"}} onClick={()=>{dispatch(removeTodo(index))}} >{test1.delete}</button> */}
              </TableCell>
              <TableCell align="center">
                
                <Button style={{cursor:"pointer"}}  onClick={()=>action(row)}><EditIcon/></Button>
              
                {/* <button style={{cursor:"pointer"}} onClick={()=>{dispatch(removeTodo(index))}} >{test1.delete}</button> */}
              </TableCell>
              

            </StyledTableRow>
           
          ))}
           </TableBody>
        
      </Table>
{/*       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description" 
        children={<EditProduct handleClose={handleClose} action={handleEditSubmit}/> }
      >
       
      </Modal> */}
               <TablePagination
        rowsPerPageOptions={[5, 10, 15,{ label: 'All', value: -1 }]}
        component="div"
        count={products?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        dir="rtl"
/*         style={{margin:"auto"}} */
className={classes.pagination}
        labelRowsPerPage='تعداد سطر های هر صفحه'
      />
      </div>

    )
}

export default ProductsTable
