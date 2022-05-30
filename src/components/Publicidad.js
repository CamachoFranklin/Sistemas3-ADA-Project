import { Box } from "@mui/material";
import styled from "styled-components";
import anuncio from "../assets/images/anuncio.jpg"
import Container from "@mui/material/Container";


const Publicidad = () => {
  return (

<Box flex={2} p={1}  sx={{ display: { xs: "20", sm: "block" } }}>
      <Box position="fixed" width={100} >
    

        <img src={anuncio} className="anuncio" alt="logo" width={160}  height={350} />
      

      
</Box>
</Box>
  );

};

export default Publicidad;
