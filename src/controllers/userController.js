// Logica para las rutas de usuarios
export const getUsers = (req, res)=>{
    res.json({message: "List To Users:"})

}

// Creamos un nuevo usuario
export const createUser = (req, res)=>{
    const user = req.body;
    res.status(201).json({message: "Usuario Creado", user})

}