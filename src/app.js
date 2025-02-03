import express from "express";
import routes from "./routes/index.js"
import dotenv from "dotenv";
import errorHandler from "./middlewares/errorHandler.js"; //manejador de errores
// Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

// Utilizaremmos este middleware para parsear JSOPN
app.use(express.json());

// Montaremos las rutas 
app.use("/", routes);

// middleware para el maejo de errore
app.use(errorHandler);

app.listen(PORT, HOST, ()=>{
    console.log(`Servidor corriendo en http://${HOST}:${PORT}`);
})