const tareaInput = document.getElementById("tareaInput");
const agregarBtn = document.getElementById("agregarBtn");
const listaTareas = document.getElementById("listaTareas");
const contador = document.getElementById("contador");

let totalTareas = 0;

function actualizarContador() {

  contador.textContent = "Tareas pendientes: " + totalTareas;

}

agregarBtn.addEventListener("click", function () {
const texto = tareaInput.value.trim();

if (texto === "") {

alert("Escribe una tarea primero");
  return;

 }
const nuevaTarea = document.createElement("li");
nuevaTarea.textContent = texto;

listaTareas.appendChild(nuevaTarea);

 totalTareas++;

actualizarContador();

tareaInput.value = "";

});



