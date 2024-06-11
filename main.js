// Resgatar os botões do HTML
// Mudar a cor deles com o CSS

const botaoSol = document.querySelector("#botao-sol")
const botaoLua = document.querySelector("#botao-lua")

const body = document.querySelector("body")

function mudaParaOTemaEscuro() {

    botaoSol.classList.remove("icone-ativo")
    botaoSol.classList.add("icone-inativo")

    botaoLua.classList.add("icone-ativo")
    botaoLua.classList.remove("icone-inativo")

    body.classList.remove("tema-claro")
    body.classList.add("tema-escuro")

}

function mudaParaOTemaCLaro() {

    botaoSol.classList.remove("icone-inativo")
    botaoSol.classList.add("icone-ativo")

    botaoLua.classList.remove("icone-ativo")
    botaoLua.classList.add("icone-inativo")

    body.classList.remove("tema-escuro")
    body.classList.add("tema-claro")

}

botaoLua.addEventListener('click', mudaParaOTemaEscuro)
botaoSol.addEventListener('click', mudaParaOTemaCLaro)

