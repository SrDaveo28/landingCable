

export function sectionHeader() {
    return /* html */`
    
        <!-- section -->
        <section class="showcase" id="home">
        <!-- header -->
        <header class="margins">
            <!-- <h2 class="logo">CDE</h2> -->
            <img class="logo" src="/assets/img/logo_cde_BR_footer.png" alt="">
            <div class="toggle"></div>
        </header>

        <!-- fin header -->


        <!-- video source -->

        <video src="/assets/videos/video.mp4" muted loop autoplay></video>


        <!-- overlay -->
        <div class="overlay">

        </div>

        <!-- fin overlay -->

        <!-- text -->

        <div class="text">
            <h2>Brindando Servicio de Calidad</h2>
            <h3>Conecta con el mundo</h3>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, possimus. Fugiat, tempora. Amet magni,
                maxime itaque quae dolor quidem autem modi obcaecati eaque esse! Quidem, sed! Cum officiis voluptatem
                fugiat.</p>

            <a href="#">Conozca Más</a>

        </div>

        <!-- fin text -->



    </section>
    <!-- fin section -->


    <!-- menú -->
    <div class="menu">
        <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#about">Nosotros</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#planes">Planes</a></li>
            <li><a href="#contacto">Contáctenos</a></li>
            <li><a href="#preventa">Preventa</a></li>
        </ul>
    </div>
    <!-- fin menú -->
    <!--=============== HEADER ===============-->
    <header  id="header">
        <nav class="nav container">
            <a href="#" class="nav__logo">
                <img src="assets/img/logo_cde_BR.png" alt="">
            </a>

            <div class="nav__menu" id="nav-menu">
                <ul class="nav__list">
                    <li class="nav__item">
                        <a href="#home" class="nav__link active-link">Inicio</a>
                    </li>
                    <li class="nav__item">
                        <a href="#about" class="nav__link">Nosotros</a>
                    </li>
                    <li class="nav__item">
                        <a href="#services" class="nav__link">Servicios</a>
                    </li>
                    <li class="nav__item">
                        <a href="#planes" class="nav__link">Planes</a>
                    </li>
                    
                    <li class="nav__item">
                        <a href="#contacto" class="nav__link">Contáctenos</a>
                    </li>

                    <li class="nav__item">
                        <a href="#preventa" class="nav__link">Preventa</a>
                    </li>
                </ul>

                <div class="nav__close" id="nav-close">
                    <i class="ri-close-line"></i>
                </div>
            </div>

            <div class="nav__toggle" id="nav-toggle">
                <i class="ri-function-line"></i>
            </div>
        </nav>
    </header>
    `;
}

