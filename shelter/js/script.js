"use strict"

const menu = document.querySelector('.header_nav');
const menuBtn = document.querySelector('.nav_burger');
const bodyOverlay = document.querySelector('.overlay');

const body = document.body;


if (menu && menuBtn) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        menuBtn.classList.toggle('active');
        body.classList.toggle('lock');
        bodyOverlay.classList.toggle('active')
    })

    menu.querySelectorAll('.header_link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            menuBtn.classList.remove('active');
            body.classList.remove('lock');
            bodyOverlay.classList.remove('active')
        })
    })
}
