var $email= $('#email_user');
var $telefono= $('#phone_user');
var $nombre= $('#name_user');
var $btnRegistro= $('#btn-register');

var cargarPagina= function(){
	$nombre.keyup(validUser);
	$email.keyup(validUser);
	$telefono.keyup(validUser);
}

function validUser(){
	if($email.val(), $telefono.val(), $nombre.val() != ""){
		if ($telefono.val().length === 10 ) {
			$btnRegistro.removeClass('disabled');
		}
	}
}
//  var validarCampos = function(){
//  	if($email.val() == "" && $telefono.val() == "" && $nombre.val()== ""){
//  	 return true;
//  	}
//  }

// var quitarClase=function(perrito){
// 	if(perrito){

// 	}
// }

// var validarEmail=function(){
// 	var $valorEmail= $email.val();
// if(!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test($valorEmail)) ) {
//   	return true
// 	}else{
// 		return false;
// 	}
// }

// var validarTelefono=function(){
// 	var $valorTelefono= $telefono.val();
// 	if(!(/^\d{9}$/.test($valorTelefono)) ) {
//   		return true;
// 	}else{
// 		return false;
// 	}
// }
$(document).ready(cargarPagina);