// <!-- ========================  TOGGLE MENU BAR  =========================== -->
const navMenu = document.getElementById("nav_menu"),
  navToggle = document.getElementById("nav_toggle"),
  navClose = document.getElementById("nav_close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav_link");
function linkAction() {
  navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) =>
  n.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  })
);
//   SKILLS
function toggleSkills() {
  const links = document.getElementById("skills_list-container");
  links.classList.toggle("showSkills");
  links.classList.toggle("skills_list-container");
}
// function toggleSkills() {
//   const skillslist = document.querySelectorAll(".skills_list-container");
//   console.log("skill list ", skillslist);
//   for (var i = 0; i < skillslist.length; i++) {
//     skillslist[i].classList.toggle("show-skills");
//   }}

// SERVICES
const modalViews = document.querySelectorAll(".services_modal"),
  modalBtns = document.querySelectorAll(".services_button"),
  modalCloses = document.querySelectorAll(".services_modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};
modalBtns.forEach((modalBtns, i) => {
  modalBtns.addEventListener("click", () => {
    modal(i);
  });
});
modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalViews) => {
      modalViews.classList.remove("active-modal");
    });
  });
});

// change bg of header
function scrollHeader() {
  const nav = document.getElementById("header");

  //when the scroll is greater than 200vw height, add the scroll header
  if (this.scrollY) {
    nav.classList.add("scroll-header");
  } else {
    nav.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);
// /* <!-- ======================== SHOW SCROLL UP =========================== --> */
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 560) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollUp);

// // dark light theme

// const themeButton = document.getElementById('theme-button');
// const darkTheme = 'dark-theme';
// const iconTheme = 'uil-sun';

// //previously selected topic
// const selectedTheme =  localStorage.getItem('selected-theme')
// const selectedIcon =localStorage.getItem('selected-icon')
// //we obtain the current theme that the interface has by validating the dark theme
// const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light' ;
// const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';
// //we validate if user previsouly choose a topic
// if(selectedTheme){
//   // if the validation is fullfilled ,we ask thr issue was known if we activated or deactivated the dark theme

//   if(selectedTheme === 'dark'){
//     document.body.classList.add('dark-theme')
//   }
//   // document.body.classList[selectedTheme === 'dark' ? 'add': 'remove'](darkTheme);
//   themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove' ] (iconTheme);
//   console.log('x')
// }
// //activate the theme manually  with thw button
// themeButton .addEventListener('click', () => {
//   //add or remove the dark / icon theme
//   document.body.classList.toggle('darkTheme');
//   themeButton.classList.toggle('iconTheme');
//   //we save the theme and the current icon that the user choose
//   localStorage.setItem('selected-theme',getCurrentTheme())
//   localStorage.setItem('selected-theme',getCurrentTheme())
//   console.log('err')
// })
