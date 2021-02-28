"use strict";

var data = document.querySelector('#header .header .day');
var shousuo = document.querySelector('#nav .nav .navUl .shousuo');
var navUl = document.querySelector('#nav .nav .navUl');
var box = document.querySelector('#nav .nav .box');
var left = document.querySelector('#nav .nav .box .left');
var ul = document.querySelectorAll('#bannernew .bannernew ul ')[0];
var date = new Date();
var year = date.getFullYear();
var moth = date.getMonth() + 1;
var d = date.getDate();
var myday = date.getDay();
var week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
var nowTime;
nowTime = year + '年' + moth + '月' + d + '号' + '&nbsp' + '&nbsp' + '&nbsp' + week[myday];
data.innerHTML = nowTime;

shousuo.onclick = function () {
  navUl.style.display = 'none';
  box.style.display = 'block';
};

left.onclick = function () {
  navUl.style.display = 'block';
  box.style.display = 'none';
};

var swiper = new Swiper('#bannertwo', {
  spaceBetween: 30,
  centeredSlides: true,
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

swiper.el.onmouseover = function () {
  swiper.autoplay.stop();
};

swiper.el.onmouseout = function () {
  swiper.autoplay.start();
};

var sum = 0;
ul.style.left = 0;

function clock() {
  sum = sum - 490;
  ul.style.left = sum + 'px';
  var a = parseInt(ul.style.left);

  if (a % 980 == 0) {
    sum = 0;
  }
}

var time = self.setInterval("clock()", 1000);

ul.onmouseover = function () {
  clearInterval(time);
};

var swiper = new Swiper('#bannerthree', {
  cssMode: true,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  mousewheel: true,
  keyboard: true
});

swiper.el.onmouseover = function () {
  swiper.autoplay.stop();
};

swiper.el.onmouseout = function () {
  swiper.autoplay.start();
};