// pega a lista da URL e armazena no vetor
// Temos um vetor para cada URL

// Nascimentos em Minas gerais
var urlBase = 'https://registrocivilminas.org.br/relatorio/';
let url5 = urlBase + 'nascimento/tres-anos-nascimento-MG';
let xhr5 = new XMLHttpRequest();
xhr5.responseType = "json";
xhr5.open('GET', url5, true);
var nascimentoMG;

xhr5.onreadystatechange = function () {
  if (xhr5.readyState == 4) {
    if (xhr5.status == 200) {
      var request1 = xhr5.response;
      nascimentoMG = new Array(request1.length);
      for (i = 1; i < request1.length; i++) {
        nascimentoMG[i] = parseFloat((request1[i]["quantidadeDeRegistro"]).replace('.', ''))
      }
    }
    else {
      alert("Erro ao carregar!")
    }
  }
}
xhr5.send();

//Nascimentos em Belo Horizonte 
let url6 = urlBase + 'nascimento/tres-anos-nascimento-BH';
let xhr6 = new XMLHttpRequest();
xhr6.responseType = "json";
xhr6.open('GET', url6, true);
var nascimentoBH;

xhr6.onreadystatechange = function () {
  if (xhr6.readyState == 4) {
    if (xhr6.status == 200) {
      var request2 = xhr6.response;
      nascimentoBH = new Array(request2.length);

      for (i = 1; i < request2.length; i++) {
        nascimentoBH[i] = parseFloat((request2[i]["quantidadeDeRegistro"]).replace('.', ''))
      }
    }
    else {
      alert("Erro ao carregar!")
    }
    
  }
}
xhr6.send();

//Monta os Graficos
function graficosNasc() {
  let url = urlBase + 'nascimento/tres-anos-nascimento-MG';
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
        var ctx = document.getElementById('graficosNascBar').getContext('2d');
        chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: vetMes.reverse(),
            datasets: [
              {
                label: 'Nascimentos em Minas gerais',
                data: nascimentoMG.reverse(),
                backgroundColor: [
                  '#F2B33D',
                ],
                borderColor: [
                  '#F2B33D',
                ],
                borderWidth: 1
              },
              {
                label: 'Nascimentos em Belo Horizonte',
                data: nascimentoBH.reverse(),
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