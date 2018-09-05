
window.onload = function () {
  var url = window.location.href;

  if (url.match(/contact/g)) {
    const nodelist = document.querySelectorAll('#nav-item');
    nodelist.forEach((element) => {
      element.innerHTML === "Contact" ? element.style.color = "red" : element.style.color = "black"
    })

  } else {
    const nodelist = document.querySelectorAll('#nav-item');
    nodelist.forEach((element) => {
      element.innerHTML === "Home" ? element.style.color = "red" : element.style.color = "black"
    });

    var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2900,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

}

