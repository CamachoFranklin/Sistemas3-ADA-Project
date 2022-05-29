import React from "react";
import { Grid } from "@mui/material";
import "@fontsource/roboto";

import LoginForm from "../components/LoginComponents/Form/LoginForm";
import Footer from "../components/Footer";
import { Container } from "@mui/system";

const Login = () => {
  return (
    <div>
      <Grid container minH="90%">
        <Grid item xs={12} sm={12} md={8} lg={4} xl={6}></Grid>

        <Grid item xs={12} sm={12} md={4} lg={4} xl={6}>
          <LoginForm />
        </Grid>
      </Grid>

      <Footer />
      <Container>
        <br></br>
      </Container>
    </div>
  );
};

export default Login;
