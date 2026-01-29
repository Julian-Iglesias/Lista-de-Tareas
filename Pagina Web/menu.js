const menuDesplegable = document.getElementById("menu-desplegable");
const menuAbierto = document.getElementById("menu-abierto");
const cerrarMenu = document.getElementById("cerrar-menu")

menuDesplegable.addEventListener("click",(e) => {
    e.preventDefault(); // evita que el <a> recargue la pagina
    menuAbierto.classList.add("activo"); // abre menú
})

cerrarMenu.addEventListener("click",(e) =>{
    menuAbierto.classList.remove("activo"); //cierra menú
})
