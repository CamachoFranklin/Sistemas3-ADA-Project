const { Router } = require("express");
const {
  getAllLocales,
  getLocal,
  createLocal,
  eliminarLocal,
  actualizarLocal,
} = require("../controllers/locales.controllers");

const router = Router();

router.get("/locales", getAllLocales);

router.get("/locales/:idLocal", getLocal);

router.post("/locales", createLocal);

router.delete("/locales/:idLocal", eliminarLocal);

router.put("/locales/:idLocal", actualizarLocal);

module.exports = router;
