var urlBase = 'https://registrocivilminas.org.br/relatorio/';

function nascimentos() {
    cards('nascimento/tres-anos-nascimento-quantidade-BH', "Nascimentos em Belo Horizonte", "nascimentoBH", "#cardsNascimento2", "nascimentos");
    cards('nascimento/tres-anos-nascimento-quantidade-MG', "Nascimentos em Minas Gerais", "nascimentoMG", "#cardsNascimento1", "nascimentos");
}
function obitos() {
    cards('obito/tres-anos-geral-quantidade-MG', "Óbitos em Minas Gerais", "geralMG", "#cardsObito1", "óbitos");
    cards('obito/tres-anos-geral-quantidade-BH', "Óbitos em Belo horizonte", "geralBH", "#cardsObito3", "óbitos");
    cards('obito/tres-anos-covid-quantidade-MG', "Óbitos por Covid em Minas Gerais", "covidMG", "#cardsObito2", "óbitos");
    cards('obito/tres-anos-covid-quantidade-BH', "Óbitos por Covid em Belo horizonte", "covidBH", "#cardsObito4", "óbitos");
}
function casamentos() {
    cards('casamento/tres-anos-casamento-quantidade-BH', "Casamentos em Belo Horizonte", "casamentoBH", "#cardsCasamento2", "casamentos");
    cards('casamento/tres-anos-casamento-quantidade-MG', "Casamentos em Minas Gerais", "casamentoMG", "#cardsCasamento1", "casamentos");
}


////////////////////////////////////////////

function cards(endereço, nomePagina, click, cards, tipoRelatorio) {
    let url = urlBase + endereço;
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open('GET', url, true);
    let cod_html = "";
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var request = xhr.response;

                var totalRegistros = request[0]["totalRegistros"];

                for (i = 0; i < totalRegistros; i++) {
                    var ano = request[i]["ano"];
                    var quantidadeDeRegistro = request[i]["quantidadeDeRegistro"];


                    cod_html +=
                        `
                        <div class="card" style="width: 32%; margin-left:1%; margin-bottom:1%; background-color: rgba(255, 202, 27, 0.4);">
                            <div class="card-header" style="background-color: #F2B33D; margin:5px;"><h5>Relatórios de ${tipoRelatorio}</h5></div>
                            <div class="card-body">
                                <h4 class="card-title">${nomePagina} em ${ano}</h4>
                                <h2 class="card-text" style="text-align: right;   color: #007cba;">${quantidadeDeRegistro}</h2>

                            </div>
                        </div>
                    `;
                }

                $(cards).html(cod_html);

            } else {
                alert("Erro ao carregar!")
            }
        }
    }
    xhr.send();
}

