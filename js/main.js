'use strict';

// slider
(function() {
    $('.slider').slick({
        dots: true,
        arrows: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        pauseOnFocus: false,
    });
})();

//cards 
(function() {
    const parent = document.querySelector('.cards');
    class Card {
        constructor(index, parent) {
            this.index = index;
            this.parent = parent;
        }
        render() {
            const elem = document.createElement('div');
            elem.classList.add('col-12', 'col-sm-6', 'col-lg-4');
            elem.innerHTML = `
            <div class='cards__item'>
                <img src="img/pic-${this.index + 1}.jpg" alt="" class="cards__img">
                <div class="cards__title py-3">Кадастровые работы<br> в отношении земельных участков</div>
            </div>
            `
            this.parent.append(elem);
        }
    }
    for(let i = 0; i < 6; i++) {
        new Card(i, parent).render();
    }
})();

//burger 
(function() {
    const burgerMenu = document.querySelector('.burger__menu'),
        burgerSwitchBtn = document.querySelector('.burger__switch-btn');

    burgerSwitchBtn.addEventListener('click', function() {
        burgerMenu.classList.toggle('active');
        this.classList.toggle('active');
        if(this.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
            burgerMenu.style.overflow = 'scroll';
        } else {
            document.body.style.overflow = '';
            burgerMenu.style.overflow = '';
        }
    })
})();

//ajax
(function(){
    const parent = document.querySelector('.cards'),
        btnLoad = document.querySelector('.service__m-btn-js');

    btnLoad.addEventListener('click', function getData(event) {
        event.preventDefault();
        fetch('db.html').then(
            response => {
                return response.text();
            }
        ).then(
            data => {
                parent.innerHTML += data;
            }
        )
        btnLoad.removeEventListener('click', getData);
    })
})();