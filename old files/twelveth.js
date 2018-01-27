document.addEventListener("DOMContentLoaded", ready);
function ready() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'phones.json', false);
  xhr.send();
  if(xhr.status != 200) {
    alert(xhr.status + ': ' + xhr.statusText);
  }
  else {
    alert(xhr.responseText);
  }
  var objects = JSON.parse(xhr.responseText);
  console.log(objects);

  var phones = document.getElementById('phones');
  function getList() {
    for(i=0; i < objects.length; i++) {
      var newLi = document.createElement('li');
      newLi.innerHTML = 'Телефон ' + objects[i].name;
      console.log(objects[i]);
      phones.insertBefore(newLi, phones.children[1]);
    }
  }
  getList();
}
