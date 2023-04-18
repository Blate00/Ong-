function cambiarContenido(){
    return "Que pasa coxino culiao"
}

function Sumar(a,b){
var a=10;
var b=10;
var c = a+b;
return c
}

function cambiarColorImagen(idImagen, nuevoColor) {
    const imagen = document.getElementById(idImagen);
    imagen.style.filter = `hue-rotate(${nuevoColor}deg)`;
  }
  
  function sumar() {

    var num1 = document.getElementById("numero1").value;
    var num2 = document.getElementById("numero2").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2); 
    var resultado = num1 + num2;
    document.getElementById("resultado").innerHTML = resultado;}

    function validar() {
      var email = document.getElementById("email").value;
      if (validarEmail(email)) {
        document.getElementById("mensaje").innerHTML = "La dirección de correo electrónico es válida.";
      } else {
        document.getElementById("mensaje").innerHTML = "La dirección de correo electrónico no es válida.";
      }
    }

    function validarEmail(email) {
      var expresion = /^[^\s()<>,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
      return expresion.test(email);
    }


