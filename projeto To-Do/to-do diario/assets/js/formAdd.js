var botaoAdicionaTarefa = document.querySelector("#adicionar-tarefa");

botaoAdicionaTarefa.addEventListener("click", function (event) {
    event.preventDefault();

    var formTarefa = document.querySelector("#form-adiciona-tarefa");

    var nomeTarefa = formTarefa.nomeTarefa.value;
    var tipoTarefa = formTarefa.tipoTarefa.value;
    var dataTarefa = formTarefa.dataTarefa.value;
    var estadoTarefa = formTarefa.estadoTarefa.value;
    var linkTarefa = formTarefa.linkTarefa.value;

    var cardArticle = document.createElement("article");
    var cardImg = document.createElement("img");
    var cardDiv = document.createElement("div");
    var divH5 = document.createElement("h5");
    var divP1 = document.createElement("p");
    var divP2 = document.createElement("p");
    var divAConcluir = document.createElement("a");
    var divAVer = document.createElement("a");

    cardArticle.appendChild(cardImg);
    cardArticle.appendChild(cardDiv);
    cardDiv.appendChild(divH5);
    cardDiv.appendChild(divP1);
    cardDiv.appendChild(divP2);
    cardDiv.appendChild(divAConcluir);
    cardDiv.appendChild(divAVer);

    divH5.textContent = nomeTarefa;
    divP1.textContent = tipoTarefa;
    divP2.textContent = dataTarefa;
    divAConcluir.textContent = "Concluir";
    divAVer.textContent = "Veja em detalhes";

    cardArticle.classList.add("card");
    cardArticle.classList.add("borda-cor-especial");
    cardArticle.classList.add("card-largura");
    cardArticle.classList.add("p-0");
    cardArticle.classList.add("m-4");
    cardArticle.classList.add("col-12");
    cardArticle.classList.add("col-md-4");

    cardImg.classList.add("card-img-top");
    cardImg.classList.add("card-posicao-imagem");

    cardDiv.classList.add("card-body");
    divH5.classList.add("card-title");
    divP1.classList.add("card-text");
    divP2.classList.add("card-text");

    divAConcluir.classList.add("btn");
    divAConcluir.classList.add("botao-cor-especial");
    divAConcluir.classList.add("texto-branco");
    divAConcluir.classList.add("espaco-entre-botoes");
    divAConcluir.classList.add("efeito-botao");
    divAConcluir.classList.add("botaoConcluir");

    divAVer.classList.add("btn");
    divAVer.classList.add("btn-secondary");
    divAVer.classList.add("texto-branco");

    if (estadoTarefa == "Atrasado") {
        cardImg.setAttribute('src', 'assets/img/atrasado.jpg');
    }
    if (estadoTarefa == "Concluído") {
        cardImg.setAttribute('src', 'assets/img/concluido.png');
    }
    if (estadoTarefa == "Em andamento") {
        cardImg.setAttribute('src', 'assets/img/em-andamento.png');
    }
    if (estadoTarefa == "Item") {
        cardImg.setAttribute('src', 'assets/img/list.png');
    }
    if (estadoTarefa == "Talvez") {
        cardImg.setAttribute('src', 'assets/img/talvez.png');
    }
    if (estadoTarefa == "Travado") {
        cardImg.setAttribute('src', 'assets/img/travado.png');
    }

    if (linkTarefa != "") {
        divAVer.href = linkTarefa;
    } else {
        divAVer.href = "#";
    }

    var addTarefa = document.querySelector("#adicionar-tarefas");

    addTarefa.appendChild(cardArticle);

    formTarefa.reset();
});