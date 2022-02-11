import { render, getFirebase, numberWithPoints } from "../others/utils.js";
import { sectionHeader, mobilePage } from "../views/templates.js";

export function mobile(view, model) {

    view = {};
    view.header = sectionHeader();
    view.aboutUs = mobilePage();

    console.log('mobile');
    model = {};

    getFirebase({ name: `services/` }).then(result => {
        model.services = result;

    });


    render(view, model);
    addButtonsFuncitions();
    animations();
    console.log(model);


    function addButtonsFuncitions() {
        const menuToggle = document.querySelector('.toggle');
        const showCase = document.querySelector('.showcase');

        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            showCase.classList.toggle('active');
        })

        let cdeBtn = document.querySelector('#CDE');
        let fraBtn = document.querySelector('#FRA');
        let herBtn = document.querySelector('#HER');

        cdeBtn.addEventListener('click', () => {
            console.log('click cde')
            fibraOptica('CDE')

        });

        fraBtn.addEventListener('click', () => {
            console.log('click fra')
            fibraOptica('FRA')

        });

        /* herBtn.addEventListener('click', () => {
            console.log('click her')
            fibraOptica('HER')
        }); */



        let message = {};

        let btnWsp = document.getElementById('wspButton');

        btnWsp.addEventListener('click', () => {
            message.name = document.getElementById('name').value;
            message.phone = document.getElementById('phoneNumber').value;
            message.mensaje = document.getElementById('message').value;

            console.log("Mi mensaje", message);


            document.getElementById('name').value = '';
            document.getElementById('phoneNumber').value = '';
            document.getElementById('message').value = '';

            //message.mensaje.toUpperCase();
            //message.mensaje.toUpperCase()

            let nombre = message.name.replace(/\s+/g, '%20');
            let mensaje = message.mensaje.replace(/\s+/g, '%20');

            /* console.log(mensaje); */


            var url = `https://api.whatsapp.com/send?phone=++59572253555&text=MI%20MENSAJE:%20${mensaje.toUpperCase()}`

            window.open(url);


        });

    }



    function animations() {

        window.onscroll = function () { myFunction() };

        var navbar = document.getElementById("header");
        var sticky = navbar.offsetTop;

        function myFunction() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("header")
            } else {
                navbar.classList.remove("header");
            }
        }
        /*=============== SHOW MENU ===============*/
        const navMenu = document.getElementById('nav-menu'),
            navToggle = document.getElementById('nav-toggle'),
            navClose = document.getElementById('nav-close')

        /*===== MENU SHOW =====*/
        /* Validate if constant exists */
        if (navToggle) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.add('show-menu')
            })
        }

        /*===== MENU HIDDEN =====*/
        /* Validate if constant exists */
        if (navClose) {
            navClose.addEventListener('click', () => {
                navMenu.classList.remove('show-menu')
            })
        }

        /*=============== REMOVE MENU MOBILE ===============*/
        const navLink = document.querySelectorAll('.nav__link')

        function linkAction() {
            const navMenu = document.getElementById('nav-menu')
            // When we click on each nav__link, we remove the show-menu class
            navMenu.classList.remove('show-menu')
        }
        navLink.forEach(n => n.addEventListener('click', linkAction))

        /*=============== CHANGE BACKGROUND HEADER ===============*/
        function scrollHeader() {
            const header = document.getElementById('header')
            // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
            if (this.scrollY >= 20) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
        }
        window.addEventListener('scroll', scrollHeader)

        /*=============== SHOW SCROLL UP ===============*/
        function scrollUp() {
            const scrollUp = document.getElementById('scroll-up');
            // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
            if (this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
        }
        window.addEventListener('scroll', scrollUp)

        /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
        const sections = document.querySelectorAll('section[id]')

        function scrollActive() {
            const scrollY = window.pageYOffset

            sections.forEach(current => {
                const sectionHeight = current.offsetHeight
                const sectionTop = current.offsetTop - 50;
                const sectionId = current.getAttribute('id')

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
                } else {
                    document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
                }
            })
        }
        window.addEventListener('scroll', scrollActive)

        /*=============== SCROLL REVEAL ANIMATION ===============*/
        const sr = ScrollReveal({
            distance: '60px',
            duration: 2500,
            delay: 400,
            // reset: true
        })

        sr.reveal(`.home__header, .section__title`, { delay: 600 })
        sr.reveal(`.home__footer`, { delay: 700 })
        sr.reveal(`.home__img`, { delay: 900, origin: 'top' })

        sr.reveal(`.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy`, { origin: 'top', interval: 100 })
        sr.reveal(`.specs__data, .discount__animate`, { origin: 'left', interval: 100 })
        sr.reveal(`.specs__img, .discount__img`, { origin: 'right' })
        sr.reveal(`.case__img`, { origin: 'top' })
        sr.reveal(`.case__data`)
    }

    function fibraOptica(zona) {
        //cargar Planes
        let planList = ``;

        model.services.forEach(service => {

            if (service.desc !== '100 Mb Inst.' && service.desc !== '100 Mb InstTV') {
                if (service.plan == zona) {

                    if (zona == 'CDE') {
                        planList += /* html */`
                        <div class="col-12 mb-3">
                            <div class="card">
                                <!-- <div class="imgBx">
                                <img src="https://assets.codepen.io/4164355/shoes.png">
                                </div> -->
                                <div class="contentBx">
                                    <h2>${service.desc}</h2>
                                    <div class="size mt-3 mb-3">
                                        <h2>Precio : ${numberWithPoints(service.cost)}</h2>
                                        
                                    </div>
                                    <!--<div class="color">
                                        <h3>Color :</h3>
                                        
                                    </div>-->
                                    <a href="pruebas.html" target="_blank">¡Quiero!</a>
                                </div>
                            </div>
                        
                        </div>
                   
                        `
                    } else if (zona == 'FRA') {
                        planList += /* html */`
                        <div class="col-12 mb-3">
                            <div class="cardFRA">
                                <!-- <div class="imgBx">
                                <img src="https://assets.codepen.io/4164355/shoes.png">
                                </div> -->
                                <div class="contentBx">
                                    <h2>${service.desc}</h2>
                                    <div class="size mt-3 mb-3">
                                        <h2>Precio : ${numberWithPoints(service.cost)}</h2>
                                        
                                    </div>
                                    <!--<div class="color">
                                        <h3>Color :</h3>
                                        
                                    </div>-->
                                    <a href="pruebas.html" target="_blank">¡Quiero!</a>
                                </div>
                            </div>
                        
                        </div>
                   
                        `
                    } /* else {
                        planList += `
                        <div class="col-12 mb-3">
                            <div class="cardHER">
                                <!-- <div class="imgBx">
                                <img src="https://assets.codepen.io/4164355/shoes.png">
                                </div> -->
                                <div class="contentBx">
                                    <h2>${service.desc}</h2>
                                    <div class="size mt-3 mb-3">
                                        <h2>Precio : ${service.cost}</h2>
                                        
                                    </div>
                                    <!--<div class="color">
                                        <h3>Color :</h3>
                                        
                                    </div>-->
                                    <a href="pruebas.html" target="_blank">¡Quiero!</a>
                                </div>
                            </div>
                        
                        </div>
                   
                        `
                    } */



                }
            }

        });


        document.getElementById('planList').innerHTML = planList;


    }


}
