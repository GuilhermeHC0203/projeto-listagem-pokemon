/* comentar varias linhas  () [] */ 

// para comentar uma unica linha 


const botaoAlterarTema = document.getElementById("botao-alterar-tema"); 

/* console.log mostrar codigo do js no navegador 
getelementbyid mostrar o elemento id, dentro dos parenteses colocamos a id */

/* como pegar o body sem o id abaixo */ 

const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".image-botao")

/* identificar o clique do mouse no botao tema */ 

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");       
    } else { 
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }
});

