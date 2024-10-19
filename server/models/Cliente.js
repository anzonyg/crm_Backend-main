const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClienteSchema = new Schema({
    nombre: String,  // Nombre completo del cliente
    correo: String,  // Correo electrónico del cliente
    telefono: String,  // Número de teléfono del cliente
    direccion: String,  // Dirección física del cliente
    empresa: String,  // Empresa a la que pertenece el cliente (si aplica)
    estado: String,  // Estado del cliente (Activo, Inactivo, etc.)
    fechaRegistro: Date,  // Fecha de registro del cliente
    observaciones: String,  // Observaciones adicionales
    contactos: [{
        nombre: String,  // Nombre del contacto asociado
        correo: String,  // Correo electrónico del contacto
        telefono: String,  // Número de teléfono del contacto
        puesto: String,  // Puesto o relación del contacto con el cliente
        fechaUltimoContacto: Date  // Fecha del último contacto con el cliente
    }]
});

module.exports = mongoose.model('Cliente', ClienteSchema);
