document.addEventListener("DOMContentLoaded", ready);
function ready() {
console.log('111');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=6f7c85381a5c44deb7e024cd02c60e31', false);
xhr.send();
if(xhr.status != 200) {
  console.log(xhr.status + ': ' + xhr.statusText);
}
else {
  console.log(xhr.responseText);
  var data = JSON.parse(xhr.responseText),
  articles = data.articles;
  console.log(articles);

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


}
