//Adicionar um novo paciente
botaoAdicionar = document.querySelector("#adicionar-paciente")

botaoAdicionar.addEventListener("click",function(event){
  event.preventDefault();// remove o comportamento padrão do botão, que recarrega a página.
  console.log("Esta chamando a função.")
  var form = document.querySelector("#form-adiciona")
  // var altura = form.querySelector("#altura").value


  //Extraindo informações do paciente do Form
  var paciente = obtemPacienteDoFormulario(form);

  //Cria a tr e a td do paciente
  var pacienteTr = criaTr(paciente);

  form.reset(); // Tira os escritos dos inputs


})


function obtemPacienteDoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(peso,altura)
    };
    return paciente;
}

function criaTr(paciente){

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));// Coloque como Filho
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "imc-nome"));


    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td
}


