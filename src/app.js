import express from "express";
import routes from "./routes/index.js"

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = "localhost";

// Utilizaremmos este middleware para parsear JSOPN
app.use(express.json());

// Montaremos las rutas 
app.use("/", routes);

app.listen(PORT, HOST, ()=>{
    console.log(`Servidor corriendo en http://${HOST}:${PORT}`);
})