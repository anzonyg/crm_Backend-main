const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ mensaje: 'Acceso denegado' });

    try {
        const verified = jwt.verify(token, 'secretkey');
        req.usuarioId = verified.id;
        next();
    } catch (error) {
        res.status(400).json({ mensaje: 'Token no válido' });
    }
};

module.exports = verificarToken;
