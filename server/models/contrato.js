const mongoose = require('mongoose');
const { Schema } = mongoose;

const ContratoSchema = new Schema({
    nombre: String,
    empresa: String,
    correoElectronico: String,
    telefono: String,
    fechaContacto: Date,
    fuenteContrato: String,
    estadoContrato: String,
    interes: String,
    fechaSeguimiento: Date,
    notasComentarios: String 
});

module.exports = mongoose.model('Contrato', ContratoSchema);
