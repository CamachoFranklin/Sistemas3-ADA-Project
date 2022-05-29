import React, { useState } from "react";
import {
  Box,
  Grid,
  Divider,
  IconButton,
  InputAdornment,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import useLoading from "../../../hooks/useLoading";
import {
  loginSchema,
  loginDefaultValues,
} from "../../../utils/formValidations/loginFormValidation";

const LoginForm = () => {
  const { isLoading, startLoading, stopLoading } = useLoading();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
    defaultvalue: loginDefaultValues,
  });

  const onSubmit = (values) => {
    startLoading();
    try {
      // Los métodos para autenticar

      setTimeout(console.log("hello world"), 1000);

      window.location.href = "/dashboard";
      reset(loginDefaultValues);
    } catch (error) {
      console.log(error);
    }
    stopLoading();
  };

  return (
    <Box
      m={2}
      p={2}
      mt={6}
      mb={10}
      sx={{
        backgroundColor: "white",
        alignItems: { xs: "center" },
        borderRadius: 5,
        boxShadow: 2,
      }}
    >
      <Grid container spacing={2} xs={12} align="center">
        <Grid item xs={12} align="center">
          <img
            src={require("../../../assets/images/ADA_Logo.png")}
            alt="Logo"
            width="31%"
          />
        </Grid>
        <Grid item xs={12} spacing={2}>
          <Typography variant="h4" mb={1}>
            ¡Bienvenido!
          </Typography>
          <Divider />
          <Typography variant="body2" mt={1} mb={1}>
            Para poder ingresar al sistema, introduce tu correo electrónico y tu
            contraseña
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="email"
            control={control}
            render={({ field, value }) => (
              <TextField
                {...field}
                error={errors?.email && value !== ""}
                helperText={
                  errors?.email && value !== ""
                    ? "Ingrese un correo electrónico válido"
                    : ""
                }
                required
                fullWidth
                placeholder="Ingrese un correo electónico"
                label="Correo electrónico"
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="password"
            control={control}
            render={({ field, value }) => (
              <TextField
                {...field}
                error={errors?.password}
                helperText={
                  errors?.password && value !== ""
                    ? "Ingrese una contraseña válida"
                    : ""
                }
                type={showPassword ? "text" : "password"}
                fullWidth
                required
                placeholder="Ingrese una contraseña"
                label="Contraseña"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </Grid>
        <Divider />

        <Grid item xs={6} align="center">
          <Button variant="outline" href="/register">
            Regístrate
          </Button>
        </Grid>
        <Grid item xs={6} align="center">
          <Button
            variant="contained"
            disabled={isLoading || !isValid}
            onClick={handleSubmit(onSubmit)}
          >
            Inicia sesión
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginForm;
