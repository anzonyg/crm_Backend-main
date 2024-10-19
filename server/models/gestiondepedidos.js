const mongoose = require('mongoose');
const { Schema } = mongoose;

const GestionDePedidosSchema = new Schema({
    cliente: { type: String, required: true },  // Nombre del cliente
    metodoEntrega: { type: String, required: true },  // Método de entrega (Envío, Recogida, etc.)
    direccionEntrega: { type: String, required: true },  // Dirección de entrega
    fechaEntrega: { type: Date, required: true },  // Fecha estimada de entrega
    estado: { type: String, required: true },  // Estado del pedido (Pendiente, Enviado, Entregado, etc.)
    prioridad: { type: String, required: true },  // Prioridad del pedido (Alta, Media, Baja)
    observaciones: { type: String },  // Observaciones adicionales
    productos: [{
        nombre: { type: String, required: true },  // Nombre del producto
        cantidad: { type: Number, required: true },  // Cantidad del producto
        precio: { type: Number, required: true },  // Precio por unidad del producto
        total: { type: Number, required: true },  // Total (cantidad * precio)
        estado: { type: String, required: true }  // Estado del producto en el pedido (Disponible, No disponible, etc.)
    }],
    totalPedido: { type: Number, required: true } // Total del pedido sumando los productos
}, {
    timestamps: true  // Fecha de creación y actualización automática
});

module.exports = mongoose.model('GestionDePedidos', GestionDePedidosSchema);

