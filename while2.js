// Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

function login(){
    while (true) {
        let nomeUsuario = prompt("Digite o nome de usuário:");
        let senha = prompt("Digite a senha:");
    
        if (senha !== nomeUsuario) {
            alert("Cadastro realizado com sucesso!");
            break;
        } else {
            alert("Erro: A senha não pode ser igual ao nome de usuário. Por favor, tente novamente.");
        }
    }

}
login()