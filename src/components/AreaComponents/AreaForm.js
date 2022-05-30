import {
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
} from "@mui/material";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
export default function LocalForm() {
  const [area, setArea] = useState({
    codArea: "",
    descripcion: "",
    dimensionA: "",
    tipoa: "",
    precio: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:4000/areas", {
      method: "POST",
      body: JSON.stringify(area),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);

    navigate("/area");
  };

  const handleChange = (e) => {
    setArea({ ...area, [e.target.name]: e.target.value });
  };

  const loadArea = async (idArea) => {
    const res = await fetch(`http://localhost:4000/Areas/${idArea}`);
    const data = await res.json();
    setArea({
      codarea: data.codarea,
      dimensiona: data.dimensiona,
      descripcion: data.descripcion,
      tipoa: data.tipoa,
      precio: data.precio,
    });
  };

  useEffect(() => {
    if (params.idArea) {
      loadArea(params.idArea);
    }
  }, [params.idArea]);
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={3} sx={{ width: 600 }}>
        <Card sx={{ mt: 10, background: "#eee" }}>
          <Typography mt={3} textAlign="center">
            Area
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                variant="filled"
                placeholder="Codigo del Area"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="codArea"
                value={area.codarea}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                variant="filled"
                placeholder="Descripcion del Area"
                multiline
                rows={5}
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="descripcion"
                value={area.descripcion}
                onChange={handleChange}
              />
              <Grid container align="center" spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    variant="filled"
                    placeholder="Dimension del Area"
                    multiline
                    rows={1}
                    sx={{
                      display: "block",
                    }}
                    name="dimensionA"
                    value={area.dimensiona}
                    onChange={handleChange}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    placeholder="Precio"
                    multiline
                    rows={1}
                    sx={{
                      display: "block",
                    }}
                    name="precio"
                    value={area.precio}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Tipo de Area
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="categoria"
                      value={area.tipoA}
                      label="Tipo de Area"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Salon para cursos"}>
                        Salon para cursos
                      </MenuItem>
                      <MenuItem value={"Conciertos"}>Conciertos</MenuItem>
                      <MenuItem value={"Bailoterapia"}>Bailoterapia</MenuItem>
                      <MenuItem value={"Centinela"}>Centinelas</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <Button
                variant="contained"
                color="primary"
                type="submit"
                
                sx={{
                  margin: ".9rem 0",
                }}
              >
                {loading ? (
                  <CircularProgress color="inherit" size={24} />
                ) : (
                  "Guardar"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
