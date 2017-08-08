var $name = $("#name_user");
var $email = $("#email_user");
var $btnUser=$("btn_register");

var cargarPagina = function(){
  $name.keyup(validar);
  $email.keyup(validar);

};

function validar(){
  var $inputName= $name.val();
  var $inputEmail= $email.val();

  if( $inputName == null || $inputName.length == 0 || /^\s+$/.test($inputName)) {

    console.log("gatito incorrecto");

  }

$(document).ready(cargarPagina);