export function aboutUs() {
    return /* html */`
    

    <div class="content">
    <main class="main">
        <!--=============== aboutUs ===============-->
        <section class="home section" id="about">
            <div class="home__container container grid">
                <div>
                    <img src="assets/img/logo_cde_B.png" alt="" class="home__img">
                </div>

                <div class="home__data">
                    <div class="home__header">
                        <h1 class="home__title">Nosotros</h1>
                        <h2 class="home__subtitle">¿Quienes Somos?</h2>
                    </div>

                    <div class="home__footer">
                        <h3 class="home__title-description">Titulo</h3>
                        <p class="home__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Exercitationem autem laboriosam molestiae quidem unde esse amet repudiandae, cum, quibusdam
                            vitae quae illo eos? Illo minima vel, animi iusto eaque eligendi.
                        </p>

                    </div>
                </div>
            </div>
        </section>

        <!--=============== marcas ===============-->
        <section class="sponsor section">
            <div class="sponsor__container container grid">
                <img src="assets/img/sponsor1.png" alt="" class="sponsor__img">
                <img src="assets/img/sponsor2.png" alt="" class="sponsor__img">
                <img src="assets/img/sponsor3.png" alt="" class="sponsor__img">
                <img src="assets/img/sponsor4.png" alt="" class="sponsor__img">
            </div>
        </section>

        <!--=============== Servicios ===============-->
        <section class="specs section grid" id="services">

            <h1 class="section__title section__title-gradient">Servicios</h1>

            <div class="specs__container container grid">
                <div class="specs__content grid">
                    <div class="specs__data">
                        <i class="fas fa-tachometer-alt"></i>
                        <h3 class="specs__title">Internet</h3>
                        <span class="specs__subtitle">A Alta Velocidad</span>
                    </div>

                    <div class="specs__data">
                        <i class="fas fa-tv"></i>
                        <h3 class="specs__title">Tv</h3>
                        <span class="specs__subtitle">FullHD</span>
                    </div>

                    <div class="specs__data">
                        <i class="fas fa-wifi"></i>
                        <h3 class="specs__title">Fibra Optica</h3>
                        <span class="specs__subtitle">Todos los planes con Fibra Optica</span>
                    </div>

                    <div class="specs__data">
                        <i class="ri-mic-line specs__icon"></i>
                        <h3 class="specs__title">Atención Personalizada</h3>
                        <span class="specs__subtitle">Contacte con <br> nuestros profesionales</span>
                    </div>
                </div>

                <div>
                    <img src="assets/img/img_internet_tv01.png" alt="" class="">
                </div>
            </div>
        </section>

        <!--=============== internet ===============-->
        <section class="case section grid">
            <h2 class="section__title section__title-gradient">Internet</h2>

            <div class="case__container container grid">
                <div>
                    <img src="assets/img/speedtest.png" alt="" class="case__img">
                </div>

                <div class="case__data">
                    <p class="case__description">With a comfortable and adaptable case so that you can
                        store it whenever you want, and keep your durability forever.
                    </p>
                    <a href="#" class="button button--flex">
                        <i class="ri-information-line button__icon"></i> Más Info
                    </a>
                </div>
            </div>
        </section>
        <!--=============== tv ===============-->
        <section class="case section grid">
            <h2 class="section__title section__title-gradient">Televisión</h2>

            <div class="case__container container grid">
                <div>
                    <img src="assets/img/pack_internet02.png" alt="" class="case__img">
                </div>

                <div class="case__data">
                    <p class="case__description">With a comfortable and adaptable case so that you can
                        store it whenever you want, and keep your durability forever.
                    </p>
                    <a href="#" class="button button--flex">
                        <i class="ri-information-line button__icon"></i> Más Info
                    </a>
                </div>
            </div>
        </section>

        <!--=============== CASE ===============-->
        <section class="case section grid" id="planes">
            <h2 class="section__title section__title-gradient">Planes</h2>


            <div class="case__container container d-flex justify-content-center">


                <div class="login-box">

                    <form>

                        <a  class="cde" role="button" id="CDE" class="me-3">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Ciudad del Este
                        </a>
                        <a class="fra" role="button" id="FRA" class="me-3">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Presidente Franco
                        </a>
                        <a class="her" role="button" id="HER" class="me-3">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Hernandarias
                        </a>


                    </form>
                </div>
            </div>


            <div class="container-fluid m-3 row justify-content-center" id="planList">

            </div>
        </section>


        <!--=============== contacto ===============-->
        <section class="case section grid" id="contacto">
        <h2 class="section__title section__title-gradient">Contáctenos</h2>
    
    
        <div class="background">
          <div class="containerContact">
            <div class="screen">
              <div class="screen-header">
                <div class="screen-header-left">
                  <div class="screen-header-button close"></div>
                  <div class="screen-header-button maximize"></div>
                  <div class="screen-header-button minimize"></div>
                </div>
                <div class="screen-header-right">
                  <div class="screen-header-ellipsis"></div>
                  <div class="screen-header-ellipsis"></div>
                  <div class="screen-header-ellipsis"></div>
                </div>
              </div>
              <div class="screen-body">
                <div class="screen-body-item left">
                  <div class="app-title">
                    <span>Envía</span>
                    <span>un mensaje</span>
                  </div>


                </div>
                <div class="screen-body-item">
                  <div class="app-form">
                    <div class="app-form-group">
                      <input class="app-form-control" id="name" placeholder="Nombre">
                    </div>
                    
                    <div class="app-form-group">
                      <input class="app-form-control" id="phoneNumber" placeholder="Número de Teléfono">
                    </div>
                    <div class="app-form-group message">
                      <input class="app-form-control" id="message" placeholder="Mensaje">
                    </div>
                    <div class="app-form-group buttons">
    
                      <a role="button"  id="wspButton"  class="app-form-button">ENVIAR</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
          </div>
        </div>
      </section>



        
    </main>


   

    <!--=============== FOOTER ===============-->
    <footer class="footer section">
        <div class="footer__container container grid">
            <a href="#" class="footer__logo">
                <img src="assets/img/logo_cde_BR_footer.png" alt="">
            </a>

            <div class="d-flex justify-content-center">
                <div class="footer__content ms-5">
                <h3 class="footer__title">¡Síguenos en Nuestras Redes Sociales!</h3>

                    <div class="d-flex justify-content-center">
                        <div class="footer__social">
                            <a href="https://www.facebook.com/" target="_blank" class="footer__social-link">
                                <i class="ri-facebook-fill"></i>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" class="footer__social-link">
                                <i class="ri-instagram-line"></i>
                            </a>
                            <a href="https://twitter.com/" target="_blank" class="footer__social-link">
                                <i class="ri-twitter-line"></i>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <p class="footer__copy">
            <a href="https://www.youtube.com/c/Bedimcode/" target="_blank" class="footer__copy-link">&#169; MDSSoft.
                Todos los derechos reservados.</a>
        </p>
    </footer>

    <!--=============== SCROLL UP ===============-->
    <a href="#" class="scrollup" id="scroll-up">
        <i class="ri-arrow-up-s-line scrollup__icon"></i>
    </a>
</div>
    `
}


