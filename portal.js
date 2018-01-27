document.addEventListener("DOMContentLoaded", ready);
function ready() {

  var newsList = [{url:'http://nu-today.ru/images/news/novost-o-stroitelstve-metro-v-novoy-usmani-okazalas-utkoy.jpg',
  text:'Это топ новость дня, века и тысячилетия!!!'},
  {url: 'https://www.concordia.ca/cunews/offices/vpaer/aar/2017/11/22/interested-in-launching-a-career-in-fundraising.img.png/1511377166554.jpg',
   text:'Какая-то новость, не самая топовая, но нормальная, покатит под пивко'},
  {url:'https://wallpaperscraft.com/image/newspaper_coffee_cup_spoon_sunglasses_news_cup_holder_84893_1280x1024.jpg',
   text:'Ну это вообще разрыв шаблона, а не новость. Такое нудно всем рассказать'},
  {url:'https://www.mimh.edu/content/uploads/2015/04/fox2-Sale.jpg',
  text:'Позитивные новости, читать не перечитать, настроение повышается!'},
  {url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgCHC-MG1Y_0H3VoD98KbOn_-eztBfshtQ-qcSya4d-e5HWwPM',
   text:'Эту новость посоветовал наш подписчик и постоянный читатель Онотоле'}];

  var mainNews = document.getElementById('main');
  var newsText = document.getElementsByClassName('slider__news-text')[0];
  mainNews.src = newsList[0].url;
  newsText.innerHTML = newsList[0].text;
  var i = 0;

  var arrow2 = document.getElementsByClassName('arrow2')[0],
  dotRight = document.getElementsByClassName('dot3')[0];
  arrow2.addEventListener("click", moveRight);
  dotRight.addEventListener("click", moveRight);
  function moveRight() {
    i++;
    if(i > newsList.length - 1) {
      i = 0;
    };
    mainNews.src = newsList[i].url;
    newsText.innerHTML = newsList[i].text;
  };

  var arrow1 = document.getElementsByClassName('arrow1')[0],
  dotLeft = document.getElementsByClassName('dot1')[0];
  arrow1.addEventListener("click", moveLeft);
  dotLeft.addEventListener("click", moveLeft);
  function moveLeft() {
    i--;
    if(i < 0) {
      i = newsList.length - 1;
    };
    mainNews.src = newsList[i].url;
    newsText.innerHTML = newsList[i].text;
  };

  var wrapper = document.getElementsByClassName('wrapper')[0],
  modal = document.getElementById('modal'),
  vpanel = document.getElementById('panel'),
  modals = document.getElementsByClassName('modal1');

  wrapper.onclick = function(e) {
    var target1 = event.target;
    var button1 = target1.closest('button');
    if (!button1) return;
     function closeModal() {
     for(let j = 0; j < modals.length; j++) {
        modals[j].style.display = 'none';
        }
    }
    closeModal(button1);
  };

  //function closeModal() {
  //  modal.style.display = 'none';
  //};
  //closeButton.addEventListener("click", closeModal);



panel.onclick = function(e) {
  event.stopPropagation();
  var target = event.target;
  var button = target.closest('button');
  if (!button) return;
   function initModal() {
   for(let j = 0; j < modals.length; j++) {
    var stat = modals[j].getAttribute('rel'),
    relTarget = button.getAttribute('rel');
    if(stat == relTarget) {
      modals[j].style.display = 'block';
    }
    }
  }
  initModal(button);
};

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=6f7c85381a5c44deb7e024cd02c60e31', false);
xhr.send();
if(xhr.status != 200) {
  console.log(xhr.status + ': ' + xhr.statusText);
}
else {
  //console.log(xhr.responseText);
  var data = JSON.parse(xhr.responseText),
  articles = data.articles;
  //console.log(articles);

  var commonNews = document.getElementById('common-news');
  function getCommonNews() {
    for(let j = 0; j < articles.length -1; j++) {
      var newP = document.createElement('p');
      var year = new Date(articles[j].publishedAt).getFullYear();
      var month = new Date(articles[j].publishedAt).getMonth()
      var day = new Date(articles[j].publishedAt).getDate();
      newP.innerHTML = articles[j].title + articles[j].description + '<br>' + year +' '+ month +' '+day;
      commonNews.insertBefore(newP, commonNews.children[1]);
    }
  }
  getCommonNews();
}

function setCookie(name, value, options) {
  options = {};
  options.expires = new Date().getSeconds()+10;
  var expires = options.expires;
}
setCookie();
var date = new Date;
date.setDate(date.getDate() + 0.0002);
console.log(date);
document.cookie = "name=banner; value=visible; path=/; expires=" + date.toUTCString();
function showBanner() {
  var bannerImg = document.getElementsByClassName('banner')[0];
    if(document.cookie) {
      bannerImg.style.display = 'block';
    }
    else {
      bannerImg.style.display = 'none';
    }
}
setInterval(showBanner, 1000);

var xhr2 = new XMLHttpRequest();
xhr2.open('GET', 'menu.JSON', false);
xhr2.send();
if(xhr2.status != 200) {
  console.log(xhr2.status + ': ' + xhr2.statusText);
}
else {
  //console.log(xhr2.responseText);
  var dataList = JSON.parse(xhr2.responseText);
  console.log(dataList);

  var topMenu = document.querySelector('ul');
  console.log(topMenu);
  function creatMenu() {
    for(let j = 0; j < dataList.length -1; j++) {
      var newLi = document.createElement('li');
      newLi.innerHTML = '<a href="#">'+dataList[j].type+'</a>' + '<ul class="lvl2"><li>'+dataList[j].description+'</li></ul>';
      topMenu.appendChild(newLi);
    }
  }
  creatMenu();
 }

 var accordion = document.getElementsByClassName('accordion_menu')[0],
     accordionItem = document.getElementsByClassName('accordion_menu-item');
     console.log(accordionItem);

  accordion.addEventListener('click', accordionDisplay);

  function accordionDisplay(e) {
    for (let j = 0; j < accordionItem.length; j++) {
      accordionItem[j].childNodes[3].style.display = "none";
    }
    var target = event.target;
    var ourP = target.childNodes[3];
    ourP.style.display = "block";
  }

//  function accordionMenu () {
//    for (let j = 0; j < accordionItem.length; j++) {
//      console.log(accordionItem[i].childNodes[3]);
//    }
//  }
//accordionMenu();
 }
