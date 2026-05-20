function jurosCompostosM(capital, juros, tempo) {
    return capital * (1 + juros / 100) ** tempo 
}
//C = o capital inicial
//J = taxa de juros 
//T = tempo 
// o M no final significa mês 

function jurosCompostosA(capital, juros, tempo) {
    return capital * (1 + juros / 100) ** tempo
}
// o A no final é ano
let tempo
let resultado
let capital = Number(prompt("Qual será o capital inicial..."))

let tmesano = prompt("Qual o tipo de taxa (mes/ano)")
//tmesano é se a pessoa quer mes ou ano 
while (tmesano !== "ano" && tmesano !== "mes") {
    tmesano = prompt("Digite apenas 'mes' ou 'ano'")
}
//isso verifica se a pessoa digitou corretamente
alert("Você escolheu " + tmesano)

if (tmesano == "mes") {
    tempo = Number(prompt("Quantos meses você quer simular?"))
} else {
    tempo = Number(prompt("Quantos anos você quer simular?"))
}

let juros = Number(prompt("Qual a % de juros?"))


if (tmesano == "ano") {
    resultado = jurosCompostosA(capital, juros, tempo)
} else{
    resultado = jurosCompostosM(capital, juros, tempo)

}
alert(resultado)