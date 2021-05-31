
window.onload = function () {
  let input = document.getElementsByTagName("input")[0]
  let button = document.querySelector(".startBtn")
  const moneySecond = document.querySelectorAll('.moneySecond')
  const secondMoney = document.querySelectorAll('.secondMoney')
  const makeMoney = document.querySelectorAll('.makeMoney')
  const million = document.querySelectorAll('.million')
  const thousand = document.querySelectorAll('.thousand')
  const month = document.querySelectorAll('.month')
  const week = document.querySelectorAll('.week')
  const stars = {
    "musk": 7700000000000,
    "son": 10600000000,
    "messi": 140000000000,
    "curry": 48000000000,
    "Mayweather": 170000000,
    "leedaeho": 2500000000
  }

  button.addEventListener("click", function () {
    let slideActive = document.querySelector('.swiper-slide-active')//현재 액티브된 선수

    value = input.value * 10000
    makestar =
      makeMillion = 10000 / input.value
    makeThousand = 1000 / input.value * 365
    makeMonth = value / 12 / 10000
    makeWeek = value / 52 / 10000

    million[0].innerHTML = makeMillion.toFixed(1) + '년'
    thousand[0].innerHTML = makeThousand.toFixed(0) + '일'
    month[0].innerHTML = makeMonth.toFixed(0) + '만원'
    week[0].innerHTML = makeWeek.toFixed(0) + '만원'
    interval();
  });

  let timer;

  function interval() {
    clearInterval(timer)
    secValue = value / 365 / 24 / 60 / 60

    let secNum = 0;
    timer = setInterval(function () {
      secNum++;
      moneySecond[0].innerHTML = secNum + "초에 "
      secondMoney[0].innerHTML = (secValue * secNum).toFixed(0) + "원";
    }, 1000)
  }

  new Swiper('.promotion .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
      clickable: true
    },
    navigation: {
      prevEl: '.promotion .swiper-prev',
      nextEl: '.promotion .swiper-next'
    }
  });
}