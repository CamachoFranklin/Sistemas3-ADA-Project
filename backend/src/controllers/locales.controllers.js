const pool = require("../db");

const getAllLocales = async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM Local WHERE estatus='A'");

    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

const getLocal = async (req, res, next) => {
  try {
    const { idLocal } = req.params;

    const result = await pool.query(
      "SELECT * FROM Local  WHERE idLocal= $1 and estatus= $2",
      [idLocal, "A"]
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

const createLocal = async (req, res, next) => {
  try {
    const { codLocal, descripcion, dimensionL, categoria } = req.body;

    const result = await pool.query(
      "INSERT INTO Local (codLocal, descripcion, dimensionL, categoria, estatus ) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [codLocal, descripcion, dimensionL, categoria, "A"]
    );

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const eliminarLocal = async (req, res, next) => {
  try {
    const { idLocal } = req.params;

    const result = await pool.query(
      "UPDATE Local set estatus=$1 WHERE idLocal= $2",
      ["I", idLocal]
    );
    console.log(result);
  } catch (error) {
    next(error);
  }
};

const actualizarLocal = async (req, res, next) => {
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
  getAllLocales,
  getLocal,
  createLocal,
  eliminarLocal,
  actualizarLocal,
};
