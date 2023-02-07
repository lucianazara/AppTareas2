const $ = (selector) => document.querySelector(selector);

let botonTarea = $("#btn-agregar");
let tareaPendiente = $(".tarea-pendiente");
let tarea = $("#tarea")
let tareasPendientes = $("#tareas-pendientes")
let modal = $(".modal-contenedor");
let botonModoOscuro = $("#btn-modo-oscuro")
let tituloTarea = $("#titulo-tarea");
let mensajeError = $("#mensaje-error");
let estado = $("#estado");
const  regExp =  /^[a-zA-Z0-9-\sñáéíóúü!:?'¡].{5,20}$/



window.addEventListener("load", function(){

tituloTarea.addEventListener("input", function() {
    console.log(tituloTarea.value);
})

let erroresValidacion = false;


// tituloTarea.addEventListener("blur", function(){
//     if(!tituloTarea.value.trim()){
//         mensajeError.innerHTML = "El titulo es requerido";
//         mensajeError.style.color = "#ff0000";
//         erroresValidacion = true;
//     } else if(!regExp.test(tituloTarea.value)){
//         mensajeError.innerText = "El titulo no es valido";
//         mensajeError.style.color = "red";
//         mensajeError = true;
//     }else {
//         mensajeError.innerText= "Tarea valida";
//         mensajeError.style.color = "blue";

//     }
//     })


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

// tarea.addEventListener("input", function(e){
//     e.preventDefault();
//     tareasPendientes.innerHTML = e.target.value;
// })

botonTarea.addEventListener("click",function(e) {
    e.preventDefault();
    modal.classList.add("modal-mostrar");
})

tituloTarea.addEventListener("input", function(e) {
    e.preventDefault();
    tareaPendiente.innerHTML = e.target.value;
})

if(tituloTarea.value.length <= 5) {
    mensajeError.innerText = "La tarea debe tener mas de 5 caracteres";
    mensajeError.style.color = "red";
    mensajeError.style.fontSize = "10px";
    erroresValidacion = true;
} else {
    mensajeError.innerText = "Tarea agregada";
}

if(estado.value == ""){
    estado.innerText = "Tiene que seleccionar un estado";
    estado.style.color = "red";
    estado.style.fontSize = "10px";
    erroresValidacion = true;
} else {
    estado.innerText = "";
}


})