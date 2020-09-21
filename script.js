function each(coll, fn) {
	if (Array.isArray(coll) || typeof coll === 'string'){
		for (var i = 0; i < coll.length; i++) {
			fn(coll[i], i)
		}
	} else {
		for (var key in coll) {
			fn(coll[key], key)
		}
	}
}

function insrt(num){
	debugger
  $('#inputVal').val($('#inputVal').val()+num)  
}
function eql(){
	var x = $('#inputVal').val()
	var arr = x.split('')
	each(arr, function(ele,i){
		if(arr[i] === '^'){
			arr[i]= '**'
		} x = arr.join('')
	})
  $('#inputVal').val(eval(x))
}

function reset(){
  document.getElementById('inputVal').value = ''
}

$('#cal').css({'font-style': 'italic','color':'#6a5acd'})
$('body').css({
'text-align':'center',
'background':'white',
'background-image':"url('num.jpg')",
'background-repeat': 'no-repeat',
'background-attachment': 'fixed',  
'background-size': 'cover'
})

$('.numOper').css({'margin-left': 'auto','margin-right': 'auto'
});

$('.btn').css({'width':'50px','height':'50px','font-size':'35px', 'color':'white','margin':'auto','backgroundColor':'rgb(60, 60, 60)'});

$('#inputVal').css('padding','20px');

$('.all').css({
  'border': '5px solid rgb(60, 60, 60)',
  'width': '25%',
  'height': '450px',
  'padding': '10px',
  'margin': 'auto'
})

// $('.all').css({'border': '5px solid rgb(60, 60, 60)',
//   'border-radius': '20px','box-sizing': 'border-box',
//   'width': '300px','height': '400px','text-align':'center',
//   'display':'flex',
//   'justify-content':'center',

// });

