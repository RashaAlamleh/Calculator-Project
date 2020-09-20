// function add(num1,num2){
// var result = 0;
// return result=num1+num2;
// };

// function sub(num1,num2){
// var result = 0;
// return result=num1-num2;
// };

// function multiple(num1,num2){
// var result = 1;
// return result=num1*num2;
// };
// function division(num1,num2){
// var result = 1;
// return result=num1/num2;
// };


function insrt(num){
  $('#inputVal').val($('#inputVal').val()+num)
}
function eql(){
  $('#inputVal').val(eval($('#inputVal').val()))
}

function reset(){
  document.getElementById(inputVal).vlaue('')
 // $('#inputVal').val('')
}

