function calcularProgressao() {
    var valorInicial = Number(document.getElementById("valorInicial").value);
    var razao = Number(document.getElementById("razao").value);
    var sequencia = [];

    for (var i = 0; i < 10; i++) {
        var valor = valorInicial + i * razao;
        sequencia.push(valor);
    }

    document.getElementById("sequencia").innerText = "Sequência: " + sequencia;
}