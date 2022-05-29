import React from "react";
import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "../static/theme/Theme";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Alquiler from "../pages/Alquiler";
import AreaComun from "../pages/AreaComun";
import Local from "../pages/Local";
import Reservation from "../pages/Reservation";
import RegistrationForm from "../pages/RegistrationForm";

import LocalForm from "../components/LocalComponents/LocalForm";
import LocalList from "../components/LocalComponents/LocalList";



const Routes = () => {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/not-found" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/alquiler" element={<Alquiler />} />
          <Route path="/areacomun" element={<AreaComun />} />

          <Route path="/local" element={<Local />} />
          <Route path="/local/list" element={<LocalList />} />
          <Route path="/local/new" element={<LocalForm />} />
          <Route path="local/:id/edit" element={<LocalForm />}/>

          <Route path="/reservationform" element={<Reservation />} />
          <Route path="/registrationform" element={<RegistrationForm />} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Routes;
