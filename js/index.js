window.onload = function () {

  slick('#slide-product-1');
  slick('#slide-product-2');
  slick('#slide-product-3', false);
  slick('#slide-product-4', false);
  slick('#slide-product-5', false);


  

  function slick(element, auto = true) {

    if(auto) {
      var x =  setInterval(function() {
        ClickRight(element);
      }, 4000);
    }
    

    let dots = document.querySelectorAll(element + ' .dots .dot');

    dots.forEach(dot => {
      if(dot.classList.contains('dot-right')) {
        dot.addEventListener('click', function() {
          if(auto) {
            clearInterval(x);
            x = setInterval(function() {
            ClickRight(element);
            }, 4000);
          }
          ClickRight(element);
        });
      }
      else if(dot.classList.contains('dot-left')) {
        dot.addEventListener('click', function() {
          ClickLeft(element);
        });
      }
    });

    

    
  }
 
  function ClickRight(element) {
    
    let allSlide = document.querySelectorAll(element + ' .card-products .product');

    let slide = document.querySelectorAll(element + ' .card-products .product.active');
    let slideFirst = slide[0];
    let slideLast = slide[slide.length - 1];
    if(slideLast.nextElementSibling != null) {
      slideFirst.classList.remove('active');
      slideLast.nextElementSibling.classList.add('active');
    }
    else {
      slide.forEach(element => {
        element.classList.remove('active');
      });

      for(let i = 0; i < slide.length; i++) {
        allSlide[i].classList.add('active');
      }
    }
  }

  function ClickLeft(element) {
    
    let slide = document.querySelectorAll(element + ' .card-products .product.active');
    let slideFirst = slide[0];
    let slideLast = slide[slide.length - 1];
    if(slideFirst.previousElementSibling != null) {
      slideLast.classList.remove('active');
      slideFirst.previousElementSibling.classList.add('active');
    }
  }
 


  let btnCategoryMenu = document.querySelector('.bottom-header-navbar .title');
  btnCategoryMenu.addEventListener('click', function() {
      let categoryMenu = document.querySelector('#top-header-wrapper .col-lg-left');
      categoryMenu.classList.toggle('show');
  });

  let btnMenu = document.querySelector('.bottom-header-navbar .click-menu');
  btnMenu.addEventListener('click', function() {
    let menu = document.querySelector('.bottom-header-navbar ul');
    menu.classList.toggle('show');
  })
}

// var firstSlides = document.querySelector(".banner-wrapper");
// var slides = document.querySelectorAll(".banner-wrapper .banner-top");
// var widthOfSlide = slides[0].clientWidth;
// var count = 0;

// function btnSlideLeft() {
//   BtnLeft(firstSlides, widthOfSlide, slides.length, 1);
// }
// function btnSlideRight() {
//   BtnRight(firstSlides, widthOfSlide, slides.length, 1);
// }

// function BtnRight(firstElement, Width, elementLength, slg) {
//     firstElement.style.transition = "transform 0.6s ease-in-out";
//     count++;
//     if (count > elementLength - slg) {
//         count = 0;
//     }
//     firstElement.style.transform = 'translateX(' + (-Width * count) + 'px)';
// }
// function BtnLeft(firstElement, Width, elementLength, slg) {
//   firstElement.style.transition = "transform 0.6s ease-in-out";
//   count--;
//   if (count < 0) {
//       count = elementLength - slg;
//   }
//   firstElement.style.transform = 'translateX(' + (-Width * count) + 'px)';
// }