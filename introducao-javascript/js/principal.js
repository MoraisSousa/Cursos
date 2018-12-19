var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
var pacientes = document.querySelectorAll(".paciente")

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    
    var peso = paciente.querySelector(".info-peso").textContent;    
    var altura = paciente.querySelector(".info-altura").textContent;
    var tdimc = paciente.querySelector(".info-imc");
    var alturaEhValida = true;
    var pesoEhValido = true;

    if (peso <= 0 || peso > 1000) {
      
        tdimc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido")
        pesoEhValido = false;
    }
    if (altura <= 0 || altura >= 3) {
        
        tdimc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido")
        alturaEhValida = false;    }
    if (pesoEhValido && alturaEhValida) {
        var imc = peso / (altura * altura);
        tdimc.textContent = imc.toFixed(2);
    } else {
        tdimc.textContent = "Altura e/ou peso inválidos!";
        paciente.classList.add("paciente-invalido")
    }
}

titulo.addEventListener("click", mostraMensagem);

function mostraMensagem(){
    console.log("Ola eu fui clicado!");
}






