
import React from "react";
import {useDispatch, } from "react-redux";
import {Link} from "react-router-dom";
import {removeItem} from "../../redux/actions/cart.reducer";
import {Table,TableBody,TableCell,TableHead,TableRow,Button,makeStyles,withStyles} from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';

function CartTable({cart,page,rowsPerPage}) {
  const useStyles = makeStyles((theme)=>({
    table: {
      minWidth: 650,
      width:"100%",
      margin:"auto",
    },
    root:{
      fontSize:"30px",
      backgroundColor:"orange"
    },
    large: {
        width: theme.spacing(8),
        height: theme.spacing(8),
      },
  })
  );
  const StyledTableRow = withStyles((theme) => ({
    root: {
      fontSize:"36px",
     /*  "&:nth-of-type(odd)": {
        backgroundColor: "#c6cffe",
      },
      "&:nth-of-type(even)": {
        backgroundColor: "#e0e4fa",
      }, */
      backgroundColor:"white"
    },
  }))(TableRow);
  
  const dispatch = useDispatch()
  const classes=useStyles()
    return (



<Table className={classes.table} aria-label="simple table">
  <TableHead >
    <TableRow  className={classes.root}>
      <TableCell align="center" >نام کالا </TableCell>
      <TableCell align="center">قیمت </TableCell>
      <TableCell align="center">تعداد </TableCell>
      <TableCell align="center">حذف </TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
       {cart?.slice(page*rowsPerPage,page*rowsPerPage+rowsPerPage).map((row) => (
          <StyledTableRow key={row.id}>

              <TableCell align="center">
                {row.title}
              </TableCell>
              <TableCell align="center">
                {(Number(row.price)).toLocaleString()} تومان
              </TableCell>
              <TableCell align="center">
                {row.number}
              </TableCell>
              <TableCell align="center">
                <Button style={{cursor:"pointer"}}onClick={() => dispatch(removeItem(row.id))} >
                  <DeleteIcon/>
                </Button>
              </TableCell>
      
          </StyledTableRow>
     
    ))}
     </TableBody>
  
</Table>
    )


    
}


export default CartTable

