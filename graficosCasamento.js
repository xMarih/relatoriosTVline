// pega a lista da URL e armazena no vetor
// Temos um vetor para cada URL

// Casamentos em Minas gerais
var urlBase = 'https://registrocivilminas.org.br/relatorio/';
let url7 = urlBase + 'casamento/tres-anos-casamento-MG';
let xhr7 = new XMLHttpRequest();
xhr7.responseType = "json";
xhr7.open('GET', url7, true);
var casamentoMG;

xhr7.onreadystatechange = function () {
  if (xhr7.readyState == 4) {
    if (xhr7.status == 200) {
      var request7 = xhr7.response;
      casamentoMG = new Array(request7.length);
      for (i = 1; i < request7.length; i++) {
        casamentoMG[i] = parseFloat((request7[i]["quantidadeDeRegistro"]).replace('.', ''))
      }
    }
    else {
      alert("Erro ao carregar!")
    }
  }
}
xhr7.send();

//Casamentos em Belo horizonte
let url8 = urlBase + 'casamento/tres-anos-casamento-BH';
let xhr8 = new XMLHttpRequest();
xhr8.responseType = "json";
xhr8.open('GET', url8, true);
var casamentoBH;

xhr8.onreadystatechange = function () {
  if (xhr8.readyState == 4) {
    if (xhr8.status == 200) {
      var request8 = xhr8.response;
      casamentoBH = new Array(request8.length);

      for (i = 1; i < request8.length; i++) {
        casamentoBH[i] = parseFloat((request8[i]["quantidadeDeRegistro"]).replace('.', ''))
      }
    }
    else {
      alert("Erro ao carregar!")
    }
    
  }
}
xhr8.send();

//Monta os Graficos
function graficosCasamento() {
  let url = urlBase + 'casamento/tres-anos-casamento-MG';
  let xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.open('GET', url, true);


  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var request = xhr.response;
     
      
        //Armazena os meses em um vetor, eixo X do grafico
        var vetMes = new Array(request.length);
        for (i = 1; i < request.length; i++) {
          vetMes[i] = request[i]["mes"]
        }
        var ctx = document.getElementById('graficosCasamentoBar').getContext('2d');
        var chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: vetMes.reverse(),
            datasets: [
              {
                label: 'Casamentos em Minas gerais',
                data: casamentoMG.reverse(),
                backgroundColor: [
                  '#F2B33D',
                ],
                borderColor: [
                  '#F2B33D',
                ],
                borderWidth: 1
              },
              {
                label: 'Casamentos em Belo Horizonte',
                data: casamentoBH.reverse(),
                backgroundColor: [
                  '#007cba',
                ],
                borderColor: [
                  '#007cba',
                ],
                borderWidth: 1
              },

            ]
          },
          options: {
            plugins: {
              legend: {
               
                  position: 'bottom'
                
              }
            }
          }
        });
      } else {
        alert("Erro ao carregar!")
      }
    }
    
  }
  xhr.send();
}