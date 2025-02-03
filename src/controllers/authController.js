// Crearemos un controlador para la autenticacion del usuario
import jwt from "jsonwebtoken";

// definimos la funcion login que sera exportada para ser utilizada en otros modulos
export const login = () =>{
    // Se extraen las propiedades del cuerpo de la solicitud
    const { username, password } = req.body;

    //Simulamos una validacion de credenciales del usuario
    if(username === "salvador" && password === "1234"){
    // Si las credenciales son validas se genera un token 
        const token = jwt.sign({}, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });
    // Si la respuesta es exitosa, se envia una respuesta JSON al cliente que contiene el token generado
        res.json({token})
    } else{
    // en caso contrario si las credenciales no son validas, se envia una respuesta con un codigo de estado HTTP 401 (No autorizado)
        res.status(401).json({message: "Credenciales invalidas"})
    }
}