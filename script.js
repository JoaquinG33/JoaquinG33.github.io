const botonNaturaleza = document.getElementById("btnNaturaleza");
const botonCiudad = document.getElementById("btnCiudad");
const botonGente = document.getElementById("btnGente");
const fondoGaleria = document.getElementById("galeriaId");
const fondoContainer = document.getElementById("containerId");
const titulo = document.getElementById("tituloId");
const iconosFondo = document.getElementById("iconosId");
const containerIconosMenu = document.querySelector(".iconosMenuContainer");
let menuClick = document.querySelector(".menuDesplegableDivClick");
let menu = document.querySelector(".menuDesplegableDiv");

const imgNaturaleza = document.querySelectorAll(".naturaleza");
const imgCiudad = document.querySelectorAll(".ciudad");
const imgGente = document.querySelectorAll(".gente");
const global = document.querySelectorAll(".global");
const botones = document.querySelectorAll(".boton");


// botonNaturaleza.onclick = fotosNaturaleza;
// botonCiudad.onclick = fotosCiudad;
// botonGente.onclick = fotosGente;


menuClick.onclick = desplegar;


//Menu desplegable
function desplegar(){
if(menu.classList.toggle("change")){
  //PONERLE OPACITY 1 A LOS BOTONES ACA
    containerIconosMenu.classList.toggle("animacionMenu");
   global.forEach((global) => {
    global.style.opacity = "40%";
  });
}else{
  containerIconosMenu.classList.remove("animacionMenu");
       global.forEach((global) => {
    global.style.opacity = "100%";
  });
}

 
}


// if(menu.isChecked = true){
//   console.log("anduvo");
// }else{
//   console.log("off")
// }
//resetear al hacer click

// document.addEventListener("click", function () {
//   if (event.target.closest("button")) return;
//   titulo.style.background = "var(--color-fondo)";
//   fondoGaleria.style.background = "white";
//   fondoGaleria.style.borderColor = "var(--color-fondo)";
//   fondoContainer.style.background = "white";

//   imgNaturaleza.forEach((imgNaturaleza) => {
//     imgNaturaleza.style.opacity = "100%";
//   });

//   imgCiudad.forEach((imgCiudad) => {
//     imgCiudad.style.opacity = "100%";
//   });

//   botones.forEach((botones) => {
//     botones.style.background = "lightgray";
//     botones.style.color = "var(--color-fondo)";
//   });

//   imgGente.forEach((imgGente) => {
//     imgGente.style.opacity = "100%";
//   });
// });

function fotosNaturaleza() {
  titulo.style.background = "var(--naturaleza)";
  fondoGaleria.style.borderColor = "var(--naturalezaFondo)";
  fondoContainer.style.background = "var(--naturalezaFondo)";
  // iconosFondo.style.background = "var(--naturalezaFondo)";

  botones.forEach((botones) => {
    botones.style.background = "var(--naturalezaFondo)";
    botones.style.color = "var(--naturaleza)";
  });

  imgNaturaleza.forEach((imgNaturaleza) => {
    imgNaturaleza.style.opacity = "100%";
  });

  imgCiudad.forEach((imgCiudad) => {
    imgCiudad.style.opacity = "15%";
  });

  imgGente.forEach((imgGente) => {
    imgGente.style.opacity = "15%";
  });
}

function fotosCiudad() {
  titulo.style.background = "var(--ciudad)";
  fondoGaleria.style.borderColor = "var(--ciudadFondo)";
  fondoContainer.style.background = "var(--ciudadFondo)";
  // iconosFondo.style.background = "var(--ciudadFondo)";

  botones.forEach((botones) => {
    botones.style.background = "var(--ciudadFondo)";
    botones.style.color = "var(--ciudad)";
  });

  imgCiudad.forEach((imgCiudad) => {
    imgCiudad.style.opacity = "100%";
  });

  imgNaturaleza.forEach((imgNaturaleza) => {
    imgNaturaleza.style.opacity = "15%";
  });

  imgGente.forEach((imgGente) => {
    imgGente.style.opacity = "15%";
  });
}

function fotosGente() {
  titulo.style.background = "var(--gente)";
  fondoGaleria.style.borderColor = "var(--genteFondo)";
  fondoContainer.style.background = "var(--genteFondo)";

  botones.forEach((botones) => {
    botones.style.background = "var(--genteFondo)";
    botones.style.color = "var(--gente)";
  });

  imgGente.forEach((imgGente) => {
    imgGente.style.opacity = "100%";
  });

  imgCiudad.forEach((imgCiudad) => {
    imgCiudad.style.opacity = "15%";
  });

  imgNaturaleza.forEach((imgNaturaleza) => {
    imgNaturaleza.style.opacity = "15%";
  });
}