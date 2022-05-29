const pool = require("../db");

const getAllCliente = async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM Cliente");

    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

const getCliente = async (req, res, next) => {
  try {
    const { idCliente } = req.params;

    const result = await pool.query(
      "SELECT * FROM Cliente WHERE idcliente= $1 and estatus= $2",
      [idCliente, "A"]
    );
    if (result.rows.length === 0)
      return res.status(404).json({
        message: "Cliente no encontrado",
      });

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const createCliente = async (req, res, next) => {
  try {
    const { nombre, apellido, telefono, cedula, fechadenac, direccion } =
      req.body;

    const result = await pool.query(
      "INSERT INTO Cliente (nombre,apellido,telefono,cedula,fechadenac,direccion,estatus) VALUES($1, $2, $3, $4, $5,$6, $7) RETURNING *",
      [nombre, apellido, telefono, cedula, fechadenac, direccion,"A"]
    );

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const eliminarCliente = async (req, res, next) => {
  try {
    const { idCliente } = req.params;

    const result = await pool.query(
      "UPDATE Cliente set estatus=$1 WHERE idCliente= $2",
      ["I", idCliente]
    );
    console.log(result);
  } catch (error) {
    next(error);
  }
};
/*
const actualizarCliente = async (req, res, next) => {
  try {
    const { idCliente } = req.params;
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
*/


module.exports = {
  getAllCliente,
  getCliente,
  createCliente,
  eliminarCliente,
 // actualizarCliente,
};
