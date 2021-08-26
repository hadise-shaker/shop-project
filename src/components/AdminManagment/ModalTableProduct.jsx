import React,{useState} from 'react'
import {COLORS}from "../../styles/constantsVariables"
import {Table,TableBody,TableCell,TableHead,TableRow,TablePagination,makeStyles,withStyles} from '@material-ui/core';
const ModalTableProduct = ({products}) => {

   /*  console.log("user products",products); */

    const useStyles = makeStyles((theme)=>({
        table: {
          minWidth: 650,
          width:"50%",
          margin:"auto",
        },
        root:{
          fontSize:"30px",
          backgroundColor:"#6980fc"
        },
        large: {
            width: theme.spacing(8),
            height: theme.spacing(8),
          },
          pagination:{
            backgroundColor:COLORS.bg_modal
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
    return (
        <div>


      <Table className={classes.table} aria-label="simple table">
        <TableHead >
          <TableRow  className={classes.root}>
          <TableCell align="center" >نام کالا</TableCell>
            <TableCell align="center" >مجموع مبلغ</TableCell>
            <TableCell align="center">تعداد</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
             {products?.slice(page*rowsPerPage,page*rowsPerPage+rowsPerPage).map((order) => (
            <StyledTableRow key={order.id}>
                <TableCell align="center">
                  {order.title} 
              </TableCell>
              <TableCell align="center">
              {(Number(order.price)).toLocaleString()}
                 تومان
              </TableCell>
              <TableCell align="center">
             { Number(order.number)}
              </TableCell>


              

            </StyledTableRow>
           
          ))}
           </TableBody>
           <TablePagination
              rowsPerPageOptions={[5, 10, 15,{ label: 'کل', value: -1 }]}
              component="div"
              count={products?.length}
              rowsPerPage={rowsPerPage}
              page={page}
              className={classes.pagination}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              dir="rtl"
              style={{margin:"auto"}}
              labelRowsPerPage='تعداد سطر های هر صفحه'
          />
          </Table>

        </div>
    )
}

export default ModalTableProduct
