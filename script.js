
function insrt(num){
  $('#inputVal').val($('#inputVal').val()+num)
}
function eql(){
  $('#inputVal').val(eval($('#inputVal').val()))
}

function reset(){
  document.getElementById('inputVal').value = ''
}
// function pwo(num1,num2){
//   document.getElementById(expo).value = Math.pwo(num1,num2)
// }

$('#cal').css({'font-style': 'italic','color':'#6a5acd'})

$('body').css({'text-align':'center','background':'white'});

$('.numOper').css({'margin-left': 'auto','margin-right': 'auto'
});

$('.btn').css({'width':'45px','height':'45px','font-size':'35', 'color':'white','margin':'auto','backgroundColor':'rgb(60, 60, 60)'});

$('#inputVal').css('padding','10px');

$('.all').css({'border': '5px solid rgb(60, 60, 60)',
  'border-radius': '20px','box-sizing': 'border-box',
  'width': '300px','height': '400px'});