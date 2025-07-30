
//DARK/LIGHT MODE
// const modeSwitch = document.getElementById("modeSwitch");

// let lightMode = localStorage.getItem("lightMode") === "enabled";

// const enableLightmode = () => {
//     document.body.classList.add("lightMode");
//     localStorage.setItem("lightMode", "enabled");
// }

// const disableLightmode = () => {
//     document.body.classList.remove("lightMode");
//     localStorage.setItem("lightMode", "disabled");
// }


// if (lightMode) enableLightmode();

// modeSwitch.addEventListener("click", () => {
//     lightMode = !lightMode;
//     lightMode ? enableLightmode() : disableLightmode();
// });

//Actualizar cumpleaños

let edad = document.querySelector("#edad");
let edadNumero = 28;

const fecha = new Date();
let diaCumple = fecha.getDate();
let mesCumple = fecha.getMonth() + 1;


function actualizarEdad(){
    if((diaCumple = 23) & (mesCumple = 7)){
 edadNumero++;
 edad.innerText = edadNumero;

    }
}
actualizarEdad();


