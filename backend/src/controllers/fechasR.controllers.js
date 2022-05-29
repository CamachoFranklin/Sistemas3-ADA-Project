const pool = require("../db");

const getAllFechaR = async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM FechaDeR");

    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

const getFechaR = async (req, res, next) => {
  try {
    const { idFechaR } = req.params;

    const result = await pool.query(
      "SELECT * FROM FechaDeR WHERE idFechaR= $1 and estatus= $2",
      [idFechaR, "A"]
    );
    if (result.rows.length === 0)
      return res.status(404).json({
        message: "Fecha  no encontrado",
      });

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const createFechaR = async (req, res, next) => {
  try {
    const { fecha } = req.body;

    const result = await pool.query(
      "INSERT INTO FechaDeR (fecha,estatus) VALUES($1, $2) RETURNING *",
      [fecha, "A"]
    );

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllFechaR,
  getFechaR,
  createFechaR,
};
