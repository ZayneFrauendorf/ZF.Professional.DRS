

var infoModule = (function () {
  let email = 'accounts@drsvsd.co.nz';
  let phone = '0800 377 873';

  let aucklandStreetAddress = 'Gate 7, Unit 786 Jarvis Way';
  let aucklandSuburbAndCity = 'East Tamaki, Auckland';

  let christchurchStreetAddress = '5 Vulcan Place';
  let christchurchSuburbAndCity = 'Middleton, Christchurch';

  let correctYear = new Date().getFullYear();

  let copyrightInfo = `&copy; ${correctYear} - Drive Repair Shop`

  function copyrightInfoProvided() {
    let copyrightElement = document.querySelector('footer');
    copyrightElement.innerHTML = copyrightInfo;
    return;
  }

  function christchurchAddressProvided() {
    let christchurchAddress = document.querySelector('.christchurch-address');
    christchurchAddress.innerHTML = `${christchurchStreetAddress} </br> ${christchurchSuburbAndCity}`
    return;
  }

  function aucklandAddressProvided() {
    let aucklandAddress = document.querySelector('.auckland-address');
    aucklandAddress.innerHTML = `${aucklandStreetAddress} </br> ${aucklandSuburbAndCity}`
    return;
  }

  function emailProvided() {
    let emailItemList = document.querySelectorAll('.email');

    for (let item of emailItemList) {
      item.href = `mailto:${email}`;
      item.textContent = email;
    }
    return;
  }

  function phoneProvided() {
    let phoneItemList = document.querySelectorAll('.phone');

    for (let item of phoneItemList) {
      item.href = `tel:${phone.replace(/\s/g, "")}`;
      item.textContent = phone;
    }
    return;
  }
  return {
    emailProvided: emailProvided,
    phoneProvided: phoneProvided,
    christchurchAddressProvided: christchurchAddressProvided,
    aucklandAddressProvided: aucklandAddressProvided,
    copyrightInfoProvided: copyrightInfoProvided
  };
})();



document.addEventListener("DOMContentLoaded", function () {
  var url = window.location.href;
  infoModule.emailProvided();
  infoModule.phoneProvided();
  infoModule.copyrightInfoProvided();

  if (url.match(/contact/g)) {

    infoModule.christchurchAddressProvided();
    infoModule.aucklandAddressProvided();

    const nodelist = document.querySelectorAll('#nav-item');
    nodelist.forEach((element) => {
      element.innerHTML === "Contact" ? element.style.color = "red" : element.style.color = "black"
    })

    if (window.innerWidth > 480) {
      let contactColOneAndThree = document.querySelectorAll('.contact-col:nth-child(odd)');
      let addition = `<p></p><p></p><p></p>`;

      for (let item of contactColOneAndThree) {
        item.innerHTML = item.innerHTML + addition;
      }
    }

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
  };
});

