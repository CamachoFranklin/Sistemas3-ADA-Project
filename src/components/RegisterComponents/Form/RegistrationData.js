import React, { Fragment, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import {Box,Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useForm } from "react-hook-form";
import { KeyboardDatePicker } from "@mui/lab";


export default function LoginPage() {

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
      <Grid container justifyContent="center">
      <Typography component="h1" variant="h5">
            Registro de Datos
          </Typography>
          </Grid>
          <Grid container spacing={1} sx={{ mt: 3 }}>
         
          <Grid mb={2} item xs={12} sm={6} >
          <TextField
            variant="outlined"
            label="Nombre"
            fullWidth
            autoComplete="nombre"
            autoFocus
            {...register("nombre", {
              required: "Rellene el campo",
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Nombre invalido",
              },
              maxLength: {
                value: 30,
                message: "El nombre no puede ser mayor a 30 caracteres"
              }
            })}
            error={!!errors?.nombre}
            helperText={errors?.nombre ? errors.nombre.message : null}
          />
        </Grid>
        <Grid mb={2} item xs={12} sm={6}>
          <TextField
            variant="outlined"
            label="apellido"
            fullWidth
            autoComplete="apellido"
            autoFocus
            {...register("apellido", {
              required: "Rellene el campo",
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "apellido invalido",
              }, 
              maxLength: {
                value: 30,
                message: "El apellido no puede ser mayor a 30 caracteres"
              }
            })}
            error={!!errors?.apellido}
            helperText={errors?.apellido ? errors.apellido.message : null}
          />
        </Grid>
        </Grid>
        <Grid mb={2} item xs={12} sm={6}>
          <TextField
            variant="outlined"
            label="Cedula"
            fullWidth
            autoComplete="Cedula"
            autoFocus
            {...register("Cedula", {
              required: "Rellene el campo",
              pattern: {
                value: /^[0-9]{8,8}$/i,
                message: "Cedula invalida",
              
              },
            })}
            error={!!errors?.Cedula}
            helperText={errors?.Cedula ? errors.Cedula.message : null}
          />
        </Grid>

        <Grid mb={2} item xs={12} sm={6}>
          <TextField
            variant="outlined"
            label="Telefono"
            fullWidth
            autoComplete="Telefono"
            autoFocus
            {...register("Telefono", {
              required: "Rellene el campo",
              pattern: {
                value: /^[0-9]{11,11}$/i,
                message: "Telefono invalido",
                
              
              },
            })}
            error={!!errors?.Telefono}
            helperText={errors?.Telefono ? errors.Telefono.message : null}
          />
        </Grid>
      
        <Grid mb={2} item xs={10} sm={6}>

                <Stack  noValidate spacing={3}>
                  <TextField
                    fullWidth
                    id="date"
                    label="Fecha de nacimiento"
                    type="date"
                    xs={{ width: 220 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  
                    {...register("fecha", {
                      required: "Rellene el campo",

                      
                    })}
                    error={!!errors?.fecha}
                    helperText={errors?.fecha ? errors.fecha.message : null}
                    
                  />
                </Stack>

              </Grid>

              <Grid mb={2} item xs={12} sm={6}>
          <TextField
            variant="outlined"
            label="Direccion"
            fullWidth
            autoComplete="Direccion"
            autoFocus
            {...register("Direccion",  {
              required: "Rellene el campo",
              pattern: {
                value: /^[A-Za-z0-9]/,
                message: "Direccion invalida",
              
                },
        
                maxLength: {
                  value: 50,
                  message: "La Direccion no puede ser mayor a 50 caracteres"
                }
            
          
            })}
            error={!!errors?.Direccion}
            helperText={errors?.Direccion ? errors.Direccion.message : null}
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





            


