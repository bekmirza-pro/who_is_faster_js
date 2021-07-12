var elForm = document.querySelector(".form");
var elUserInput = elForm.querySelector(".user-input");
var elResultBox1 = document.querySelector(".paragraf1");
var elResultBox2 = document.querySelector(".paragraf2");
var elResultBox3 = document.querySelector(".paragraf3");
var elResultBox4 = document.querySelector(".paragraf4");

var speedMan = 3.6;
var speedBike = 20.1;
var speedCar = 70;
var speedPlane = 800;



elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
  
    elResultBox1.textContent = (Number(elUserInput.value.trim()) / speedMan).toFixed(2);
    elResultBox2.textContent = (Number(elUserInput.value.trim()) / speedBike).toFixed(2);
    elResultBox3.textContent = (Number(elUserInput.value.trim()) / speedCar).toFixed(2);
    elResultBox4.textContent = (Number(elUserInput.value.trim()) / speedPlane).toFixed(2);
    
  });