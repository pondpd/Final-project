'use strict';

window.onload = function () {
    alert("This website for education. You can visiting this website.")
}

const addEventOnElen = function(elen , type , callback) {
    if(elen.length > 1) {
        for(let i = 0 ; i < elen.length ; i++) {
            elen[i].addEventListener(type,callback)
        }
    }
    else {
        elen.addEventListener(type,callback)
    }
}

const navtogglers = document.querySelectorAll("[data-nav-toggler]")
const navbar = document.querySelector("[data-navbar]")
const navlink = document.querySelectorAll("[data-nav-link]")
const overlay = document.querySelector("[data-overlay]")

const togglenavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}

addEventOnElen(navtogglers , "click" , togglenavbar);

const closenavbar = function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active"); 
}

addEventOnElen(navlink , "click" , closenavbar);

const header = document.querySelector("[data-header]");

const headeractive = function () {
    if(window.scrollY > 150) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}

addEventOnElen(window , "scroll" , headeractive);

let lastScolledPos = 0;

const headerSticky = function () {
    if(lastScolledPos >= window.scrollY) {
        header.classList.remove("header-hide")
    } else {
        header.classList.add("header-hide")
    }

    lastScolledPos = window.scrollY
}

addEventOnElen(window , "scroll" , headerSticky);

const section = document.querySelectorAll("[data-section]")

const scrollreview = function () {
    for (let i = 0 ; i < section.length ; i++) {
        if (section[i].getBoundingClientRect().top < window.innerHeight / 2) {
            section[i].classList.add("active")
        } else {
            section[i].classList.remove("active")
        }
    }
}

addEventOnElen(window , "scroll" , scrollreview);
 





























