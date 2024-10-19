const mongoose = require('mongoose');
const { Schema } = mongoose;

const LeadSchema = new Schema({
    nombre: String,
    empresa: String,
    correoElectronico: String,
    telefono: String,
    fechaContacto: Date,
    fuenteLead: String,
    estadoLead: String,
    interes: String,
    fechaSeguimiento: Date,
    notasComentarios: String 
});

module.exports = mongoose.model('Lead', LeadSchema);
