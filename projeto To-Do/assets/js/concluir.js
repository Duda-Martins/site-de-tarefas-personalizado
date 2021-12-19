var concluiArticle = document.querySelectorAll(".card");

for(var i = 0; i < concluiArticle.length; i++) {
    var concluiBotao = concluiArticle[i].querySelector(".botaoConcluir");

    if(concluiBotao) {
        concluiBotao.addEventListener("click", function (event) {
             event.preventDefault();
             const cardBody = event.target.parentElement
             const cardImage = cardBody.previousElementSibling
             cardImage.setAttribute('src', 'assets/img/concluido.png');
         });
    }
}