import React from "react";
import Carousel from "react-material-ui-carousel";
import pic1 from "../assets/1.jpg"
import pic2 from "../assets/2.jpg"
import pic3 from "../assets/3.jpg"
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
function Item({item}) {
  return (
    <div style={{ width: "100%", /* height: "100%" */marginTop:"20px" }}>   <img style={{width:"100%",borderRadius:"20px"}} src={item.pic} alt=""/> </div>
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
    console.log(cur, prev);
  };

  return (
    <div style={{display:"flex",alignItems:"center",width:"45%",margin:"20px auto"}}>


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
{/*       <div style={{padding:"30px",height:"490px"}}>
      <img style={{width:"420px",borderRadius:"20px"}} src={pic1} alt=""/>
      <img style={{width:"420px",borderRadius:"20px"}} src={pic2} alt=""/>
      </div> */}
{/*       {items.map((item, i) => (
        <button
          onClick={() => setIndex(i)}
          style={{ background: i === index ? "#ccc" : "#fff" }}
        >
          {i}
        </button>
      ))} */}

    </div>
  );
}
