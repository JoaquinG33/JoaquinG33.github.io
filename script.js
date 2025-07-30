//Joaquín Guillén. 2025.


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


