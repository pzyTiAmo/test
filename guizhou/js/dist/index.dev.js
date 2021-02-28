"use strict";

var arr = [{
  id: '1',
  name: '公告公式',
  list: [{
    text: '2020年度赖茅酒获奖经销单位评选公示',
    span: '2020-12-07'
  }, {
    text: '中国贵州茅台酒厂（集团）有限责任公司2019年度负责人薪酬情况公告',
    span: '2021-01-11'
  }, {
    text: '2020年度茅台酱香系列酒获奖经销单位和个人评选公示',
    span: '2020-12-10'
  }, {
    text: '贵州茅台酒股份有限公司和义兴酒业分公司2020年招工拟录取人员公示',
    span: '2020-11-30'
  }, {
    text: '茅台集团2021年度废旧物资出售公开竞价公告',
    span: '2020-11-23'
  }, {
    text: '茅台集团公开招募项目后评价、金融咨询、财务管理咨询、审计服务、资...',
    span: '2020-11-05'
  }]
}, {
  id: '2',
  name: '集团新闻',
  list: [{
    text: '抓生态 重保护 优环境 筑牢高质量发展绿色屏障 茅台集团召开2020年环...',
    span: '2021-01-27'
  }, {
    text: '“稳市稳价”重招迭出：茅台打出“三步拳',
    span: '2021-01-27'
  }, {
    text: '茅台集团召开2020年第四季度暨年度安全工作会',
    span: '2021-01-27'
  }, {
    text: '喜讯！全国五好家庭 茅台有两家',
    span: '2021-02-12'
  }, {
    text: '高卫东等被补选为贵州省第十三届人民代表大会代表',
    span: '2021-01-24'
  }, {
    text: '服务“两节”市场 茅台在行动',
    span: '2021-02-18'
  }, {
    text: '茅台携手岩博 共酿一壶扶贫酒',
    span: '2021-02-07'
  }]
}, {
  id: '3',
  name: '公告公式',
  list: [{
    text: '2020年度赖茅酒获奖经销单位评选公示',
    span: '2020-12-07'
  }, {
    text: '中国贵州茅台酒厂（集团）有限责任公司2019年度负责人薪酬情况公告',
    span: '2021-01-11'
  }, {
    text: '2020年度茅台酱香系列酒获奖经销单位和个人评选公示',
    span: '2020-12-10'
  }, {
    text: '贵州茅台酒股份有限公司和义兴酒业分公司2020年招工拟录取人员公示',
    span: '2020-11-30'
  }, {
    text: '茅台集团2021年度废旧物资出售公开竞价公告',
    span: '2020-11-23'
  }, {
    text: '茅台集团公开招募项目后评价、金融咨询、财务管理咨询、审计服务、资...',
    span: '2020-11-05'
  }]
}, {
  id: '4',
  name: '集团新闻',
  list: [{
    text: '抓生态 重保护 优环境 筑牢高质量发展绿色屏障 茅台集团召开2020年环...',
    span: '2021-01-27'
  }, {
    text: '“稳市稳价”重招迭出：茅台打出“三步拳',
    span: '2021-01-27'
  }, {
    text: '茅台集团召开2020年第四季度暨年度安全工作会',
    span: '2021-01-27'
  }, {
    text: '喜讯！全国五好家庭 茅台有两家',
    span: '2021-02-12'
  }, {
    text: '高卫东等被补选为贵州省第十三届人民代表大会代表',
    span: '2021-01-24'
  }, {
    text: '服务“两节”市场 茅台在行动',
    span: '2021-02-18'
  }, {
    text: '茅台携手岩博 共酿一壶扶贫酒',
    span: '2021-02-07'
  }]
}];
var maotai_xinwen = document.querySelector('#content .content .xinwen-biaoqian');
var one = document.querySelectorAll('#nav .nav .ulOne .one');
var two = document.querySelectorAll('#nav .nav .ultwo ');
var data = document.querySelector('#header .header .day');
var maotai_xinwen_ul = document.querySelector('#content .content .maotai-xinwen-ul');
var date = new Date();
var year = date.getFullYear();
var moth = date.getMonth() + 1;
var d = date.getDate();
var myday = date.getDay();
var week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
var nowTime;
nowTime = year + '年' + moth + '月' + d + '号' + '&nbsp' + '&nbsp' + '&nbsp' + week[myday];
data.innerHTML = nowTime;
console.log(data.innerHTML);
one.forEach(function (item, index) {
  item.onmouseover = function () {
    if (item.children[1] == null) {
      return;
    }

    item.children[1].style.display = 'block';
  };

  item.onmouseout = function () {
    if (item.children[1] == null) {
      return;
    }

    item.children[1].style.display = 'none';
  };
});

function render(arr) {
  var str = '';
  var idx = 1;
  var html = '';
  arr.forEach(function (item) {
    str += "<a href=\"\" id=\"".concat(item.id, "\">").concat(item.name, "</a>");
    var list = item.list;

    if (idx == item.id) {
      list.forEach(function (item) {
        html += "  <li>\n               <div></div>\n               <a href=\"#\" >".concat(item.text, "</a>\n               <span>").concat(item.span, "</span>\n           </li>");
      });
    }
  });
  str = str + " <span>\u66F4\u591A>></span>";
  maotai_xinwen.innerHTML = str;
  maotai_xinwen_ul.innerHTML = html;
  html = '';
  var lia = document.querySelectorAll('#content .content .xinwen-biaoqian a ');
  lia.forEach(function (e, b) {
    e.onmouseover = function () {
      arr.forEach(function (item, index) {
        var list = item.list;
        console.log(b);

        if (b + 1 == item.id) {
          list.forEach(function (a) {
            html += " <li>\n                       <div></div>\n                       <a href=\"#\" >".concat(a.text, "</a>\n                       <span>").concat(a.span, "</span>\n                   </li>");
          });
        }
      });
      maotai_xinwen_ul.innerHTML = html;
      html = '';
    };
  });
}

render(arr);
var maotai_xinwen_ul_li = document.querySelectorAll('#content .content .maotai-xinwen-ul li');
maotai_xinwen_ul_li.forEach(function (item, index) {
  item.onmouseover = function (item) {
    item.target.style.color = '#b80219';
  };

  item.onmouseout = function (item) {
    item.target.style.color = '#000';
  };
});