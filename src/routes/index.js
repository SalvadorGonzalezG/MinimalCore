import express from "express";
import userRoutes from "./userRoutes.js"; // importamos las rutas del usuario
import authRoutes from "./authRoutes.js"
const router = express.Router();

//Colocamos las rutas del usuario bajo /users
router.use("/users", userRoutes);
// rutas de autenticacion
router.use("/auth", authRoutes);

// ruta de RAIZ
router.get("/",(req, res)=>{
    res.send("Welcom to HOME PAGE")
})

// exportamos la ruta para poder 
export default router;

