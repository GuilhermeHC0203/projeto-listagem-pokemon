const botaoAlterarTema = document.getElementById("botao-alterar-tema");  /* console.log mostrar codigo do js no navegador ---- getelementbyid mostrar o elemento id, dentro dos parenteses colocamos a id */
const body = document.querySelector("body"); /* como pegar o body sem o id */ 
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao"); /* identificar o clique do mouse no botao tema */ 

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");       
    } else { 
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }
});
