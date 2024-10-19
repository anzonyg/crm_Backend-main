const mongoose = require('mongoose');
const { Schema } = mongoose;
const express = require('express');

const TicketsSoporteSchema = new Schema({
    cliente: { type: String, required: true },          // Nombre del cliente
    correo: { type: String, required: true },           // Correo electrónico del cliente
    telefono: {type: String, required: true },
    asunto: { type: String, required: true },           // Asunto del ticket
    descripcion: { type: String, required: true },      // Descripción del problema o consulta
    estado: { type: String, default: 'Nuevo' },       // Estado del ticket (ej: Abierto, Cerrado)
    prioridad: { type: String, default: 'Normal' },      // Prioridad del ticket (ej: Baja, Media, Alta)
    agenteAsignado: { type: String, default: 'Jair Carrera'}                    // Agente asignado para gestionar el ticket
});

module.exports = mongoose.model('TicketsSoporte', TicketsSoporteSchema);
