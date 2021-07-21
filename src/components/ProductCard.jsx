import React,{useEffect} from 'react'
import Header from "./Header"
import { useDispatch,useSelector } from "react-redux";
import {addProduct,getProducts,deleteproduct,editItem}from "../redux/actions/productActions"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Grid from "@material-ui/core/Grid"
import {COLORS} from "../styles/constantsVariables"
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import Link from '@material-ui/core/Link';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      width: "400px",
      padding: "10px 10px 10px 30px",
      borderRadius:"10px",
      border:`3px solid ${COLORS.mainColor}`,
      margin:"0 0 10px 10px"
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: "100%",
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
    gridcontainer:{
        display:"flex",
        justifyContent:"space-evenly"
    }
  }));
const ProductCard = ({item}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} >
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {item.title}
            </Typography>
            <Typography component="h5" variant="h5">
              {item.category}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
            {item.description}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
            {item.price}
            </Typography>
          </CardContent>

        </div>
        <CardMedia
          className={classes.cover}
          
          image={item.image}
          
          title="Live from space album cover"
        />

      </Card>
    )
}

export default ProductCard
