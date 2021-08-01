import React from "react";
import { Typography, Box, Container,makeStyles } from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
const useStyles=makeStyles((theme)=>({
footer:{
  bottom: 0,
    position: "absolute",
    width: "100%",
    height: "0%",
  alignItems:"center"
},
  firstLayer:{
    backgroundColor:"#c0c0c1"
  },
  firstLayerContainer:{
   display:"flex",
   justifyContent:"space-between",
   alignItems:"center",
   height:"60px"
  },
  secondLayer:{
    backgroundColor:"#997af2"
  }

}))

const Footer = () => {
const classes=useStyles();

  return (
    <footer className={classes.footer}>
      <Box  className={classes.firstLayer} >
        <Container  className={classes.firstLayerContainer} maxWidth="lg">
          <Box >
            <Typography align="left" variant="h5" component="h5">فروشگاه دعوت</Typography>
          </Box>
{/*           <Box textAlign="center">
            <Typography>Footer</Typography>
          </Box> */}
          <Box textAlign="center">
          <FacebookIcon />
          <LinkedInIcon />
          <InstagramIcon />
          </Box>
        </Container>
      </Box>
      <Box className={classes.secondLayer}>
      <Container maxWidth="lg">
          <Box textAlign="center">
            <Typography variant="h6" component="h6">Designed By : Hadise Shaker</Typography>
          </Box>

        </Container>
      </Box>
     
    </footer>
  );
};
export default Footer;
