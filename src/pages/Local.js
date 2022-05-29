import React from "react";
import Navbar from "../components/NavbarComponents/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Menu from "../components/LocalComponents/Navbar";
import Lista from "../components/LocalComponents/LocalList";

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
      <Menu />
      <Lista />

      <Grid align="center" m={50} p={2} mt={4} mb={5}></Grid>
      <Container>
        <br></br>
      </Container>

      <Footer />
    </Box>
  );
};

export default Home;
