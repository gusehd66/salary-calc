
window.onload = function () {
  let input = document.getElementsByTagName("input")[0];
  let sec = document.querySelector(".sec");

  let button = document.querySelector(".startBtn");
  button.addEventListener("click", function () {
    interval();
  });

  let timer;

  function interval() {
    clearInterval(timer);

    value = input.value * 10000;
    secValue = value / 365 / 24 / 60 / 60;

    let secNum = 0;
    timer = setInterval(function () {
      secNum++;
      // console.log(secNum, secValue * secNum)
      // sec.innerHTML = (secValue * secNum).toFixed(1) +"원";
      sec.innerHTML = "당신은 " + secNum + "초에 " + (secValue * secNum).toFixed(0) + "원 벌고 있습니다";
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