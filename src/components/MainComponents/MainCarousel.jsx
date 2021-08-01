import React from "react";
import Carousel from "react-material-ui-carousel";
import pic1 from "../../assets/1.jpg"
import pic2 from "../../assets/2.jpg"
import pic3 from "../../assets/3.jpg"
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
function Item({item}) {
  return (
    <Grid /* style={{ width: "100%", marginTop:"20px" }} */  xs={12} spacing={3}>   <img style={{width:"100%",borderRadius:"20px"}} src={item.pic} alt=""/> </Grid>
  );
}

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

  const [index, setIndex] = React.useState(0);

  const handleChange = (cur,  prev) => {
    setIndex(cur);
  };

  return (
    <div >


    <Grid container direction="row"  justify="center">

 <Grid item xs={8} direction="row"  style={{marginTop:"20px"}}>
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

</Grid>
</Grid>

    </div>
  );
}
