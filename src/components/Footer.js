import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box 
    
      position="fixed"
      sx={{ 
        flexGrow: 1,
        top: "auto",
        bottom: 0,
        bgcolor: "#29b7bb",
        boxShadow: 1,
        p: 2,
        position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}
      mt="250px"
    >
      <Grid 
        container 
        /*         sm={12}
        xs={12}
        md={6}
        lg={8}
        xl={6} */
        justifyContent="center"
        alignItems="center"
        
      >
        <Typography  variant="body2" align="center">
          <b>ADA - 2022</b>. Todos los derechos reservados
        </Typography>
      </Grid>
    </Box>
  );
};

export default Footer;
