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

  var operations = [divide, times, sub, add];
  var result;
  var numOne ;
  var numTwo;
  var operation;
  var removeDisplayNum;
  //*********
  //Clear numbers
  //*********



  function zeroOut (){
      mainNum.textContent=0;
  }

  //*********
  //numbers to appear on display
  //*********


  function numberOnScreen(){
    // Get the value that's in the button
    var clickedButton = this.innerHTML;
    // Get the value that's in the display
    var oldDisplay = mainNum.innerHTML;
    // Concatinate the display value and the value in the button
    if (oldDisplay == '0'){
      oldDisplay = "";
    }
    var currentDisplay = oldDisplay + clickedButton;
    // Take concatinated value and put it in the display
    mainNum.textContent = currentDisplay;

    console.log('currentDisplay: ' + currentDisplay);

    if (mainNum.textContent.length >= 9){
      alert("No More space in the box");
    }
  }

  function resultFunc (){
    numOne = mainNum.textContent;
    removeDisplayNum = true;
    if (removeDisplayNum == true){
      mainNum.innerHTML= "0";
    }
    console.log(numOne);
    var recieveOp = escape(this.textContent);
    if (recieveOp == "%F7"){
      operation = "divide";
    }else if (recieveOp == "%D7") {
      operation = "times";
    }else if (recieveOp == "%u2013") {
      operation = "subtract";
    }else if (recieveOp == "+"){
      operation = "add";
    }

    console.log('operation: ' + operation);
  }

  function doMath(){
    numTwo = mainNum.textContent;
    console.log('numTwo: ' + numTwo);
    if (operation == "divide"){
      result = +numOne / +numTwo;
      console.log(result);
    }else if (operation == "times") {
      result = +numOne * +numTwo;
      console.log(result);
    }else if (operation == "subtract") {
      result = +numOne - +numTwo;
      console.log(result);
    } else {
      result = +numOne + +numTwo;

    }

    mainNum.textContent = result;
  }

  // Event Listeners
  for (i=0; i < operations.length; i++ ){
      operation = operations[i];
      removeDisplayNum =false;
     operation.addEventListener('click', resultFunc);
  }
  for ( i=0; i < allNums.length; i++ ){
    var currentNumber = allNums[i];
    currentNumber.addEventListener("click", numberOnScreen ) ;
  }
  ac.addEventListener("click", zeroOut);
  equal.addEventListener("click", doMath);

// //*********
// //add
// //*********
// add.addEventListener("click",adding);
//
// function adding (){
//   var saveNumber = mainNum.textContent;
//   console.log(saveNumber);
//
//   if (saveNumber == saveNumber){
//     mainNum.textContent = "";
//     var newNumber = prompt("What would you like to add it with?");
//   }
//   var result = +saveNumber + +newNumber;
//   mainNum.textContent = result;
// }
//
//
// //*********
// //subtract
// //*********
// sub.addEventListener("click", subtract);
//
// function subtract (){
//   var saveNumber = mainNum.textContent;
//   console.log(saveNumber);
//
//   if (saveNumber == saveNumber){
//     mainNum.textContent = "";
//     var newNumber = prompt("What would you like to subtract from it?");
//   }
//   var result = +saveNumber - +newNumber;
//   mainNum.textContent = result;
// }
//
//
// //*********
// //multiply
// //*********
// times.addEventListener("click", multiply)
//
// function multiply (){
// var saveNumber = mainNum.textContent;
// console.log(saveNumber);
//
// if (saveNumber == saveNumber){
//   mainNum.textContent = "";
//   var newNumber = prompt("What would you like to multiply it by?");
// }
// var result = +saveNumber * +newNumber;
// mainNum.textContent = result;
// }
//
//
// //*********
// //divide
// //*********
// divide.addEventListener('click', dividing);
//
// function dividing (){
//   var saveNumber = mainNum.textContent;
//   console.log(saveNumber);
//
//   if (saveNumber == saveNumber){
//     mainNum.textContent = "";
//     var newNumber = prompt("What would you like to divide it by?");
//   }
//   var result = +saveNumber / +newNumber;
//   mainNum.textContent = result;
// }
//
// //*********
// //positive / negative
// //*********
// posNeg.addEventListener('click', value);
//
// function value (){
//   var number = mainNum.textContent;
//   mainNum.textContent = "-" + number;
// }
//
// //*********
// //percentage
// //*********
// percent.addEventListener('click', percentage);
//
// function percentage(){
//   mainNum.textContent = mainNum.textContent / 100;
// }






}())
