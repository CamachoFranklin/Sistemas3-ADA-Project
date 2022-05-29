const { Router } = require("express");
const {
  getAllAreas,
  getAreas,
  createArea,
  eliminarArea,
  actualizarArea,
} = require("../controllers/areas.controllers");

const router = Router();

router.get("/areas", getAllAreas);

router.get("/areas/:idArea", getAreas);

router.post("/areas", createArea);

router.delete("/areas/:idArea", eliminarArea);

router.put("/areas/:idArea", actualizarArea);

module.exports = router;
