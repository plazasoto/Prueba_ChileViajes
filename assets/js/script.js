$(document).ready(function(){
    //inicialización requerida para tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    $("#botonEnviar").click(function () {
        alert("Mensaje enviado.");
    });

});