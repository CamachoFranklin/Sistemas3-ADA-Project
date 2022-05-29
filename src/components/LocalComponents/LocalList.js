import {
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  CardActions,
  Grid,
  Container,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
export default function LocalList() {
  const navigate=useNavigate();
  const [locales, setLocales] = useState([]);
  const loadLocales = async () => {
    const response = await fetch("http://localhost:4000/locales/");
    const data = await response.json();
    setLocales(data);
  };
  const handleDelete= async(idlocal)=>{
    try {
      const res=await fetch (`http://localhost:4000/locales/${idlocal}`,{
      method:"DELETE",
    })
    const data= await res.json();
    console.log(data);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    loadLocales();
  }, []);
  return (
    <>
      <h1>Lista de Locales </h1>
      <Container>
        <Grid
          Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          >
          {locales.map((local) => (
            <Grid item xs={2} sm={4} md={4}>
              <Card
                style={{
                  marginBottom: ".8rem",
                  backgroundColor: "#E9F8F8",
                }}
              >
                <CardMedia
                  component="img"
                  alt="locales"
                  height="140"
                  image="https://www.bienesonline.com/venezuela/photos/alquilo-local-22-mts-centro-altamira--LOA1507761621274324-578.jpg"
                />
                <CardContent>
                  <div>
                    <Typography>Codigo : {local.codlocal} </Typography>
                    <Typography>Descripcion : {local.descripcion} </Typography>
                    <Typography>Dimesion : {local.dimensionl}</Typography>
                    <Typography>Categoria : {local.categoria}</Typography>
                  </div>
                </CardContent>
                <CardActions>
                  <div>
                    <Button
                      variant="contained"
                      onClick={() => console.log("edit")}
                      style={{ margin: ".5rem" }}
                    >
                      ALquilar
                    </Button>
                    <Button
                      variant="contained"
                      color="inherit"
                      onClick={() => navigate
                        (`/local/${local.idlocal}/edit`)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="warning"
                      onClick={() => {
                        handleDelete(local.idlocal)
                        window.location.reload()
                      } }
                      style={{ margin: ".5rem" }}
                    >
                      Delete
                    </Button>
                  </div>
                </CardActions>
              </Card>
            </Grid>
          ))}
           </Grid>
      </Container>
    </>
  );
}