const { Router } = require("express");
const { getAllReservaciones, getReservacion, createReservacion, eliminarReservacion, actualizarReservacion } = require("../controllers/reservaciones.controllers");

const router = Router();

router.get("/reservaciones", getAllReservaciones);

router.get("/reservaciones/:idReservacion", getReservacion);

router.post("/reservaciones", createReservacion);

router.delete("/reservaciones/:idReservacion", eliminarReservacion);

router.put("/reservaciones/:idReservacion", actualizarReservacion);

module.exports = router;
