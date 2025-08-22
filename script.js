const botonNaturaleza = document.getElementById("icoNaturaleza");
const botonCiudad = document.getElementById("icoCiudad");
const botonGente = document.getElementById("icoGente");
const botonComida = document.getElementById("icoComida");
const botonTodas = document.getElementById("icoTodo");
const fondoGaleria = document.getElementById("galeriaId");
const fondoContainer = document.getElementById("containerId");
const titulo = document.getElementById("tituloId");
const iconosFondo = document.getElementById("iconosId");
const containerIconosMenu = document.querySelector(".iconosMenuContainer");
const fotoMarcos = document.getElementById("fotoMarcos");
let menuClick = document.querySelector(".menuDesplegableDivClick");
let menu = document.querySelector(".menuDesplegableDiv");

const imgNaturaleza = document.querySelectorAll(".naturaleza");
const imgCiudad = document.querySelectorAll(".ciudad");
const imgGente = document.querySelectorAll(".gente");
const imgComida = document.querySelectorAll(".comida")
const global = document.querySelectorAll(".global");
const botones = document.querySelectorAll(".boton");


botonNaturaleza.onclick = fotosNaturaleza;
botonCiudad.onclick = fotosCiudad;
botonGente.onclick = fotosGente;
botonComida.onclick = fotosComida;
botonTodas.onclick = todas;
menuClick.onclick = desplegar;


//Menu desplegable
function desplegar(){
if(menu.classList.toggle("change")){
  //PONERLE OPACITY 1 A LOS BOTONES ACA
    
    containerIconosMenu.classList.toggle("animacionMenu");
    containerIconosMenu.classList.remove("animacionMenuInv");
  //  global.forEach((global) => {
  //   global.style.opacity = "40%";
  // });
}else{
  containerIconosMenu.classList.toggle("animacionMenuInv");
  containerIconosMenu.classList.remove("animacionMenu");
  
  //      global.forEach((global) => {
  //   global.style.opacity = "100%";
  //   global.style.display = "block";
  // });
}

 
}
//Intersection Observer para animaciones en scroll

const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      
      entry.target.classList.add("animacionGaleria");
    }
  })
}, {threshold: 0.1})
 global.forEach(global => observer.observe(global));
 anim1.forEach(anim1 => observer.observe(anim1));


function todas(){
  titulo.innerText = "Galería";
    global.forEach((global) => {
     
     global.style.display = "block";
   });
}


function fotosNaturaleza() {
   animacionGaleria();
   titulo.innerText = "Naturaleza";
    imgNaturaleza.forEach((imgNaturaleza) => {
    imgNaturaleza.style.opacity = "100%";
    imgNaturaleza.style.display = "block";
  });
  
  imgCiudad.forEach((imgCiudad) => {
    imgCiudad.style.display = "none";
  });

  imgGente.forEach((imgGente) => {
    imgGente.style.display = "none";
  });

  imgComida.forEach((imgComida)=> {
    imgComida.style.display = "none";
  })
}

function fotosCiudad() {
 animacionGaleria();
 titulo.innerText = "Urbano";
  imgCiudad.forEach((imgCiudad) => {
    imgCiudad.style.opacity = "100%";
    imgCiudad.style.display = "block";
  });

  imgNaturaleza.forEach((imgNaturaleza) => {
    imgNaturaleza.style.display = "none";
  });

  imgGente.forEach((imgGente) => {
    imgGente.style.display = "none";
  });

  imgComida.forEach((imgComida)=>{
    imgComida.style.display = "none";
  })
}

function fotosGente() {
  animacionGaleria();
  titulo.innerText = "Personas";
  imgGente.forEach((imgGente) => {
    imgGente.style.opacity = "100%"
    imgGente.style.display = "block";
  });

  imgCiudad.forEach((imgCiudad) => {
    imgCiudad.style.display = "none";
  });

  imgNaturaleza.forEach((imgNaturaleza) => {
    imgNaturaleza.style.display = "none";
  });

  imgComida.forEach((imgComida)=>{
    imgComida.style.display = "none";
  })
}

function fotosComida(){
  animacionGaleria();
  titulo.innerText = "Culinario";
  imgComida.forEach((imgComida) => {
    imgComida.style.opacity = "100%"
    imgComida.style.display = "block";
  });

  imgCiudad.forEach((imgCiudad) => {
    imgCiudad.style.display = "none";
  });

  imgNaturaleza.forEach((imgNaturaleza) => {
    imgNaturaleza.style.display = "none";
  });

  imgGente.forEach((imgGente)=>{
    imgGente.style.display = "none";
  })
}

function animacionGaleria(){
  fondoContainer.classList.toggle("animacionGaleria");

  function removerClase(){
    fondoContainer.classList.remove("animacionGaleria");
  }
 setTimeout(removerClase, 500);
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