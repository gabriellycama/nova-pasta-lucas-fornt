//Este bloco altera o subtitulo e o titulo//
var tituloSegundario = document.querySelector(".titulo-secundario");
tituloSegundario.textContent = "Meus clientes";
var titulo = document.querySelector(".titulo");
titulo.textContent = "M Nutrição";

//Este bloco determina a variavel peso do primeiro paciente//
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  //Este bloco determina a variavel altura do primeiro paciente//

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  //Este bloco determina a variavel IMC do primeiro paciente e muda seu conteúdo//
  var IMC = calculaIMC(peso, altura);

  //valores booleanos
  var pesoValido = true;
  var alturaValida = true;

  if (pesoValido && alturaValida) {
    var tdIMC = paciente.querySelector(".info-imc");
    tdIMC.textContent = IMC
  }
  //alerta caso o peso e altura sejam invalidos
  if (peso <= 0 || peso >= 1000) {
    var pesoValido = false;
    tdIMC.textContent = "peso invalido";
    paciente.classList.add("paciente-invalido");
  }

  if (altura <= 0 || altura >= 3.00) {
    var alturaValida = false;
    tdIMC.textContent = "altura invalido";
    paciente.classList.add("paciente-invalido");
  }
}

  titulo.addEventListener('click',function(){
    alert("M nutrição foi catucado");
  });
  
var botaoAdicionar = document.querySelector('#adicinar-paciente');
var botaoAdicionar = document.querySelector('#adicionar-paciente');

function calculaIMC(){
  var imc =peso / (altura * altura);
  return imc.toFixed(2);

}

  


  


  
  

