(function (){
  'use strict';
  var mainNum = document.getElementById('mainNum');
  var ac = document.getElementById('ac');
  var posNeg = document.getElementById('posNeg');
  var percent = document.getElementById('percent');
  var divide = document.getElementById('divide');
  var seven = document.getElementById('seven');
  var eight = document.getElementById('eight');
  var nine = document.getElementById('nine');
  var times = document.getElementById('times');
  var four = document.getElementById('four');
  var five = document.getElementById('five');
  var six = document.getElementById('six');
  var sub = document.getElementById('sub');
  var one = document.getElementById('one');
  var two = document.getElementById('two');
  var three = document.getElementById('three');
  var add = document.getElementById('add');
  var zero = document.getElementById('zero');
  var dot = document.getElementById('dot');
  var equal = document.getElementById('equal');
  var i;
  var allNums = [one, two, three, four, five, six, seven, eight, nine, zero, dot];


  ac.addEventListener("click", zeroOut);

  function zeroOut (){
      mainNum.textContent=0;
  }




for ( i=0; i < allNums.length; i++ ){
  var currentNumber = allNums[i];
  currentNumber.addEventListener("click", numberOnScreen ) ;
}

function numberOnScreen(){
  // Get the value that's in the button
  var clickedButton = this.innerHTML;
  console.log(clickedButton);
  // Get the value that's in the display
  var oldDisplay = mainNum.innerHTML;
  // Concatinate the display value and the value in the button
  if (oldDisplay == '0'){
    oldDisplay = "";
  }
  var currentDisplay = oldDisplay + clickedButton;
  console.log(currentDisplay);
  // Take concatinated value and put it in the display
  mainNum.textContent = currentDisplay;
  if (mainNum.textContent.length >= 9){
    alert("No More space in the box");
}
}


//*********
//add
//*********
add.addEventListener("click",adding);

function adding (){
  var saveNumber = mainNum.textContent;
  console.log(saveNumber);

  if (saveNumber == saveNumber){
    mainNum.textContent = "";
    var newNumber = prompt("What would you like to add it with?");
  }
  var result = +saveNumber + +newNumber;
  mainNum.textContent = result;
}


//*********
//subtract
//*********
sub.addEventListener("click", subtract);

function subtract (){
  var saveNumber = mainNum.textContent;
  console.log(saveNumber);

  if (saveNumber == saveNumber){
    mainNum.textContent = "";
    var newNumber = prompt("What would you like to subtract from it?");
  }
  var result = +saveNumber - +newNumber;
  mainNum.textContent = result;
}


//*********
//multiply
//*********
times.addEventListener("click", multiply)

function multiply (){
var saveNumber = mainNum.textContent;
console.log(saveNumber);

if (saveNumber == saveNumber){
  mainNum.textContent = "";
  var newNumber = prompt("What would you like to multiply it by?");
}
var result = +saveNumber * +newNumber;
mainNum.textContent = result;
}


//*********
//divide
//*********
divide.addEventListener('click', dividing);

function dividing (){
  var saveNumber = mainNum.textContent;
  console.log(saveNumber);

  if (saveNumber == saveNumber){
    mainNum.textContent = "";
    var newNumber = prompt("What would you like to divide it by?");
  }
  var result = +saveNumber / +newNumber;
  mainNum.textContent = result;
}

//*********
//positive / negative
//*********
posNeg.addEventListener('click', value);

function value (){
  var number = mainNum.textContent;
  mainNum.textContent = "-" + number;
}

//*********
//percentage
//*********
percent.addEventListener('click', percentage);

function percentage(){
  mainNum.textContent = mainNum.textContent / 100;
}






}())
