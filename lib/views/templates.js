

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
            <li><a href="#">Contáctenos</a></li>
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
                        <a href="#contact" class="nav__link">Contáctenos</a>
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

                        <a href="#" class="me-3">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Ciudad del Este
                        </a>
                        <a href="#" class="me-3">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Presidente Franco
                        </a>
                        <a href="#" class="me-3">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Hernandarias
                        </a>
                    </form>
                </div>
            </div>
        </section>



        <div class="container2 container">
            <div class="title__preventa">Preventa</div>
            <div class="content">
                <form action="#">
                    <div class="user-details">
                        <div class="input-box">
                            <span class="details">Servicios</span>

                            <div class="selectdiv">

                                <select>
                                    <option selected> Opciones </option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                    <option>Option 4</option>
                                    <option>Option 5</option>
                                </select>

                            </div>

                        </div>


                        <div class="input-box">
                            <span class="details">Plan</span>

                            <div class="selectdiv">

                                <select>
                                    <option selected> Opciones </option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                    <option>Option 4</option>
                                    <option>Option 5</option>
                                </select>

                            </div>

                        </div>


                        <div class="input-box">
                            <span class="details">Pack Señales</span>

                            <div class="selectdiv">

                                <select>
                                    <option selected> Opciones </option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                    <option>Option 4</option>
                                    <option>Option 5</option>
                                </select>

                            </div>

                        </div>


                        <div class="input-box">
                            <span class="details">Fecha</span>
                            <input type="date" required>
                        </div>

                        <div class="input-box">
                            <span class="details">Barrio</span>

                            <div class="selectdiv">

                                <select>
                                    <option selected> Opciones </option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                    <option>Option 4</option>
                                    <option>Option 5</option>
                                </select>

                            </div>

                        </div>

                        <div class="input-box">
                            <span class="details">Nombre</span>
                            <input type="text" placeholder="Nombre del Abonado" required>
                        </div>
                        <div class="input-box">
                            <span class="details">Apellido</span>
                            <input type="text" placeholder="Apellido del Abonado" required>
                        </div>
                        <div class="input-box">
                            <span class="details">Teléfono de Contacto</span>
                            <input type="text" placeholder="Numero de Teléfono" required>
                        </div>
                        <div class="input-box">
                            <span class="details">Documento</span>
                            <input type="text" placeholder="CI/DNI del Abonado" required>
                        </div>

                        <div class="input-box">
                            <span class="details">Vendedor</span>

                            <div class="selectdiv">

                                <select>
                                    <option selected> Opciones </option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                    <option>Option 4</option>
                                    <option>Option 5</option>
                                </select>

                            </div>

                        </div>
                    </div>



                    <div class="button__sub">
                        <input type="submit" id="btnSaveClient" value="Guardar">
                    </div>
                </form>
            </div>
        </div>

    </main>

    <!--=============== FOOTER ===============-->
    <footer class="footer section">
        <div class="footer__container container grid">
            <a href="#" class="footer__logo">
                <img src="assets/img/logo_cde_BR_footer.png" alt="">
            </a>

            <div class="footer__content">
                <h3 class="footer__title">Index</h3>

                <ul class="footer__links">
                    <li>
                        <a href="#" class="footer__link">Inicio</a>
                    </li>
                    <li>
                        <a href="#about" class="footer__link">Nosotros</a>
                    </li>
                    <li>
                        <a href="#services" class="footer__link">Servicios</a>
                    </li>
                    <li>
                        <a href="#planes" class="footer__link">Planes</a>
                    </li>
                </ul>
            </div>

            <div class="footer__content">
                <h3 class="footer__title">Support</h3>

                <ul class="footer__links">
                    <li>
                        <a href="#" class="footer__link">Product help</a>
                    </li>
                    <li>
                        <a href="#" class="footer__link">Register</a>
                    </li>
                    <li>
                        <a href="#" class="footer__link">Updates</a>
                    </li>
                    <li>
                        <a href="#" class="footer__link">Provides</a>
                    </li>
                </ul>
            </div>

            <div class="footer__content">
                <form action="" class="footer__form">
                    <input type="email" placeholder="Whatsapp" class="footer__input">
                    <button class="button button--flex">
                        <i class="ri-send-plane-line button__icon"></i> Mensaje
                    </button>
                </form>

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

