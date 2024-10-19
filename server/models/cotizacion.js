const mongoose = require('mongoose');
const { Schema } = mongoose;

const CotizacionSchema = new Schema({
    nombre: String,   // Nombre del cliente o empresa
    empresa: String,
    correo: String,
    telefono: String,
    descripcion: String,   // Descripción general de la cotización
    observaciones: String,  // Cualquier observación adicional
    items: [{
        descripcion: String,   // Descripción del ítem
        cantidad: Number,   // Cantidad del ítem
        precioUnitario: Number,   // Precio unitario del ítem
        precioTotal: Number,  // Precio total para la cantidad especificada
    }],
    totalGeneral: Number,  // Total general de la cotización calculado
    estado: {
        type: String,
        enum: ['pendiente', 'aprobada', 'desaprobada'],
        default: 'pendiente'
    },  // Estado de la cotización: 'pendiente', 'aprobada', 'desaprobada'
    motivoDesaprobacion: String,   // Motivo de la desaprobación (opcional)
    fechaCreacion: {
        type: Date,
        default: Date.now
    }  // Fecha en que se creó la cotización
});
module.exports = mongoose.model('Cotizacion', CotizacionSchema);
