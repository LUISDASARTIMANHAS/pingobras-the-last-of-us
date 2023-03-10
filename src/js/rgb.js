Rgb()

function Rgb() {
    const RGB1 = document.getElementById("descrincao")

    setTimeout(vermelho, 1000)
    setTimeout(laranja, 2000)
    setTimeout(amarelo, 3000)
    setTimeout(verde, 4000)
    setTimeout(azulClaro, 5000)
    setTimeout(azul, 6000)
    setTimeout(roxo, 7000)

    function vermelho() {
        RGB1.style.color = "red"
    }
    function laranja() {
        RGB1.style.color = "orange"
    }
    function amarelo() {
        RGB1.style.color = "yellow"
    }
    function verde() {
        RGB1.style.color = "green"
    }
    function azulClaro() {
        RGB1.style.color = "lightblue"
    }
    function azul() {
        RGB1.style.color = "blue"
    }
    function roxo() {
        RGB1.style.color = "purple"
        Rgb()
    }

}