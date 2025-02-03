//middleware para poder autenticar 
export default (req, res, next)=>{
    const token = req.headers["authorization"];
// Si el token 
    if(!token){
        return res.status(401).json({message: "Acceso no autorizado: token no proporcionado"})
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //Agregamos el usuario decodificado al request
        req.user = decoded;
        next();
    }catch(err){
        res.status(401).json({message: "Token invalido"});
    }

}