const mongoose = require('mongoose');
const { Schema } = mongoose;

const FollowUpContractsSchema = new Schema({
    nombre: { type: String, required: true },
    empresa: { type: String, required: true },
    correoElectronico: { type: String, required: true },
    telefono: { type: String, required: true },
    fechaContactoInicial: { type: Date, required: true },
    fechaSeguimiento: { type: Date },
    razon: { type: String },  // Campo para la razón
    soluciones: { type: String }  // Campo para las soluciones
});

module.exports = mongoose.model('FollowUpContracst', FollowUpContractsSchema);
