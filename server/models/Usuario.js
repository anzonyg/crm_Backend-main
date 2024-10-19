const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const Usuario = require('../models/Usuario'); 


// Definir el esquema del Usuario
const usuarioSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio'], // Mensaje personalizado para errores de validación
        trim: true, // Eliminamos espacios en blanco innecesarios
    },
    email: {
        type: String,
        required: [true, 'El correo electrónico es obligatorio'], // Mensaje personalizado
        unique: true, // El email debe ser único
        trim: true, // Eliminamos espacios en blanco innecesarios
        match: [/.+@.+\..+/, 'Por favor ingrese un correo electrónico válido'], // Validación del formato del email
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'], // Mensaje personalizado
        minlength: [6, 'La contraseña debe tener al menos 6 caracteres'], // Aseguramos que la contraseña tenga al menos 6 caracteres
    },
}, {
    timestamps: true, // Esto añade las marcas de tiempo "createdAt" y "updatedAt" al documento
});

// Exportar el modelo
module.exports = mongoose.model('Usuario', usuarioSchema);
