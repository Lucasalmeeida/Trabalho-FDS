let botao = document.querySelector("#botao")

let resposta = document.querySelector (".resposta");


botao.addEventListener("click", apareceTexto);

botao.addEventListener("mouseover",fundo);

botao.addEventListener("mouseout",fundo2);


function fundo(){
    botao.style.background="gray"
}

function fundo2(){
    botao.style.background="white"
}

function apareceTexto(){

    resposta.innerHTML = "Olá, obrigado pela sua visita e sinta-se à vontade para passear pelo site. "
}