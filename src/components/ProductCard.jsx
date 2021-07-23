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
import Box from "@material-ui/core/Box"
const useStyles = makeStyles((theme) => ({
    root: {
      /* display: 'flex', */
      width: "230px",
/*       height: "230px", */
      padding: "10px 10px 10px 30px",
      borderRadius:"10px",
      border:`3px solid #f1c752`,
      margin:"0 0 10px 10px"
    },
    details: {
      display: 'flex',
      /* flexDirection: 'column', */
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
    },
    box:{
      // width:"150px",
      height:"100%",
      border:"1px solid rgba(234,149,63,0.9)",
      borderRadius:"5px",
      // margin:"5px auto",
      textAlign:"center",
      background:"white"
  },
  img:{
    objectFit:"cover",
    objectPosition:"center",
    height:"100%",
    width:"80%"
    },
  }));
const ProductCard = ({item}) => {
    const classes = useStyles();

    return (
      <>

        <Card className={classes.root} >
{/*         <CardMedia
      className={classes.cover}
      
      image={item.image}
      
      title="Live from space album cover"
    /> */}
                                   {/*  <Box className={classes.box}> */}
                                    <img className={classes.img}
                                        //  style={{ width: "80%", height: "100Px" ,margin:"auto"}}
                                        src={item.image} alt="کالا" />
                                                <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {item.title}
            </Typography>
            <Typography variant="subtitle1" color="primary">
            {(Number(item.price)).toLocaleString()}
              تومان
            </Typography>
          </CardContent>

        </div>
                             {/*    </Box> */}
        <br></br>



      </Card>
      </>
    )
}

export default ProductCard
