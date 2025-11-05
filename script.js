const botonNaturaleza = document.getElementById("icoNaturaleza");
const botonCiudad = document.getElementById("icoCiudad");
const botonComida = document.getElementById("icoComida");
const botonVideoclip = document.getElementById("icoClip");
const botonPanoramicas = document.getElementById("icoPano");
const botonHeroVideoclip = document.getElementById("btnClips");
const botonHeroGaleria = document.getElementById("btnGaleria");
const botonVerTodo = document.getElementById("verTodo");
const botonTodas = document.getElementById("icoTodo");
const btnForm = document.querySelector(".btnFormulario")
const fondoGaleria = document.getElementById("galeriaId");
const fondoContainer = document.getElementById("containerId");
const titulo = document.getElementById("tituloId");
const iconosFondo = document.getElementById("iconosId");
const containerIconosMenu = document.querySelector(".iconosMenuContainer");
const modeToggle = document.querySelector(".iconoToggle");
const fotoMarcos = document.getElementById("fotoMarcos");
let menuClick = document.querySelector(".menuDesplegableDivClick");
const containerGaleria = document.querySelector(".containerGaleria");
let menu = document.querySelector(".menuDesplegableDiv");

const imgNaturaleza = document.querySelectorAll(".naturaleza");
const imgCiudad = document.querySelectorAll(".ciudad");
const imgComida = document.querySelectorAll(".comida");
const videoclip = document.querySelectorAll(".videoclip");
const imgPano = document.querySelectorAll(".panoramica");
const global = document.querySelectorAll(".global");
const oculto = document.querySelectorAll(".oculto");
const botones = document.querySelectorAll(".boton");

botonNaturaleza.onclick = fotosNaturaleza;
botonCiudad.onclick = fotosCiudad;
botonComida.onclick = fotosComida;
botonPanoramicas.onclick = fotosPanoramicas;
botonVideoclip.onclick = videoClips;
botonHeroGaleria.onclick = todas;
botonHeroVideoclip.onclick = videoClips;
botonTodas.onclick = todas;
modeToggle.onclick = toggle;
menuClick.onclick = desplegar;
botonVerTodo.onclick = verTodo;
let mediaQ = window.matchMedia("(max-width: 600px)");

//Menu desplegable
function desplegar() {
  if (menu.classList.toggle("change")) {
    containerIconosMenu.classList.toggle("animacionMenu");
    containerIconosMenu.classList.remove("animacionMenuInv");
  } else {
    containerIconosMenu.classList.toggle("animacionMenuInv");
    containerIconosMenu.classList.remove("animacionMenu");
  }
}
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && e.target !== menuClick) {
    containerIconosMenu.classList.remove("animacionMenu");
    menu.classList.remove("change");
  }
});
//Toggle de Dark/Light mode
function toggle() {
  if (document.body.classList.contains("darkMode")) {
    document.body.classList.remove("darkMode");
  } else {
    document.body.classList.add("darkMode");
  }
}

//Intersection Observer para animaciones en scroll

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const anim = entry.target.dataset.anim;
        entry.target.classList.add(anim);
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

document.querySelectorAll(".anim").forEach((el) => observer.observe(el));

oculto.forEach((oculto) => {
  oculto.style.display = "none";
});

function checkearMediaQ() {
  if (mediaQ.matches) {
    containerGaleria.style.columns = "2 180px";
    console.log("cel");
  } else {
    containerGaleria.style.columns = "3 300px";
    console.log("pc");
  }
}
function verTodo() {
  oculto.forEach((oculto) => {
    oculto.style.display = "block";
  });
  botonVerTodo.style.display = "none";
}

