// rUTAS ESPECIFICAS de usuarios
import express from "express";
import {getUsers, createUser} from "../controllers/userController.js"; //import de los controladores para manejo de errores
import authMiddleware from "../middlewares/authMiddleware.js"

const router = express.Router();

// aplicaremos middleware a todas las rutas de usuarios
router.use(authMiddleware);

//Definimos las rutas
router.get("/", getUsers);
router.post("/" ,createUser);

export default router;