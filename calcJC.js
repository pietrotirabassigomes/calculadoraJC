function calcular() {
    let capital = Number(document.getElementById("capital").value)
    let taxa = Number(document.getElementById("taxa").value) / 100
    let tempo = Number(document.getElementById("tempo").value)
    let tipo = document.getElementById("juros").value  // lê o select

    let resultado
    if (tipo === "composto") {
        resultado = jurosCompostos(capital, taxa, tempo)
    } else {
        resultado = jurosSimples(capital, taxa, tempo)
    }

    document.getElementById("resultado").textContent = "Resultado: R$ " + resultado.toFixed(2)
}

function jurosCompostos(capital, taxa, tempo) {
    return capital * (1 + taxa) ** tempo  
}

function jurosSimples(capital, taxa, tempo) {
    const juros = capital * taxa * tempo
    return capital + juros
}