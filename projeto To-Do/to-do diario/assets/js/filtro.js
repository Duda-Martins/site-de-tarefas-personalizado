var campoFiltro = document.querySelector("#filtro-dia");

campoFiltro.addEventListener("input", function() {
    var dias = document.querySelectorAll(".dia");

    if (this.value.length > 0) {
        for (var i = 0; i < dias.length; i++) {
            var dia = dias[i];
            var h3Titulo = dia.querySelector(".fonte-subtitulo");
            var titulo = h3Titulo.textContent;
            var expressao = new RegExp(this.value, "i");

            if (expressao.test(titulo)) {
                dia.classList.remove("invisivel");
            } else {
                dia.classList.add("invisivel");
            }
        }
    } else {
        for (var i = 0; i < dias.length; i++) {
            var dia = dias[i];
            dia.classList.remove("invisivel");
        }
    }
});