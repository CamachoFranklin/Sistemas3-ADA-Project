import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function FreeSolo() {
  return (
    <Stack spacing={2} fullWidth>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={categoria.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} label="Categoria" />}
      />
      
    </Stack>
  );
}

const categoria = [
    { title: 'Servicio' },
    { title: 'Comida' },
    { title: 'Tienda de zapatos' },
    { title: 'Articulos Tecnologicos'},
    { title: 'Tienda de Ropa'},
    { title: "Venta de telefonos" },
    { title: 'Banco' },
];