function todas() {
  titulo.innerText = "Galería";
  checkearMediaQ();
  global.forEach((global) => {
    global.style.display = "block";
  });

  videoclip.forEach((videoclip) => {
    videoclip.style.display = "none";
  });
  botonVerTodo.style.display = "block";
}
function fotosPanoramicas() {
  animacionGaleria();
  titulo.innerText = "Panorámicas";
  containerGaleria.style.columns = "1 300px";

  imgPano.forEach((imgPano) => {
    imgPano.style.opacity = "100%";
    imgPano.style.display = "block";
  });

  imgNaturaleza.forEach((imgNaturaleza) => {
    imgNaturaleza.style.display = "none";
  });

  imgCiudad.forEach((imgCiudad) => {
    imgCiudad.style.display = "none";
  });

  imgComida.forEach((imgComida) => {
    imgComida.style.display = "none";
  });

  videoclip.forEach((videoclip) => {
    videoclip.style.display = "none";
  });
  botonVerTodo.style.display = "none";
}
function fotosNaturaleza() {
  animacionGaleria();
  checkearMediaQ();
  titulo.innerText = "Naturaleza";

  imgNaturaleza.forEach((imgNaturaleza) => {
    imgNaturaleza.style.opacity = "100%";
    imgNaturaleza.style.display = "block";
  });

  imgCiudad.forEach((imgCiudad) => {
    imgCiudad.style.display = "none";
  });

  imgComida.forEach((imgComida) => {
    imgComida.style.display = "none";
  });
  imgPano.forEach((imgPano) => {
    imgPano.style.display = "none";
  });

  videoclip.forEach((videoclip) => {
    videoclip.style.display = "none";
  });
  botonVerTodo.style.display = "none";
}

function fotosCiudad() {
  animacionGaleria();
  checkearMediaQ();
  titulo.innerText = "Urbano";

  imgCiudad.forEach((imgCiudad) => {
    imgCiudad.style.opacity = "100%";
    imgCiudad.style.display = "block";
  });
  imgPano.forEach((imgPano) => {
    imgPano.style.display = "none";
  });

  imgNaturaleza.forEach((imgNaturaleza) => {
    imgNaturaleza.style.display = "none";
  });


  imgComida.forEach((imgComida) => {
    imgComida.style.display = "none";
  });

  videoclip.forEach((videoclip) => {
    videoclip.style.display = "none";
  });
  botonVerTodo.style.display = "none";
}


function fotosComida() {
  animacionGaleria();
  checkearMediaQ();
  titulo.innerText = "Culinario";

  imgComida.forEach((imgComida) => {
    imgComida.style.opacity = "100%";
    imgComida.style.display = "block";
  });

  imgPano.forEach((imgPano) => {
    imgPano.style.display = "none";
  });

  imgCiudad.forEach((imgCiudad) => {
    imgCiudad.style.display = "none";
  });

  imgNaturaleza.forEach((imgNaturaleza) => {
    imgNaturaleza.style.display = "none";
  });

 
  videoclip.forEach((videoclip) => {
    videoclip.style.display = "none";
  });
  botonVerTodo.style.display = "none";
}

function videoClips() {
  animacionGaleria();
  checkearMediaQ();
  titulo.innerText = "Videoclips";

  videoclip.forEach((videoclip) => {
    videoclip.style.opacity = "100%";
    videoclip.style.display = "block";
  });
  imgPano.forEach((imgPano) => {
    imgPano.style.display = "none";
  });

  imgCiudad.forEach((imgCiudad) => {
    imgCiudad.style.display = "none";
  });

  imgNaturaleza.forEach((imgNaturaleza) => {
    imgNaturaleza.style.display = "none";
  });

  imgComida.forEach((imgComida) => {
    imgComida.style.display = "none";
  });
  botonVerTodo.style.display = "none";
}

function animacionGaleria() {
  fondoContainer.classList.toggle("animacionGaleria");

  function removerClase() {
    fondoContainer.classList.remove("animacionGaleria");
  }
  setTimeout(removerClase, 500);
}

//WEB3FORMS

const form = document.getElementById('formulario');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Enviando formulario..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "¡Formulario enviado!";
                btnForm.style.background = "oklch(70.8% 0 0)";
                btnForm.style.zIndex = "-1";

            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "El formulario no pudo ser enviado. Intente más tarde.";
        })
     
});