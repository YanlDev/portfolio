const burger = document.getElementById('hamburger');
    const menuMobile = document.getElementById('menuMobile');

    burger.addEventListener('click', ()=>{
      menuMobile.classList.toggle('open');
    })