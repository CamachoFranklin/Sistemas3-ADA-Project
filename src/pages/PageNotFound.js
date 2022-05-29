import { Avatar, Box, Divider, Typography } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import React from "react";

const PageNotFound = () => {
  return (
    <div align="center">
      <Box>
        <Avatar sx={{ width: 404, height: 404 }}>
          <ErrorIcon sx={{ width: 404, height: 404 }} />
        </Avatar>
        <Typography variant="h1" mb={6} align="center">
          ¡Algo salió mal!
        </Typography>
        <Divider />
        <Typography variant="h6" mb={1} align="center">
          Ocurrió un error inesperado o la dirección a la que intentas acceder
          es incorrecta
        </Typography>
      </Box>
    </div>
  );
};

export default PageNotFound;
