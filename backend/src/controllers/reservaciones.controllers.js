const pool = require("../db");

const getAllReservaciones = async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM Reservacion");

    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

const getReservacion = async (req, res, next) => {
  try {
    const { idReserva } = req.params;

    const result = await pool.query(
      "SELECT * FROM Reservacion  WHERE idReserva= $1 and estatus= $2",
      [idReserva, "A"]
    );
    if (result.rows.length === 0)
      return res.status(404).json({
        message: "Reservacion no encontrado",
      });

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const createReservacion = async (req, res, next) => {
  try {
    const { codReserva, idCliente, idArea, descripcionR } = req.body;

    // cant de dia que el cliente va reservar un area
    const contDia = await pool.query(
      "SELECT COUNT(fechaDeR.fecha) FROM reservacion,FechaDeR WHERE reservacion.idreserva=fechaDeR.idReserva AND reservacion.estatus=$1  AND fechader.estatus=$2 ",
      ["A", "A"]
    );

    const costoC = await pool.query(
      "select AreaComun.precio from areacomun, reservacion WHERE AreaComun.idArea=Reservacion.idArea AND AreaComun.estatus=$1 AND Reservacion.estatus=$2;",
      ["A", "A"]
    );

    //costo total precio por cantidad de dias
    const costo = costoC * Number(contDia);

    const result = await pool.query(
      "INSERT INTO Reservacion(codReserva,idCliente,idarea,costo,descripcionR,estatus) VALUES($1, $2, $3, $4,$5,$6) RETURNING *",
      [codReserva, idCliente, idArea, Number(costo), descripcionR, "A"]
    );
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const eliminarReservacion = async (req, res, next) => {
  try {
    const { idLocal } = req.params;

    const result = await pool.query(
      "UPDATE Reservacion set estatus=$1 WHERE idReserva= $2",
      ["I", idReserva]
    );
    console.log(result);
  } catch (error) {
    next(error);
  }
};

const actualizarReservacion = async (req, res, next) => {
  try {
    const { idLocal } = req.params;
    const { descripcion, dimensionL, categoria } = req.body;

    const result = await pool.query(
      "UPDATE Local set descripcion=$1 , dimensionL=$2 , categoria=$3   WHERE idLocal= $4 AND estatus=$5 RETURNING *",
      [descripcion, dimensionL, categoria, idLocal, "A"]
    );

    if (result.rows.length === 0)
      return res.status(404).json({
        message: "Local no encontrado",
      });

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllReservaciones,
  getReservacion,
  createReservacion,
  eliminarReservacion,
  actualizarReservacion,
};
