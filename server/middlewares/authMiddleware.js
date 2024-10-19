const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.header('x-auth-token');

    // Verificar si no hay token
    if (!token) {
        return res.status(401).json({ msg: 'No hay token, permiso denegado' });
    }

    // Verificar token
    try {
        const decoded = jwt.verify(token, 'secretkey'); // Usa la misma clave que usaste para firmar el token
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token no es válido' });
    }
};

module.exports = authMiddleware;
