const pool = require("../db");

const getAllAreas = async (req, res,next) => {
  try {
    const result = await pool.query("SELECT * FROM AreaComun");

    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

const getAreas = async (req, res,next) => {
  try {
    const { idArea } = req.params;

    const result = await pool.query(
      "SELECT * FROM AreaComun  WHERE idArea= $1 and estatus= $2",
      [idArea, "A"]
    );
    if (result.rows.length === 0)
      return res.status(404).json({
        message: "Area no encontrado",
      });

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const createArea = async (req, res,next) => {
  try {
    const { codArea, descripcion, dimensionA,tipoA,precio } = req.body;

    const result = await pool.query(
      "INSERT INTO AreaComun (codArea, descripcion, dimensionA, tipoA,precio, estatus ) VALUES($1, $2, $3, $4, $5,$6) RETURNING *",
      [codArea, descripcion, dimensionA,tipoA,precio, "A"]
    );

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const eliminarArea = async (req, res,next) => {
  try {
    const { idArea } = req.params;

    const result = await pool.query(
      "UPDATE AreaComun set estatus=$1 WHERE idArea= $2",
      ["I", idArea]
    );
    console.log(result);
  } catch (error) {
    next(error);
  }
};

const actualizarArea = async (req, res,next) => {
  try {
    const { idArea } = req.params;
    const { descripcion, dimensionA, tipoA } = req.body;

    const result = await pool.query(
      "UPDATE AreaComun set descripcion=$1 , dimensionA=$2 , tipoA=$3   WHERE idArea= $4 AND estatus=$5 RETURNING *",
      [descripcion, dimensionA, tipoA, idArea, "A"]
    );
  
    
    if (result.rows.length === 0)
    return res.status(404).json({
      message: "Area  no encontrado",
      
    });

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllAreas,
  getAreas,
  createArea,
  eliminarArea,
  actualizarArea,
};
