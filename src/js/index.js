const btnCarrossel = document.querySelectorAll(".btn");
const Img = document.querySelectorAll(".imagem")


btnCarrossel.forEach((botao, ID) => {
    botao.addEventListener("click", () => {
        desativarBtn()
        esconderImgAtiva()
        
        botao.classList.add("selecionado");
        Img[ID].classList.add("ativa");
    })
})

function desativarBtn(){
    const btnSelecionado = document.querySelector(".selecionado");
    btnSelecionado.classList.remove("selecionado");
}

function esconderImgAtiva(){
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}
