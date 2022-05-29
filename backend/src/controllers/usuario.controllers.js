const pool = require("../db");

const createUsuario = async (req, res, next) => {
  try {
    const { correo, contrasena } = req.body;

    const result = await pool.query(
      "INSERT INTO Usuario (correo, contrasena, estatus ) VALUES($1, $2, $3) RETURNING *",
      [correo,contrasena,"A"]
    );

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUsuario,
};
