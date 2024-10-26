const mongoose = require('mongoose');
const { Schema } = mongoose;

const CampanasSchema = new Schema({
    nombre: String,
    estado: String,
    tipo: String,
    producto: [String],
    fechaCreacion: Date,
    fechaInicio: Date,
    fechaEstimacionCierre: Date,
    publicoObjetivo: String,
    patrocinador: [String],
    asignadoA: String,
    presupuesto: Number,
    costeReal: Number,
    estimacionVentas: Number,
    ventasTotales: Number,
    descripcion: String,
});

module.exports = mongoose.model('Campanas', CampanasSchema);