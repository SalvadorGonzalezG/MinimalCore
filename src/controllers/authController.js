// Crearemos un controlador para la autenticacion del usuario
import jwt from "jsonwebtoken";

export const login = () =>{
    const { username, password } = req.body;

    //Simulamos una v alidacion del usuario

    if(username === "salvador" && password === "1234"){
        const token = jwt.sign({}, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });
        res.json({token})
    } else{
        res.status(401).json({message: "Credenciales invalidas"})
    }
}