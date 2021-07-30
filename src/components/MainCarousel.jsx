import React from "react";
import Carousel from "react-material-ui-carousel";
import pic1 from "../assets/1.jpg"
import pic2 from "../assets/2.jpg"
import pic3 from "../assets/3.jpg"
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
function Item({item}) {
  return (
    <Grid /* style={{ width: "100%", marginTop:"20px" }} */  xs={12} spacing={3}>   <img style={{width:"100%",borderRadius:"20px"}} src={item.pic} alt=""/> </Grid>
  );
}
const useStyles=makeStyles((theme)=>({

container:{
  /* width: "85%", */
    display: "flex",
    flexWrap: "wrap",
    boxSizing: "border-box",
    marginTop: "25px ",
}


}))
export default function MainCarousel() {
  var items = [
    {
      name: "Random Name #1",
      pic: pic1
    },
    {
      name: "Random Name #2",
      pic: pic2
    },
    {
      name: "Random Name #3",
      pic: pic3
    }
  ];
  const classes=useStyles();
  const [index, setIndex] = React.useState(0);

  const handleChange = (cur,  prev) => {
    setIndex(cur);
  };

  return (
    <div /* style={{width:"100%",margin:"auto"}} */>


    <Grid container direction="row"  justify="center"/* className={classes.container} */ /* justify="center"  alignItems="center" *//* spacing={3} */>

{/* <Grid item xs={6}  > */}


{/*       <Carousel
        index={index}
        onChange={handleChange}
        interval={6000}
        animation="slide"
        indicators={false}
        stopAutoPlayOnHover
        navButtonsAlwaysVisible={true}
        swipe
        className="my-carousel"
        NextIcon={<ChevronLeftIcon/>}
        PrevIcon={<ChevronRightIcon/>}
        
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel> */}
{/*       </Grid> */}

    
 <Grid item xs={8} direction="row"  style={{marginTop:"20px"}}/* justify="center"  alignItems="center" *//* spacing={3} */>
 <Carousel
        index={index}
        onChange={handleChange}
        interval={6000}
        animation="slide"
        indicators={false}
        stopAutoPlayOnHover
        navButtonsAlwaysVisible={true}
        swipe
        className="my-carousel"
        NextIcon={<ChevronLeftIcon/>}
        PrevIcon={<ChevronRightIcon/>}
        
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
{/*         <Grid item xs={6} > */}
{/* <div style={{display:"flex"}}> */}


       {/*  <img style={{width:"50%",borderRadius:"20px"}} src={pic3} alt=""/> */}
{/*         </Grid> */}
{/*         <Grid item xs={6} > */}
        {/* <img style={{width:"51%",borderRadius:"20px"}} src={pic2} alt=""/> */}
{/*         </Grid> */}

{/* </div> */}
</Grid>
</Grid>

    </div>
  );
}
