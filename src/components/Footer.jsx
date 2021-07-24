import React from "react";
import { Typography, Box, Container } from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';


const Footer = () => {


  return (
    <footer
    //  style={{margin:"60vh 0 0 0"}}
    style={{bottom: 0,
      position: "absolute",
      width: "100%",
      height: "0%",
    alignItems:"center"}}
     >
      <Box style={{backgroundColor:"#c0c0c1"}} /* bgcolor="text.secondary" */ >
        <Container style={{display:"flex",justifyContent:"space-between",alignItems:"center",height:"60px"}} maxWidth="lg">
          <Box >
            <Typography align="left" variant="h5" component="h5">فروشگاه دعوت</Typography>
          </Box>
          <Box textAlign="center">
            <Typography>Footer</Typography>
          </Box>
          <Box textAlign="center">
          <FacebookIcon />
          <LinkedInIcon />
          <InstagramIcon />
          </Box>
        </Container>
      </Box>
      <Box style={{backgroundColor:"#997af2"}}>
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
