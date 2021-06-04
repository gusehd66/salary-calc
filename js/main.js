
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
  const whoIsStar = document.querySelector('#whoIsStar')
  let timer
  const stars = {
    son: ['손흥민', 10600000000],
    messi: ['메시', 140000000000],
    curry: ['스테판커리', 48000000000],
    ryuhyunjin: ['류현진', 22300000000],
    leedaeho: ['이대호', 2500000000],
    federer: ['페더러', 100000000000],
    faker: ['페이커', 3000000000]
  }

  button.addEventListener("click", function () {
    const slideActive = document.querySelector('.swiper-slide-active')
    const starMoney = stars[slideActive.classList[1]][1] //스타연봉
    const starNameEl = stars[slideActive.classList[1]][0]

    //내계산기
    const value = input.value * 10000 //내연봉
    const makeStar = starMoney / value
    const makeMillion = 100000000 / value
    const makeThousand = 10000000 / value * 365
    const makeMonth = value / 12 / 10000
    const makeWeek = value / 52 / 10000

    whoIsStar.innerHTML = starNameEl + '만큼 버는데'
    makeMoney[0].innerHTML = makeStar.toFixed(1) + '년'
    million[0].innerHTML = makeMillion.toFixed(1) + '년'
    thousand[0].innerHTML = makeThousand.toFixed(0) + '일'
    month[0].innerHTML = makeMonth.toFixed(0) + '만원'
    week[0].innerHTML = makeWeek.toFixed(0) + '만원'

    //스타계산기
    const makeMe = value / (starMoney / 365)
    const starMakeMillion = 100000000 / starMoney * 365
    const starMakeThousand = 10000000 / starMoney * 365
    const starMakeMonth = starMoney / 12 / 10000
    const starMakeWeek = starMoney / 52 / 10000

    makeMoney[1].innerHTML = makeMe.toFixed(1) + '일'
    million[1].innerHTML = starMakeMillion.toFixed(1) + '일'
    thousand[1].innerHTML = starMakeThousand.toFixed(1) + '일'
    month[1].innerHTML = starMakeMonth.toFixed(0) + '만원'
    week[1].innerHTML = starMakeWeek.toFixed(0) + '만원'

    //HIDE 부분
    const starName = document.querySelector('.star__name')
    const starSalary = document.querySelector('.star__salary p')
    const starVS = document.querySelector('.star__vs')
    const VSstar = document.querySelector('#VSstar')
    const starMoneyYear = starMoney / 100000000

    starName.innerHTML = starNameEl
    starSalary.innerHTML = "약 " + starMoneyYear + "억원"
    starVS.innerHTML = "당신 VS " + starNameEl
    VSstar.innerHTML = starNameEl + "는?"

    //HIDE -> 보이기 
    const hideActive = document.querySelector('.main__salary')
    hideActive.classList.add("active")
    TweenMax.to(window, 1.7, {
      scrollTo: {
        y: ".main__salary"
      },
      delay: .2,
      ease: Power4.easeInOut
    })

    //타이머시작
    clearInterval(timer)
    secValue = value / 365 / 24 / 60 / 60
    starSecValue = starMoney / 365 / 24 / 60 / 60
    let secNum = 0;
    timer = setInterval(function () {
      secNum++;
      moneySecond[0].innerHTML = secNum + "초에 "
      moneySecond[1].innerHTML = secNum + "초에 "

      secondMoney[0].innerHTML = (secValue * secNum).toFixed(0) + "원";
      secondMoney[1].innerHTML = (starSecValue * secNum).toFixed(0) + "원";
    }, 1000)
  })


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