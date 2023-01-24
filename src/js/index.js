/* 
    - PASSOS LÓGICOS - é necessario sempre fazer essa parte antes de escrever o código, pensar passo a passo do que fazer antes de botar a mão na massa.

    OBJETIVO 1 - quando o usuario clicar no botao ver tralier, devemos abrir a modal com o video do trailer
    OBJETIVO 2 - quando o usuario clicar no X devemos fechar a modal 

    OBJETIVO 1:
        - passo 1 -> dar um jeito de pegar o elemento que representa o botão na tela usando o js
        - passo 2 -> dar um jeito de identificar quando o usuário clicar no botão
        - passo 3 -> dar um jeito de pegar o elemento da modal no js
        - passo 4 -> abrir a modal na tela

    OBJETIVO 2:
        - passo 1 -> dar um jeito de pegar o elemento fechar modal
        - passo 2 -> dar um jeito de identificar quando o usuario clicar no X
        - passo 3 -> fechar modal 

*/

console.log(document); //escreve no console do devtools o comando document, ou uma string usando ""

document.querySelector(".botao-trailer"); //O método query.selector puxa um elemento do 'objeto document', no caso ta pegando a classe do botao "ver trailer"

//OBJETIVO 1 ->
const video = document.getElementById("video");  //pega um elemento pelo ID
const linkVideo = video.src;
//Passo 1 -
    const botaoTrailer = document.querySelector(".botao-trailer"); //seleciona a classe modal e armazena na variavel

//Passo 3 - 
    const modal = document.querySelector(".modal");
   
 //Passo 2 - 
    botaoTrailer.addEventListener("click", () => { //cria uma função para executar a ação que esta dentrio dos {}
        //Passo 4 -
            modal.classList.add("aberto") //adicionei a classe aberto na classe modal, assim executando a formatação do css na classe aberto
            video.setAttribute("src", linkVideo);
    });



//OBJETIVO 2 ->

//Passo 1 - 
    const botaoFecharModal = document.querySelector(".fechar-modal")
   
//Passo 2 -
    botaoFecharModal.addEventListener("click", () => {
        //Passo 3 -
        modal.classList.remove("aberto"); //removi a classe aberto para assim fechar a modal, mas isso só ira esconder, o trailer ira continuar rodando
        video.setAttribute("src", "") //define um atributo, no caso "src", com conteudo vazio
    });
