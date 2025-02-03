//middleware para poder autenticar 
export default (req, res, next)=>{
    const token = req.headers["authorization"];
// Si el token 
    if(!token){
        return res.status(401).json({message: "Acceso no autorizado: token no proporcionado"})
    }
}