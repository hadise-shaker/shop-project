import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import {deleteproduct} from "../../redux/actions/productActions"
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {Table,TableBody,TableCell,TableHead,TableRow,Button,Avatar,TablePagination,makeStyles,withStyles} from '@material-ui/core';
const ProductsTable = ({edit,handleOpen}) => {
    const products = useSelector((state) => state.allProducts.products);

const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getProducts());
      }, []);

 const useStyles = makeStyles((theme)=>({
        table: {
          minWidth: 300,
          width:"80%",
          margin:"auto",
        },
        TableContainer:{
          /* height: 400, */
           width: '100%',
           marginTop:"20px"
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
        
    <div className={classes.TableContainer}  >

        <Table className={classes.table} aria-label="simple table">

                <TableHead>
                      <Button variant="contained" color="primary" onClick={handleOpen}>
                        افزودن کالا
                      </Button>
                    <TableRow  className={classes.root}>
                      <TableCell align="center" > تصویر کالا </TableCell>
                      <TableCell align="center" >نام کالا </TableCell>
                      <TableCell align="center">دسته بندی </TableCell>
                      <TableCell align="center">حذف </TableCell>
                      <TableCell align="center">ویرایش </TableCell>
                   </TableRow>
                </TableHead>
            <TableBody>
             {products?.slice(page*rowsPerPage,page*rowsPerPage+rowsPerPage).map((row) => (
                  <StyledTableRow key={row.id}>

                    <TableCell align="center">
                      <Avatar alt="Remy Sharp" src={row.image} className={classes.large} />
                    </TableCell>
                    <TableCell align="center">
                      {row.title}
                    </TableCell>
                    <TableCell align="center">
                      {row.category}
                    </TableCell>
                    <TableCell align="center">
                      <Button  onClick={()=>{handleDeleteAProduct(row.id)}} ><DeleteIcon/></Button>
                      </TableCell>
                    <TableCell align="center">
                       <Button   onClick={()=>edit(row)}><EditIcon/></Button>
                    </TableCell>

                  </StyledTableRow>
           
              ))}
           </TableBody>
        
      </Table>

               <TablePagination
                  rowsPerPageOptions={[5, 10, 15,{ label: 'همه', value: -1 }]}
                  component="div"
                  count={products?.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                  dir="rtl"
                  className={classes.pagination}
                  labelRowsPerPage='تعداد سطر های هر صفحه'
                />
      </div>

    )
}

export default ProductsTable
