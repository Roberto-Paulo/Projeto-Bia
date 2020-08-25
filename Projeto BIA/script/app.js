const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav li');
    //alternância na barra de navegação
    burger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');

    //animação dos links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            }
            else{
                link.style.animation =  `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
            }
         });
    //animação do "hambúrguer"
         burger.classList.toggle('toggle');
    });
   
} 

navSlide();

