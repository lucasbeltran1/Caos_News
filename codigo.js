"strict mode";

/*   FUNCION PARA OCULTAR Y MOSTRAR PARRAFO   */ 
$(document).ready(function(){
  $("#hide").click(function(){
    $("p").hide();
  });
  $("#show").click(function(){
    $("p").show();
  });
});

$(".btn-2").click(function(){
  $(".parrafo").toggle();
});

/*   FUNCION PARA CAMBIAR EL TAMAÑO DEL PARRAFO     */
const cambiarTamaño = tamaño => {
  return ()=> {
      document.querySelector(".parrafo").style.fontSize = `${tamaño}px`;
  }
}

px12 = cambiarTamaño(12);
px14 = cambiarTamaño(14);
px16 = cambiarTamaño(16);

document.querySelector(".t12").addEventListener("click",px12);
document.querySelector(".t14").addEventListener("click",px14);
document.querySelector(".t16").addEventListener("click",px16);


/*    FUNCION PARA MOSTRAR LA HORA ACTUAL    */

const addZeros = n => {
  if(n.toString().length < 2) return "0".concat(n);
  return n;
}

const actualizaHora = ()=> {
  const time = new Date();
  let hora = addZeros(time.getHours());
  let min = addZeros(time.getMinutes());
  let seg = addZeros(time.getSeconds());
  document.querySelector(".hora").textContent = hora;
  document.querySelector(".min").textContent = min;
  document.querySelector(".seg").textContent = seg;
}

actualizaHora()
setInterval(actualizaHora,1000)

/*POPOVER FUNCION*/
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
  
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')
myModal.addEventListener('shown.bs.modal', () => {
myInput.focus()})


const popover = new bootstrap.Popover('.popover-dismiss', {
  trigger: 'focus'
})


/*   API RESULTADOS PARTIDOS DE FUTBOL EN VIVO   */

var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "b58117cc7b0945b18cb771ae60be02c7");
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://v3.football.api-sports.io/leagues", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


  /*  testing  */

  document.addEventListener('DOMContentLoaded', function() {
    var mas = document.querySelector('.mas');
    var menos = document.querySelector('.menos');
    var contenidoAdicional = document.querySelector('.contenido-adicional');
  
    mas.addEventListener('click', function() {
      contenidoAdicional.style.display = 'block';
      mas.style.display = 'none';
      menos.style.display = 'inline';
    });
  
    menos.addEventListener('click', function() {
      contenidoAdicional.style.display = 'none';
      mas.style.display = 'inline';
      menos.style.display = 'none';
    });
  });
  