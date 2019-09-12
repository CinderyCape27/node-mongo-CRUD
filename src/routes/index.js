const express = require("express");
const router = express.Router();
// Contiene el esquema de mongoose
const Task = require("../models/task");

// Routes
router.get("/", async (req, res) => {
  // De la db traerá los datos guardados
  const tasks = await Task.find();
  // console.log(tasks);

  res.render("index", {
    tasks //con este objeto podremos ver las tareas en el index
  });
});
router.get("/contact", (req, res) => {
  res.render("contact");
});

router.post("/add", async (req, res) => {
  // Almacenar la tarea
  const task = new Task(req.body);
  //task.save() alamcenará las tareas
  await task.save();

  res.render("add");
});
router.get("/turn/:id", async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  task.status = !task.status;
  await task.save();
  res.redirect("/");
});
router.get("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);

  res.render("edit", {
    task
  });
});
router.post('/edit/:id', async (req, res) => {
  const { id } = req.params;
   await  Task.update({_id:id}, req.body);
   res.redirect('/');
});
// :id indica que se escribirá alguna variable
router.get("/delete/:id", async (req, res) => {
  // Params sirve para ver los parámetros de endpoint dinamico de la ruta
  const { id } = req.params;
  await Task.remove({ _id: id });

  res.redirect("/");
});

module.exports = router;
