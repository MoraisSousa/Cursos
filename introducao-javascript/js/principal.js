var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


var pacientes = document.querySelectorAll(".paciente")

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    console.log(paciente);
    var peso = paciente.querySelector(".info-peso").textContent;    
    var altura = paciente.querySelector(".info-altura").textContent;
    var tdimc = paciente.querySelector(".info-imc");
    var alturaEhValida = true;
    var pesoEhValido = true;

    if (peso <= 0 || peso > 1000) {
        console.log("Peso inválido");
        tdImc.textContent = "Peso inválido!";
        pesoEhValido = false;
    }

    if (altura <= 0 || altura >= 3) {
        console.log("Altura inválida");
        tdImc.textContent = "Altura inválida!";
        alturaEhValida = false;
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = peso / (altura * altura);
        tdimc.textContent = imc.toFixed(2);
    } else {
        tdimc.textContent = "Altura e/ou peso inválidos!";
    }
}






