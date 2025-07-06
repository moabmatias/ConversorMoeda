function converter() {
    let valorEmDolar = document.getElementById("valor").value/**Aqui criei uma variável e estou chamando o meu input que está no HTML*/
    let resultado = document.getElementById("resultado")
    let dolarDoDia = 6
    let valorReal = valorEmDolar * dolarDoDia

    resultado.innerHTML = "R$ " + valorReal + ".00"/*Aqui ele está colocando o valor convertido no local do resultado*/
}

const apagarResultado = document.getElementById("apagar");
const divResultado = document.getElementById("resultado");

apagarResultado.addEventListener('click', function () {
    divResultado.textContent = '';

});

function abrirModal() {
    document.getElementById("meuModal").style.display = "flex";
}

function fecharModal() {
    document.getElementById("meuModal").style.display = "none";
}

function recarregarPagina() {
    location.reload(); // Recarrega a página
}
