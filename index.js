// ESCOPO DA FUNÇÃO QUE SERÁ EVOCADA

function boasVindas(nomeDoUsuario = "Fulano"){
    alert("Seja bem vindo(a), " + nomeDoUsuario + "!");
}

const nomeDoUsuario = prompt("Digite seu nome: "); // Armazenando input / entrada em uma variável constante (não será retribuida!)

boasVindas(nomeDoUsuario); // Evocando a função passando a variável como parâmetro!

console.log(nomeDoUsuario); 

/*

TEORIA

OBJETO = WINDOW
MÉTODOS DO OBJETO "WINDOW" - .alert, .prompt, .confirm, ETC!

OBJETO = CONSOLE
MÉTODO DO OBJETO "CONSOLE" -> .log

*/