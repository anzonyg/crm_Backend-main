const mongoose = require('mongoose');
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const { Schema } = mongoose;

const Task = new Schema({
        nombre: String,
        correoElectronico: String,
        telefono: String,
        rol: String,   
});

module.exports = mongoose.model('catalogoEmpresas', Task);