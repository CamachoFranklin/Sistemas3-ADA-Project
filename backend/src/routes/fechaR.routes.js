const { Router } = require("express");
const { getAllFechaR, getFechaR, createFechaR } = require("../controllers/fechasR.controllers");

const router = Router();

router.get("/fechasR", getAllFechaR);

router.get("/fechasR/:idFechaR", getFechaR);

router.post("/fechasR", createFechaR);

module.exports = router;
