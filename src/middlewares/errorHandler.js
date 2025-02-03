// Manejador de errores evitar que la aplicacion se caiga, proporciona respuestas claras al cliente
export default (err, req, res, next) => {
// mandamos un log del error
    console.log(err.stack);
    const statusCode = err.statusCode || 500;
    const message = err.message || "internal server error"

    res.status(statusCode).json({message});
}
