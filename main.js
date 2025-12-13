const tarea = document.querySelector("#tarea")
const agregar = document.querySelector("#agregar")
const lista = document.querySelector("#lista")

// muestra lo que estaba guardado cuando la pagina carga
document.addEventListener("DOMContentLoaded", mostrarGuardadas);

// cuando se hace click en agregar:
agregar.addEventListener("click",()=> {
    const texto = tarea.value
    if (texto !== "") {
        guardar(texto)
        dibujar(texto)
        tarea.value = ""
    }
})

// dibuja o crea una texto en la lista
function dibujar(texto) {
    const item = document.createElement("li")
    item.textContent = texto;
    lista.appendChild(item)
}

// guarda los textos creadas en localstorage
function guardar(texto){
    const tareas= traer()
    tareas.push(texto)
    localStorage.setItem("misTareas", JSON.stringify(tareas))
}

// traigo los textos desde localstorage
function traer(){
    return JSON.parse(localStorage.getItem("misTareas")) || [] //si lo de la izquierda no existe, devuelve array vacio
}

// muestra todos los guardados
function mostrarGuardadas(){
    const tareas = traer();
    tareas.forEach(dibujar);
}