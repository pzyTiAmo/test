"use strict";

var glyphicon = document.querySelector('#verification p .glyphicon');
var mask = document.querySelector('#mask');
var verification = document.querySelector('#verification');
var a = document.querySelector('#nav .box .chest a');
var btn = document.querySelector('#nav .box .chest button');
var name1 = document.querySelector('#nav .box .name');
var pass = document.querySelector('#nav .box  .password');
var error1 = document.querySelector('#nav .box .error1');
var error2 = document.querySelector('#nav .box .error2');

btn.onclick = function () {
  var e = window.event;
  pAjax({
    url: '../api/steward.php',
    data: {
      username: name1.value,
      password: pass.value
    }
  }).then(function (res) {
    res = JSON.parse(res);
    console.log(res);

    if (res.code == 1) {
      setCookie('login', name1.value);
      var url = localStorage.getItem('url');

      if (url) {
        location.href = url;
        localStorage.removeItem('url');
      } else {
        location.href = './shopping.html';
      }
    }
  });
};

glyphicon.onclick = function () {
  mask.style.display = 'none';
  verification.style.display = 'none';
};

a.onclick = function () {
  mask.style.display = 'block';
  verification.style.display = 'block';
}; //按钮登录
// btn.onclick = () =>{
//     //用户名 3到16位字母或者数字或者中文
//      var name = /^[a-z0-9_\u4e00-\u9fa5]{3,16}$/;
//     if(!name.test(name1.value) || !name1.value){
//         error1.style.display = 'block';
//         name1.value = '';
//     } 
//     if(name.test(name1.value) && name1.value){
//         error1.style.display = 'none';
//     } 
//     // 密码6到18位的字母或者数字
//    var passwordtest = /^[a-z0-9_-]{6,18}$/;
//     if(!pass.value || !passwordtest.test(pass.value)){
//         error2.style.display = 'block';
//         pass.value = '';
//     }
//     if(pass.value && passwordtest.test(pass.value)){
//         error2.style.display = 'none';
//     }
// }