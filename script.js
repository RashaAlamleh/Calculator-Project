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

var input = document.getElementById("inputVal");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("Equal").click();
  }
});

function reset(){
  document.getElementById('inputVal').value = ''
}

// $('#cal').css({'font-style': 'italic','color':'rgb(231, 80, 33)'})
$('body').css({
'text-align':'center',
'background':'white',
'background-image':"url('num.jpg')",
'background-repeat': 'no-repeat',
'background-attachment': 'fixed',  
'background-size': 'cover'
})

// $('.numOper').css({'margin-left': 'auto','margin-right': 'auto'
// });

// $('.btn').css({'width':'50px','height':'50px','font-size':'35px', 'color':'white','margin':'auto','backgroundColor':'rgb(60, 60, 60)'});

// $('#inputVal').css({'width':'200px','height':'40px'});

// $('.all').css({
//   'border': '5px solid rgb(60, 60, 60)',
//   'width': '20%',
//   'height': '430px',
//   'padding': '10px',
//   'margin': 'auto',
//   'margin-top':'70px',
//   'border-radius': '20px',
//   'backgroundColor':'rgb(10, 10, 10)'
// })
// $('#clear').css('backgroundColor','rgb(231, 80, 33)')



