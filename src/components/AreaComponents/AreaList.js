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
  
  export default function AreaList() {
    const navigate=useNavigate();
    const [areas, setAreas] = useState([]);
    const loadAreas = async () => {
      const response = await fetch("http://localhost:4000/areas/");
      const data = await response.json();
      setAreas(data);
    };
    const handleDelete= async(idarea)=>{
      try {
        const res=await fetch (`http://localhost:4000/areas/${idarea}`,{
        method:"DELETE",
      })
      const data= await res.json();
      console.log(data);
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(() => {
      loadAreas();
    }, []);
    return (
      <>
        <h1>Lista de Areas </h1>
        <Container>
          <Grid
            Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            >
            {areas.map((area) => (
              <Grid item xs={2} sm={4} md={4}>
                <Card
                  style={{
                    marginBottom: ".8rem",
                    backgroundColor: "#E9F8F8",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="areas"
                    height="140"
                    image=""
                  />
                  <CardContent>
                    <div>
                      <Typography>Area : {area.codarea} </Typography>
                      <Typography>Descripcion : {area.descripcion} </Typography>
                      <Typography>Precio : {area.precio}</Typography>
                      <Typography>Dimesion : {area.dimensiona}</Typography>
                      <Typography>Categoria : {area.tipoa}</Typography>
                    </div>
                  </CardContent>
                  <CardActions>
                    <div>
                      <Button
                        variant="contained"
                        onClick={() => console.log("edit")}
                        style={{ margin: ".5rem" }}
                      >
                       Reservar
                      </Button>
                      <Button
                        variant="contained"
                        color="inherit"
                        onClick={() => navigate
                          (`/area/${area.idarea}/edit`)}
                      >
                        Editar
                      </Button>
                      <Button
                        variant="contained"
                        color="warning"
                        onClick={() => {
                          handleDelete(area.idarea)
                          window.location.reload()
                        } }
                        style={{ margin: ".5rem" }}
                      >
                        Eliminar
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