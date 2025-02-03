import express from "express";
import userRoutes from "./userRoutes.js"; // importamos las rutas del usuario

const router = express.Router();

//Colocamos las rutas del usuario bajo /users
router.use("/users", userRoutes);

// ruta de RAIZ
router.get("/",(req, res)=>{
    res.send("Welcom to HOME PAGE")
})

// exportamos la ruta para poder 
export default router;

