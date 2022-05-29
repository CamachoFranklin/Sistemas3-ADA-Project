import React from "react";
import { CssBaseline, Grid } from "@mui/material";
import "@fontsource/roboto";

import RegisterForm from "../components/RegisterComponents/Form/RegisterForm";
import Footer from "../components/Footer";
import { Container } from "@mui/system";

const Register = () => {
  return (
    <div>
      <CssBaseline />
      <Grid container minH="90%">
        <Grid item xs={12} sm={12} md={8} lg={4} xl={6}></Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={6}>
          <RegisterForm />
        </Grid>
      </Grid>
      <Grid>
        <Container>
          <br></br>
        </Container>
      </Grid>
      <Footer />
    </div>
  );
};

export default Register;
