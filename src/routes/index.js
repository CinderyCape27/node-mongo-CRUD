const express = require('express');
const router = express.Router();
// Contiene el esquema de mongoose 
const Task = require('../models/task');

// Routes
router.get('/', async (req, res) => {
    // De la db traerá los datos guardados
    const tasks = await Task.find();
    console.log(tasks);
    
    res.render('index', {
        tasks //con este objeto podremos ver las tareas en el index
    })
})
router.get('/contact', (req, res) => {
    res.render('contact')
})

router.post('/add', async (req, res) => {
    
    // Almacenar la tarea
    const task = new Task(req.body);  
    //task.save() alamcenará las tareas
    await task.save();

    res.render('add')
})


module.exports = router;
