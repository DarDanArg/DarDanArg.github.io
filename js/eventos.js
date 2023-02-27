//evento de entrada y salida de la Pagina2 con boton sobremi y volver//

const sobremi = document.getElementById("sobremi");
const pagina2 = document.getElementById("pagina2");
const volver = document.getElementById("volver");

sobremi.addEventListener("click", ()=>{
    pagina2.classList.add("entrar");
});
volver.addEventListener("click", ()=>{
    pagina2.classList.remove("entrar");
});