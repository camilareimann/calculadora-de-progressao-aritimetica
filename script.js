// //TO DO: gerar um numero aleatorio e guardar numa variavel

// var numAleatorio = Math.floor(Math.random() * (20 - 10 + 1) + 10);
// console.log(numAleatorio);

// do{
//     //prompt adivinhar numero
//     var numUsuario = Number(prompt("adivinhe o numero entre 10 e 20"));;
// //enquanto nao acertar o numero a gente fica pedindo
// } while (numAleatorio !== numUsuario); 
// alert("parabens, voce acertou: " + numAleatorio); 


// //coletando os dados
// var valorInicial = Number(prompt("Insira um valor: "));
// var raiz = Number(prompt("Insira o valor da raiz: "));
// //array pra guardar a sequencia pra poder exibir depois
// var sequencia = [];

// // Calculando e armazenando os 10 primeiros valores da progressão aritmética
// console.log("Progressão Aritmética:");
// for (var i = 0; i < 10; i++) {
//     var valor = valorInicial + (i * raiz);
//     sequencia.push(valor);
// }
// //exibir a sequencia
// alert("Confira a sequência: " + sequencia);

function calcularProgressao() {
    var valorInicial = Number(document.getElementById("valorInicial").value);
    var razao = Number(document.getElementById("razao").value);
    var sequencia = [];

    for (var i = 0; i < 10; i++) {
        var valor = valorInicial + (i * razao);
        sequencia.push(valor);
    }

    document.getElementById("sequencia").innerText = "Sequência: " + sequencia;
}