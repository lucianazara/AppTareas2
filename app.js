const $ = (selector) => document.querySelector(selector);

let botonTarea = $("#btn-agregar");
let tareaPendiente = $(".tarea-pendiente");
let tarea = $("#tarea")
let tareasPendientes = $("#tareas-pendientes")
let modal = $(".modal-contenedor");
let botonModoOscuro = $("#btn-modo-oscuro")


window.addEventListener("load", function(){


botonModoOscuro.addEventListener("click", function(){
    document.body.classList.remove("modo-claro");
    document.body.classList.add("modo-oscuro");
    if(botonModoOscuro.innerHTML == "Modo claro"){
        document.body.classList.add("modo-claro");
        botonModoOscuro.innerHTML = "Modo oscuro";
    

    } else {
        document.body.classList.remove("modo-claro");
        botonModoOscuro.innerHTML = "Modo claro";
      
    }
})

tarea.addEventListener("input", function(e){
    e.preventDefault();
    tareasPendientes.innerHTML = e.target.value;
})

botonTarea.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("modal-mostrar");
})




})