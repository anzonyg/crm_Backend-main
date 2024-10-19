const mongoose = require('mongoose');
const { Schema } = mongoose;

const EventoActividadSchema = new Schema({
    tipo:String,  // Ej: Evento, Actividad
    subtipo:String,  // Ej: Conferencia, Taller
    modalidad:String,  // Ej: Presencial, Virtual
    nombre:String,  // Nombre del evento o actividad
    descripcion:String,
    fecha:Date,
    hora:String,
    ubicacion:String,  // Dirección física o enlace virtual
    clientes:[String],  // IDs de los clientes invitados
    clientesVIP:[String],  // IDs de los clientes VIP
    otrosInvitados:[String],  // Nombres de otros invitados
    observaciones:String 
});

module.exports = mongoose.model('EventoActividad', EventoActividadSchema);
