const { Router } = require("express");
const { getAllCliente, getCliente, createCliente } = require("../controllers/clientes.controllers");

const router = Router();

router.get("/clientes", getAllCliente);

router.get("/clientes/:idCliente", getCliente);

router.post("/clientes", createCliente);

module.exports = router;
