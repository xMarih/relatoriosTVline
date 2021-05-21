// pega a lista da URL e armazena no vetor
// Temos um vetor para cada URL

// Obitos em Minas gerais
var urlBase = 'https://registrocivilminas.org.br/relatorio/';
let url3 = urlBase + 'obito/tres-anos-geral-MG';
let xhr3 = new XMLHttpRequest();
xhr3.responseType = "json";
xhr3.open('GET', url3, true);
var mortesGeralMG = new Array(25);
// Armazena o tamanho do vetor GERAL(25) na variavel 'tam'
var tam; 

xhr3.onreadystatechange = function () {
  if (xhr3.readyState == 4) {
    if (xhr3.status == 200) {
      var request3 = xhr3.response;
      tam = 25;
      
      for (i = 1; i < 25; i++) {
        mortesGeralMG[i] = parseFloat((request3[i]["quantidadeDeRegistro"]).replace('.', ''))
      }
    }
    else {
      alert("Erro ao carregar!")
    }
  }
}
xhr3.send();

//Obitos por COVID em Minas Gerais 
var urlBase = 'https://registrocivilminas.org.br/relatorio/';
let url1 = urlBase + 'obito/tres-anos-covid-MG';
let xhr1 = new XMLHttpRequest();
xhr1.responseType = "json";
xhr1.open('GET', url1, true);
var mortesCovidMG = new Array(25);


xhr1.onreadystatechange = function () {
  if (xhr1.readyState == 4) {
    if (xhr1.status == 200) {
      var request1 = xhr1.response;
      // O request.legth para as URL relacionadas ao COVID era 15, para as URL de mortes gerias era 25
      // Para o grafico ficar correto, os dois vetores precisavam ter o memso tamanho.
      //Por isso no metodo anterior foi necessario armazenar o request.legth em uma variavel global ('')
      

      for (i = 1; i < request1.length; i++) {
        mortesCovidMG[i] = parseFloat((request1[i]["quantidadeDeRegistro"]).replace('.', ''))
      }
    }
    else {
      alert("Erro ao carregar!")
    }
    
  }
}
xhr1.send();


//Obitos em Belo Horizonte
var urlBase = 'https://registrocivilminas.org.br/relatorio/';
let url4 = urlBase + 'obito/tres-anos-geral-BH';
let xhr4 = new XMLHttpRequest();
xhr4.responseType = "json";
xhr4.open('GET', url4, true);
var mortesGeralBH = new Array(25);
// Armazena o tamanho do vetor GERAL(25) na variavel 'tam'
// Mesmo com a variavel 'tam' sendo global, não foi possivel usa-la no metodo abaixo desse(erro: undefined)
// Por isso armazenei do request.legth dessa url novamente em uma variavel global, 
//para definir o vetor do metodo abaixo com o msmo tamanho do vetor alocado nesse metodo

xhr4.onreadystatechange = function () {
  if (xhr4.readyState == 4) {
    if (xhr4.status == 200) {
      var request4 = xhr4.response;
      // tam2 = 25;
      

      for (i = 1; i < 25; i++) {
        mortesGeralBH[i] = parseFloat((request4[i]["quantidadeDeRegistro"]).replace('.', ''))
      }
    }
    else {
      alert("Erro ao carregar!")
    }
  }
}
xhr4.send();

//Obitos por COVID em BH
let url2 = urlBase + 'obito/tres-anos-covid-BH';
let xhr2 = new XMLHttpRequest();
xhr2.responseType = "json";
xhr2.open('GET', url2, true);
var mortesCovidBH = new Array(25);

xhr2.onreadystatechange = function () {
  if (xhr2.readyState == 4) {
    if (xhr2.status == 200) {
      var request2 = xhr2.response;
      
      
      for (i = 1; i < request2.length; i++) {
        mortesCovidBH[i] = parseFloat((request2[i]["quantidadeDeRegistro"]).replace('.', ''))
      }
    }
    else {
      alert("Erro ao carregar!")
    }
    
  }
}
xhr2.send();


//Montagem dos Graficos

function graficosObito() {
  let url = urlBase + 'obito/tres-anos-geral-MG';
  let xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.open('GET', url, true);
  


  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var request = xhr.response;

            //O request da URL é uma lista, na qual a posição 0 é o dado mais recente
            //Dessa maneira o grafico estava sendo impresso do mais recente para o mais antigo(decrescente)
            // Para gerar o grafico de maneira crescente, todos os vetores foram impressos de tras pra frente
            //por meio do metodo .reverse()      

      
        //Armazena os meses em um vetor, eixo X do grafico
        var vetMes = new Array(request.length);
        for (i = 1; i < request.length; i++) {
          vetMes[i] = request[i]["mes"]
        }

        var ctx = document.getElementById('graficosObitoBar').getContext('2d');
        var chart = new Chart(ctx, {
          type: 'line',
          data: {
           
            labels: vetMes.reverse(),
            datasets: [
              {
                label: 'Óbitos por COVID em Minas gerais',
                data: mortesCovidMG.reverse() ,
                backgroundColor: [
                  'rgba(255, 0, 0)',
                ],
                borderColor: [
                  'rgba(255, 0, 0, 1)',
                ]
              },
              {
                label: 'Óbitos por COVID em Belo Horizonte',
                data: mortesCovidBH.reverse(),
                backgroundColor: [
                  'rgba(0, 0, 0)',
                ],
                borderColor: [
                  'rgba(0, 0, 0)',
                ]
              },
              {
                label: 'Óbitos em Minas gerais',
                data: mortesGeralMG.reverse(),
                backgroundColor: [
                  '#F2B33D',
                ],
                borderColor: [
                  '#F2B33D',
                ]
              },
              {
                label: 'Óbitos em Belo Horizonte',
                data: mortesGeralBH.reverse(),
                backgroundColor: [
                  '#007cba',
                ],
                borderColor: [
                  '#007cba',
                ]
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
        }
        );

      } else {
        alert("Erro ao carregar!")
      }
    }
  
  }
  xhr.send();

}