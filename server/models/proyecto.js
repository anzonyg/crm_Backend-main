const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProyectoSchema = new Schema({
    nombre: { type: String, required: true }, // El nombre del proyecto
    descripcion: { type: String, required: true }, // Descripción del proyecto
    cliente: { type: String, required: true }, // Cliente relacionado con el proyecto
    fechaInicio: { type: Date, required: true }, // Fecha de inicio del proyecto
    fechaFin: { type: Date }, // Fecha de finalización del proyecto
    estado: { 
        type: String, 
        enum: ['Planeado', 'En Progreso', 'Finalizado'], // Estados posibles
        default: 'Planeado' 
    },
    presupuesto: { type: Number, required: true }, // Presupuesto asignado
    notasComentarios: { type: String } // Notas o comentarios adicionales
});

module.exports = mongoose.model('Proyecto', ProyectoSchema);
