var myForm = document.getElementById('my-form');
myForm.addEventListener('submit', newElement);

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement(e) {
  e.preventDefault();
  console.log(e);
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  function log (message) {
    console.log(message);

  }
  // var todoForm = document.getElementById('todo-form');
  // todoForm.addEventListener('submit', function() {
  //   event.preventDefault();
  //   let todoValue = event.target.todo.value;
  //   let newE1 = document.createElement('li');
  //   newE1.innerText = todoValue;
  //   let list = document.getElementById('list');
  //   list.appendChild(newE1);
  //   event.target.todo.value = "";
  // });
  // log(todoForm);
  }
