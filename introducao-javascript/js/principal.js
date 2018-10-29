var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente1 = document.querySelector("#primeiro_paciente");
var peso1 = paciente1.querySelector(".info-peso").textContent;
var altura1 = paciente1.querySelector(".info-altura").textContent;
var tdimc1 = paciente1.querySelector(".info-imc");  
var alturaEhValida = true;
var pesoEhValido = true;

if(peso1 <= 0 || peso1 > 1000){
    console.log("Peso inválido");
    tdImc1.textContent = "Peso inválido!";
    pesoEhValido = false;
}

if(altura1 <= 0 || altura1 >= 3){
    console.log("Altura inválida");
    tdImc1.textContent = "Altura inválida!";
    alturaEhValida = false;
}

if(pesoEhValido && alturaEhValida){
    var imc = peso1 / ( altura1 * altura1);    
    tdImc1.textContent = imc;
}
var paciente2 = document.querySelector("#segundo_paciente");
var peso2 = paciente2.querySelector(".info-peso").textContent;
var altura2 = paciente2.querySelector(".info-altura").textContent;
var imc2 = peso2/(altura2*altura2);
var paciente3 = document.querySelector("#terceiro_paciente");
var peso3 = paciente3.querySelector(".info-peso").textContent;
var altura3 = paciente3.querySelector(".info-altura").textContent;
var imc3 = peso3/(altura3*altura3);
var paciente4 = document.querySelector("#quarto_paciente");
var peso4 = paciente4.querySelector(".info-peso").textContent;
var altura4 = paciente4.querySelector(".info-altura").textContent;
var imc4 = peso4/(altura4*altura4);
var paciente5 =  document.querySelector("#quinto_paciente");
var peso5 = paciente5.querySelector(".info-peso").textContent;
var altura5 = paciente5.querySelector(".info-altura").textContent;
var imc5 = peso5/(altura5*altura5);

 

