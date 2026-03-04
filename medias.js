// Lista para armazenar os alunos
let alunos = [];

// Função para adicionar aluno
function adicionarAluno(nome, notas) {
    let media = calcularMedia(notas);

    let aluno = {
        nome: nome,
        notas: notas,
        media: media,
        status: media >= 7 ? "Aprovado" : "Reprovado"
    };

    alunos.push(aluno);
}

// Função para calcular média
function calcularMedia(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
}

// Função para listar alunos
function listarAlunos() {
    alunos.forEach(aluno => {
        console.log(`Nome: ${aluno.nome}`);
        console.log(`Notas: ${aluno.notas.join(", ")}`);
        console.log(`Média: ${aluno.media.toFixed(2)}`);
        console.log(`Status: ${aluno.status}`);
        console.log("------------------------");
    });
}

// Testando o sistema
adicionarAluno("Carlos", [8, 7, 9]);
adicionarAluno("Maria", [5, 6, 7]);
adicionarAluno("Ana", [10, 9, 8]);

listarAlunos();