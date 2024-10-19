const mongoose = require('mongoose');
const { Schema } = mongoose;

const TareaSchema = new Schema({
    titulo: String,  // Título de la tarea
    descripcion: String,  // Descripción detallada de la tarea
    responsable: String,  // Persona o departamento responsable de la tarea
    fechaInicio: Date,  // Fecha de inicio de la tarea
    fechaFin: Date,  // Fecha estimada de finalización
    estado: String,  // Estado de la tarea (Pendiente, En progreso, Completada, etc.)
    prioridad: String,  // Prioridad de la tarea (Alta, Media, Baja)
    observaciones: String,  // Observaciones adicionales
    subtareas: [{
        descripcion: String,  // Descripción de la subtarea
        estado: String,  // Estado de la subtarea (Pendiente, Completada)
        responsable: String,  // Persona responsable de la subtarea
        fechaLimite: Date  // Fecha límite de la subtarea
    }]
});

module.exports = mongoose.model('Tarea', TareaSchema);

