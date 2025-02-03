import express from "express";
import {login} from "../controllers/authController"

// Se crea un enrutador  utilizando express.Router()
const router = express.Router();

// Se define una ruta POST en /login 
router.post("/login", login);
// lafuncion login se encargara de procesar las credenciales enviadas por el cliente como (username y password)

// se exporta el enrutador para que pueda ser utilizado posteriormente
export default router;
