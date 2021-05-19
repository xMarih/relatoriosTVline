<?php include 'menu.php';?>

<body onload="carregamento()">
      <script>
            function carregamento() {
                  nascimentos();
                  obitos();
                  casamentos();
                  graficosObito();
                  graficosNasc();
                  graficosCasamento();
            }
      </script>

      <main>
            <div>
                  <div class="row">
                        <div class="col-12 ">
                        
                              <!-- Graficos de Barra -->
                              <div class="tab-content" id="nav-tabContent">
                                    
                                    <div class="tab-pane fade show active" id="nav-bar" role="tabpanel" aria-labelledby="nav-bar-tab">

                                          <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                                                <div class="carousel-indicators">
                                                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true"  aria-label="Slide 1"></button>
                                                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="6" aria-label="Slide 7"></button>
                                                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="7" aria-label="Slide 8"></button>
                                                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="8" aria-label="Slide 9"></button>
                                                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="9" aria-label="Slide 10"></button>
                                                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="10" aria-label="Slide 11"></button>
                                                </div>
                                                
                                                <div class="carousel-inner">
                                                      <div class="carousel-item active" data-bs-interval="30000">
                                                            <div class="col-12" id="grafico">
                                                                  <h3>Registros de óbitos</h3>
                                                                  <canvas id="graficosObitoBar"></canvas>
                                                            </div>
                                                      </div>

                                                      <div class="carousel-item" id="card" data-bs-interval="20000">
                                                            <div class="col-12" >
                                                                  <div class="row" id="logo">
                                                                        <img src='logo.jpg'>
                                                                  </div>
                                                                  <div class="row" id="cardsObito1"></div>
                                                            </div>
                                                      </div>

                                                      <div class="carousel-item" id="card" data-bs-interval="20000">
                                                            <div class="col-12" >
                                                                  <div class="row" id="logo">
                                                                        <img src='logo.jpg'>
                                                                  </div>
                                                                  <div class="row" id="cardsObito2"></div>
                                                            </div>
                                                      </div>

                                                      <div class="carousel-item" id="card" data-bs-interval="20000">
                                                            <div class="col-12" >
                                                                  <div class="row" id="logo">
                                                                        <img src='logo.jpg'>
                                                                  </div>
                                                                  <div class="row" id="cardsObito3"></div>
                                                            </div>
                                                      </div>

                                                      <div class="carousel-item" id="card" data-bs-interval="20000">
                                                            <div class="col-12" >
                                                                  <div class="row" id="logo">
                                                                        <img src='logo.jpg'>
                                                                  </div>
                                                                  <div class="row" id="cardsObito4"></div>
                                                            </div>
                                                      </div>

                                                      <div class="carousel-item">
                                                            <div class="col-12" id="grafico" data-bs-interval="30000">
                                                                  <h3>Registros de nascimentos</h3>
                                                                  <canvas id="graficosNascBar"></canvas>
                                                            </div>
                                                      </div>

                                                      <div class="carousel-item" id="card" data-bs-interval="20000">
                                                            <div class="col-12" >
                                                                  <div class="row" id="logo">
                                                                        <img src='logo.jpg'>
                                                                  </div>
                                                                  <div class="row" id="cardsNascimento1"></div>

                                                            </div>
                                                      </div>

                                                      <div class="carousel-item" id="card" data-bs-interval="20000">
                                                            <div class="col-12" >
                                                                  <div class="row" id="logo">
                                                                        <img src='logo.jpg'>
                                                                  </div>
                                                                  <div class="row" id="cardsNascimento2"></div>

                                                            </div>
                                                      </div>
    
                                                      <div class="carousel-item">
                                                            <div class="col-12" id="grafico" data-bs-interval="30000">
                                                                  <h3>Registros de casamentos</h3>
                                                                  <canvas id="graficosCasamentoBar"></canvas>
                                                            </div>
                                                      </div>

                                                      <div class="carousel-item" id="card" data-bs-interval="20000">
                                                            <div class="col-12" >
                                                                  <div class="row" id="logo">
                                                                        <img src='logo.jpg'>
                                                                  </div>
                                                                  <div class="row" id="cardsCasamento1"></div>
                                                            </div>
                                                      </div>
                                                      
                                                      <div class="carousel-item" id="card" data-bs-interval="20000">
                                                            <div class="col-12" >
                                                                  <div class="row" id="logo">
                                                                        <img src='logo.jpg'>
                                                                  </div>      
                                                                  <div class="row" id="cardsCasamento2"></div>
                                                            </div>
                                                      </div>
                                                </div>
                                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                      <span class="visually-hidden">Previous</span>
                                                </button>
                                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                      <span class="visually-hidden">Next</span>
                                                </button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      </main>
</body>