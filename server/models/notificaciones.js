const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotificacionSchema = new Schema({
    tipo: String,  // Ej: Email, SMS, Push
    mensaje: String,  // Contenido de la notificación
    fechaEnvio: Date,  // Fecha y hora en que se generó la notificación
    estado: String,  // Estado: 'pendiente', 'enviado', 'fallido'
    intentos: Number,  // Número de intentos de envío
    observaciones: String,  // Comentarios adicionales

    usuarioDestino: String,  // Referencia al usuario destinatario
    rolDestino: String,  // Rol del destinatario: 'administrador', 'ventas', etc.

    creador: String,  // Referencia al usuario que creó la notificación
    rolCreador: String  // Rol del creador de la notificación
});

module.exports = mongoose.model('Notificacion', NotificacionSchema);
