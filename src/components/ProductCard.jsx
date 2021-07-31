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
import Paper from "@material-ui/core/Paper"
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
     /*  width: "230px", */
      
        maxWidth: 385,
     
/*       height: "230px", */
      padding: "10px 10px 10px 30px",
      borderRadius:"10px",
     /*  border:`3px solid #2196f3`, */
      margin:"0 0 10px 10px",
      boxShadow:"-2px 7px 13px 10px #c3c3c3",
      '&:hover':{
        boxShadow:"-2px 7px 13px 10px #9dc5ff",
      },
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
/*   img:{
    objectFit:"cover",
    objectPosition:"center",
    height:"100%",
    width:"80%"
    }, */
    paper:{
      maxWidth:""
    },
    media: {
      height: 180,
    },
  }));
const ProductCard = ({item}) => {
    const classes = useStyles();

    return (
      <>

        <Card className={classes.root} >
        <CardActionArea>
        <CardMedia
        component="img"
          className={classes.media}
          image={item.image}
          title="Contemplative Reptile"
          height="180"
        />
{/*                                          <Grid item xs>
                                     <img className={classes.img} src={item.image} alt="کالا" />
                                     </Grid> */}
        <CardContent>

        
                                  {/*  <Grid container wrap="nowrap" spacing={2}> */}
    
                                    
                                   {/*   <Grid item xs zeroMinWidth> */}
                                     <Typography gutterBottom  component="h5" variant="h5">
              {item.title}
            </Typography>
            <Typography variant="subtitle1" color="primary">
               {item?.price?  (Number(item?.price)).toLocaleString() : " - "}
           
              تومان
            </Typography>
       {/*    </Grid> */}
          
                                  



        {/* </Grid> */}
        </CardContent>
       </CardActionArea>
      </Card>
      </>
    )
}

export default ProductCard
