botaoAdicionar.addEventListener('click', function (event) {
    event.preventDefault(); // Corrigido o preventDefault
    var formulario = document.querySelector('#form-adiciona');

    var nome = formulario.nome.value
    var altura = formulario.altura.value
    var peso = formulario.peso.value
    var gordura = formulario.gordura.value


    
    console.log(formulario.nome.value);
    console.log(formulario.altura.value);
    console.log(formulario.peso.value);
    console.log(formulario.gordura.value);

    console.log("Paciente adicionado");

    alert("Paciente adicionado");

    //cria o elemento <tr>
    var pacienteTr = document.createElement("tr");

    //cria as tags <td>
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td")


   var paciente= dadospacientesformulario(formulario);
   

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaIMC(peso, altura);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

});

function dadospacientesformulario(){

    var paciente = {
      nome :formulario.nome.value,
      altura :formulario.altura.value,
      peso :formulario.peso.value,
      gordura: formulario.gordura.valuem,
      IMC: calculaIMC(formulario.peso.value,formulario.altura.value)
    }
    console.log(paciente);
 return paciente;
}