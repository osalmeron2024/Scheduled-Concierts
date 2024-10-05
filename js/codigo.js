const parrafoDia = document.querySelector("#dia");
const parrafoHora = document.querySelector("#hora");
const dateCurrent = new Date();
const btnComprar = document.querySelector(".btnfos-1");

let dia = dateCurrent.getDate();
let mes = dateCurrent.getMonth() + 1;
let año = dateCurrent.getFullYear();


if (dia < 10) dia = `0${dia}`;
if (mes < 10) mes = `0${mes}`;
parrafoDia.textContent = `${dia}/${mes}/${año}`;

const getHora = () => {
  let fechaActual = new Date();

  let hora = fechaActual.getHours();
  let minutos = fechaActual.getMinutes();
  let segundos = fechaActual.getSeconds();

  if (hora < 10) hora = `0${hora}`;
  if (minutos < 10) minutos = `0${minutos}`;
  if (segundos < 10) segundos = `0${segundos}`;
  parrafoHora.textContent = `${hora}:${minutos}:${segundos}`;
};

setInterval(getHora,1000);

const showDataPurcharse = () =>{
  alert("Desarollado por: Onesis Salmerón Bravo.\n" +
    "Fecha: 09-09-2024.\n" +
  "Flex Box CSS.");
};


btnComprar.addEventListener("click",showDataPurcharse);