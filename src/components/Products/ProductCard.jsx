import React,{useEffect} from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
        maxWidth: 385,
      padding: "10px 10px 10px 30px",
      borderRadius:"10px",
      margin:"0 0 10px 10px",
      boxShadow:"-2px 7px 13px 10px #c3c3c3",
      '&:hover':{
        boxShadow:"-2px 7px 13px 10px #9dc5ff",
      },
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

              <CardContent>
                  <Typography gutterBottom  component="h5" variant="h5">
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    {item?.price?  (Number(item?.price)).toLocaleString() : " - "}
                    تومان
                  </Typography>

              </CardContent>
            </CardActionArea>
          </Card>
      </>
    )
}

export default ProductCard
