import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
    

  function generador(){

    let numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
      let dibujo = ["♦", "♥", "♠", "♣"];

      let numeroRd = numeros[Math.floor(Math.random()*numeros.length)];
      let dibujoRd = dibujo[Math.floor(Math.random()*dibujo.length)];

      let head = document.querySelector("#head");
        head.innerHTML = dibujoRd;

      let center = document.querySelector("#center");
        center.innerHTML = numeroRd;

      let bottom = document.querySelector("#bottom");
        bottom.innerHTML = dibujoRd;

      if(dibujoRd === "♥" || dibujoRd === "♦") {
        head.style.color = "red";
        bottom.style.color = "red";
      } else {
        head.style.color = "black";
        bottom.style.color = "black";
      }

  } 
  generador();
  document.getElementById("botoncito").addEventListener("click", generador);
};


