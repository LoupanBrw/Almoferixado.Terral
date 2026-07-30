const campoSenha = document.getElementById("senha");
const botao = document.getElementById("botao-login");

/*Aqui é a sua senha*/
const senhaCorreta = "manu.terral";

botao.addEventListener("click", function(){

    let senhaDigitada = campoSenha.value;


    if(senhaDigitada === senhaCorreta){

        window.location.href = "index.html";

    }else{

        alert("Senha incorreta");

    }

});