var elForm = document.querySelector(".form");
var elDistanceInput = elForm.querySelector(".distance-input");
var elResultBox1 = document.querySelector(".paragraf1");
var elResultBox2 = document.querySelector(".paragraf2");
var elResultBox3 = document.querySelector(".paragraf3");
var elResultBox4 = document.querySelector(".paragraf4");

var speedMan = 3.6;
var speedBike = 20.1;
var speedCar = 70;
var speedPlane = 800;

function calculateTime(distance, speed){
  var hour = Math.floor(distance / speed);
  var minute = Math.floor((distance / speed - hour) * 60);
  var secound = Math.floor(((distance / speed - hour) * 60 - minute) * 60);
  return hour + " soat " + minute + " minut " + secound + " secund "

}


elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
  
    var distanceInput = Number(elDistanceInput.value.trim())

    elResultBox1.textContent = calculateTime(distanceInput, speedMan);
    elResultBox2.textContent = calculateTime(distanceInput, speedBike);
    elResultBox3.textContent = calculateTime(distanceInput, speedCar);
    elResultBox4.textContent = calculateTime(distanceInput, speedPlane);

    // elResultBox1.textContent = (Number(elUserInput.value.trim()) / speedMan).toFixe(2);
    // elResultBox2.textContent = (Number(elUserInput.value.trim()) / speedBike).toFixe(2);
    // elResultBox3.textContent = (Number(elUserInput.value.trim()) / speedCar).toFixe(2);
    // elResultBox4.textContent = (Number(elUserInput.value.trim()) / speedPlane).toFixe(2);
    
  });

