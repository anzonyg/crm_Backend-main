const mongoose = require('mongoose');
const { Schema } = mongoose;

const InventarioSchema = new Schema({
    idProducto: { type: String, required: true }, // Identificador del producto
    nombreProducto: { type: String, required: true }, // Nombre del producto
    proveedor: { type: String, required: true }, // Nombre del proveedor
    precio: { type: Number, required: true }, // Precio del producto
    unidadesDisponibles: { type: Number, required: true }, // Cantidad de unidades disponibles
    estadoProducto: { type: String, required: true }, // Estado del producto (e.g., Activo, Inactivo)
});

module.exports = mongoose.model('Inventario', InventarioSchema);
