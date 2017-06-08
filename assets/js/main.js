

var burger = document.getElementById('hamburguesa');
var nav = document.getElementsByClassName('navegador')[0];

burger.addEventListener('click', function(){
	nav.classList.toggle('hidden');
});

//prende y apaga, hace un cambio entre clases