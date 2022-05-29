import React from "react";
import { CssBaseline, Grid } from "@mui/material";
import "@fontsource/roboto";

import RegistrationData from "../components/RegisterComponents/Form/RegistrationData"; 
import Footer from "../components/Footer";

const RegistrationForm = () => {
  return (
    <div>
      <CssBaseline />
      <Grid container>
        <RegistrationData />
      </Grid>
      <Footer />
    </div>
  );
};

export default RegistrationForm;
