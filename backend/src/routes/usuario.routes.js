const { Router } = require("express");
const { createUsuario } = require("../controllers/usuario.controllers");

const router = Router();

router.post("/usuario", createUsuario);
module.exports = router;
