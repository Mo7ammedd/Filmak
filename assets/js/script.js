'use strict';



const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  // navElemArr[i].addEventListener("click", function () {

  //   navbar.classList.toggle("active");
  //   overlay.classList.toggle("active");
  //   document.body.toggle("active");

  // });

}



/**
 * header sticky
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

  window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");

});



/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});
let buttn = document.querySelector('.data-header .but') ;
let button = document.querySelector('.sign button');
let form = document.querySelector('.sign form');
let input = document.querySelector('.sign input');
let error = document.querySelector('.sign .error');    
button.addEventListener ('click', function(e) {
    e.preventDefault();
    if (input.value === '') {
        error.style.display = 'block';
    } else {
      window.location.href ="./index.html";
        // buttn.style.display = 'none';
        window.sessionStorage.setItem('email', input.value);
    }
  });
