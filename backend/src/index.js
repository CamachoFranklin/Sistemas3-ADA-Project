const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const localRoutes = require("./routes/local.routes");
const areaRoutes = require("./routes/area.routes");
const usuarioRoutes = require("./routes/usuario.routes");
const clienteRoutes = require("./routes/cliente.routes");
const fechaRRoutes = require("./routes/fechaR.routes");
const reservacionRoutes=require('./routes/reservacion.routes');
const app = express();

app.use(cors());
//ver por consola las peticiones que van llegando
app.use(morgan("dev"));

app.use(express.json());
app.use(localRoutes);
app.use(areaRoutes);
app.use(usuarioRoutes);
app.use(clienteRoutes);
app.use(fechaRRoutes);
app.use(reservacionRoutes);

app.use((err, req, res, next) => {
  return res.json({
    message: err.message,
  });
});
app.listen(4000);
console.log("server on port 4000");
