 function verificarAprovacao() {
    let nota = parseFloat(prompt("Digite a nota do aluno:"));
    let faltas = parseInt(prompt("Digite o número de faltas:"));

    if (nota >= 70 && faltas < 15) {
        alert("Aluno aprovado!");
    } else {
        alert("Aluno reprovado!");
    }
}

verificarAprovacao();