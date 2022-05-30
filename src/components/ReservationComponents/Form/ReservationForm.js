import React, { Fragment, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import {Box,Stack,MenuItem,Select,FormControl,InputLabel} from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useForm } from "react-hook-form";
import { KeyboardDatePicker } from "@mui/lab";


export default function ReservationForm() {
  const [age, setEvento] = React.useState('');

  const handleChange = (event) => {
    setEvento(event.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit =(data)=>console.log(data)
  
  return (
    <Container maxWidth="xs"  m={2}
    p={2}
    mt={6}
    mb={10}
    sx={{
      marginTop: 2,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: "white",
      boxShadow: 3,
      borderRadius: 5,
    }}>
      
      <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container justifyContent="center" mb={2}>
      <Typography component="h1" variant="h5">
            Formulario de Reservacion
          </Typography>
          </Grid >
          <Box mb={2} item xs={12} sm={6} >
          <FormControl fullWidth>
          <InputLabel id="TipoEvento">Tipo de Evento</InputLabel>
          <Select
                     
                      id="TipoEvento"
                      name="TipoEvento"
                      label="TipoEvento"
                      onChange={handleChange}
                      xs={12} sm={6}
                      {...register("TipoEvento", {
                        required: "Rellene el campo",
                        
                      })}
                      error={!!errors?.TipoEvento}
                      helperText={errors?.TipoEvento ? errors.TipoEvento.message : null}
                    >
                      <MenuItem value={'Culturales'}>Culturales</MenuItem>
                      <MenuItem value={'Socioeducativas'}>Socioeducativas</MenuItem>
                      <MenuItem value={'difusión'}>difusión</MenuItem>
                      <MenuItem value={ 'Charlas '}>charlas</MenuItem>
                      <MenuItem value={'Concierto'}>Concierto</MenuItem>
                      <MenuItem value={"Baile"}>Baile Terapia</MenuItem>
                      <MenuItem value={"Otro"}>Otro</MenuItem>
                   
                    </Select>
                
                    </FormControl >
                    </Box >
                    <Grid mb={2} item xs={10} sm={6}>

<Stack  noValidate spacing={3}>
  <TextField
    fullWidth
    id="FechaInicio"
    label="Fecha de inicio"
    type="date"
    xs={{ width: 220 }}
    InputLabelProps={{
      shrink: true,
    }}
  
    {...register("FechaInicio", {
      required: "Rellene el campo",

      
    })}
    error={!!errors?.FechaInicio}
    helperText={errors?.FechaInicio ? errors.FechaInicio.message : null}
    
  />
</Stack>

</Grid>

      
        <Grid mb={2} item xs={10} sm={6}>

                <Stack  noValidate spacing={3}>
                  <TextField
                    fullWidth
                    id="FechaFinal"
                    label="Fecha Final"
                    type="date"
                    
                    xs={{ width: 220 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  
                    {...register("FechaFinal", {
                      required: "Rellene el campo",

                      
                    })}
                    error={!!errors?.FechaFinal}
                    helperText={errors?.FechaFinal ? errors.FechaFinal.message : null}
                    
                  />
                </Stack>

              </Grid>

              <Grid mb={2} item xs={12} sm={6}>
          <TextField
            variant="outlined"
            label="Descripcion del evento"
            fullWidth
            autoComplete="Descripcion"
            autoFocus
            {...register("Descripcion",  {
              required: "Rellene el campo",
              pattern: {
                value: /^[A-Za-z0-9]/,
                message: "Descripcion invalida",
              
                },
        
                maxLength: {
                  value: 150,
                  message: "La Descripcion no puede ser mayor a 150 caracteres"
                }
            
          
            })}
            error={!!errors?.descripcion}
            helperText={errors?.descripcion ? errors.descripcion.message : null}
          />
        </Grid>

       
       <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  color="inherit"
                  href="/home"
                >

                  Cancelar
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Registrar
                </Button>
              </Grid>
            </Grid>

            <Grid container justifyContent="flex-end">
              <Grid item></Grid>
            </Grid>

      </form>
    </Container>
  );
}





            


