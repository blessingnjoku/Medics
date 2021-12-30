
// navbar

let menu = document.querySelector('#navToggle')
let navbar = document.querySelector('.nav-text')

menu.onclick =()=>{
  navbar.classList.toggle('active')


}


window.onscroll =()=>{
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
  
  
  }

// ends


// swiper
var swiper = new Swiper(".mySwiper", {
    watchSlidesProgress: true,
    slidesPerView: 3,
  });
//   ends

