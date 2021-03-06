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
  const [local, setLocal] = useState({
    codLocal: "",
    descripcion: "",
    dimensionL: "",
    categoria: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:4000/locales", {
      method: "POST",
      body: JSON.stringify(local),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);

    navigate("/local");
  };

  const handleChange = (e) => {
    setLocal({ ...local, [e.target.name]: e.target.value });
  };

  const loadLocal = async (idLocal) => {
    const res = await fetch(`http://localhost:4000/locales/${idLocal}`)
    const data = await res.json();
    setLocal({
      codlocal: data.codlocal,
     dimensionl:data.dimensionL,
      descripcion: data.descripcion, 
      categoria: data.categoria,
    })
  };

  useEffect(() => {
    if (params.idLocal) {
      loadLocal(params.idLocal);
    }
  }, [params.idLocal]);
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
            Local
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                variant="filled"
                placeholder="Codigo del Local"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="codLocal"
                value={local.codlocal}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                variant="filled"
                placeholder="Descripcion del Local"
                multiline
                rows={5}
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="descripcion"
                value={local.descripcion}
                onChange={handleChange}
              />
              <Grid container align="center" spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    variant="filled"
                    placeholder="Dimension del Local"
                    multiline
                    rows={1}
                    sx={{
                      display: "block", 
                    }}
                    name="dimensionL"
                    value={local.dimensionL}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Categoria
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="categoria"
                      value={local.categoria}
                      label="categoria"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Servicio"}>Servicio</MenuItem>
                      <MenuItem value={"Comida"}>Comida</MenuItem>
                      <MenuItem value={"Tienda de zapatos"}>
                        Tienda de Zapatos
                      </MenuItem>
                      <MenuItem value={"Articulos Tecnologicos"}>
                        Articulos Tecnologicos
                      </MenuItem>
                      <MenuItem value={"Tienda de Ropa"}>
                        Tienda de Ropa
                      </MenuItem>
                      <MenuItem value={"Venta de telefonos"}>
                        Venta de Telefono
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={
                  !local.codLocal ||
                  !local.descripcion ||
                  !local.dimensionL ||
                  !local.categoria
                }
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
