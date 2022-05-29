import React from "react";
import Navbar from "../components/NavbarComponents/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import image1 from "../assets/images/ADA_Logo.png";
import { Box } from "@mui/system";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        background: "white",
      }}
    >
      <Announcement />
      <Navbar />
      <Grid align="center" m={50} p={2} mt={4} mb={5}>
        <img src={image1} className="image1" alt="logo" width="322" />
      </Grid>
      <Container>
        <br></br>
      </Container>
      <Footer />
    </Box>
  );
};

export default Home;
