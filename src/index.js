const express = require("express");
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan');

//connecting to db
mongoose.connect('mongodb://localhost/crud-mongo', { useNewUrlParser: true, useUnifiedTopology: true },)
    .then(db => console.log('DB connected'))
    .catch(err => console.log(err));
 




// Importing routes
const indexRoutes = require('./routes/index');


const app = express();
// Settings
app.set("port", process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views')); //indica la ruta de la carpeta views
app.set('view enigne', 'ejs');

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})) // entiende los request html del cliente 
// Routes
app.use('/', indexRoutes);
// Static Files

// Start the server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);

  
});
