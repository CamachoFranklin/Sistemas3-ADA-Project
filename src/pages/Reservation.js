import React from "react";
import { CssBaseline, Grid } from "@mui/material";
import "@fontsource/roboto";

import ReservationForm from "../components/ReservationComponents/Form/ReservationForm";
import Footer from "../components/Footer";

const Reservation = () => {
  return (
    <div>
      <CssBaseline />
      <Grid container>
        <ReservationForm />
      </Grid>
      <Footer />
    </div>
  );
};

export default Reservation;
