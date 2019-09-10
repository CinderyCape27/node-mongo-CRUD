// Task es parte de los modelos como esquema de Mongoose
const mongoose = require('mongoose');

// El esquema nos permite definir como van a lucir los datos
const schema = Mongoose.Schema;

// Objeto taskSchema define cómo será el modelo
const taskSchema = new schema({
    title:String,
    description: String,
    status: {
        type: Boolean,
        default: false
    },
});
// mongoose.model() indica que guardará el esquema en una nueva colección para mongoDB
module.exports = mongoose.model('task', taskSchema);