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
} from "@mui/material";
import Comb from "./comboBox";
import { useState, useEffect } from "react";

export default function LocalForm() {
  const [local, setLocal] = useState({
    codlocal: "",
    descripcion: "",
    dimensionL: "",
    categoria: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:4000/locales", {
      method: "POST",
      body: JSON.stringify(local),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
  };

  const handleChange = (e) => {
    setLocal({ ...local, [e.target.name]: e.target.value });
  };
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
            Crear Area Comun
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                variant="filled"
                placeholder="Codigo del Area Comun"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="codlocal"
                onChange={handleChange}
              />
              <TextField
                fullWidth
                variant="filled"
                placeholder="Descripcion del Area comun"
                multiline
                rows={5}
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="descripcion"
                onChange={handleChange}
              />
              <Grid container align="center" spacing={2}>
                <Grid item xs={6}>
                  <TextField
                   
                    fullWidth
                    variant="filled"
                    placeholder="Dimension del Area comun"
                    multiline
                    rows={1}
                    sx={{
                      display: "block",
                    }}
                    name="dimensionL"
                    onChange={handleChange}
                  />
                  <TextField
                   
                   fullWidth
                   variant="filled"
                   placeholder="precio"
                   multiline
                   rows={1}
                   sx={{
                     display: "block",
                   }}
                   name="dimensionL"
                   onChange={handleChange}
                 />
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="categoria"
                      label="categoria"
                      onChange={handleChange}
                    >
                      <MenuItem value={'Servicio'}>Servicio</MenuItem>
                      <MenuItem value={'Comida'}>Comida</MenuItem>
                      <MenuItem value={'Tienda de zapatos'}>Tienda de Zapatos</MenuItem>
                      <MenuItem value={ 'Articulos Tecnologicos'}>Articulos Tecnologicos</MenuItem>
                      <MenuItem value={'Tienda de Ropa'}>Tienda de Ropa</MenuItem>
                      <MenuItem value={"Venta de telefonos"}>Venta de Telefono</MenuItem>
                      
                      
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
                Guardar
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
