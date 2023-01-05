function addTask() {
  var input = document.getElementById("input");
  // get current text from input field
  var newTask = input.value;
  // only add new item to list if some text was entered
  if (newTask != "") {
    // create new HTML list item
    var item = document.createElement("li");
    // add HTML for buttons and new task text
    // Note, need to use '' because of "" in HTML
    item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)" value="&#x2713;" /> ' +
      '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' +
      '<input type="button" class="importantB" value="!" onclick=important(this.parentNode)>' + newTask;
    // add new item as part of existing list
    document.getElementById("tasks").appendChild(item);

    /* Step 4 below here */
    input.value = "";

  }
}



// change styling used for given item
function markDone(item) {
  if (item.className !== 'finished') {
    item.className = 'finished';
  }
  else {
    item.className = '';
  }
}

/* Step 7 below here */
function remove(item) {
  console.log(item.className);
  // remove item completely from document
  if (item.className !== 'finished') {
    window.alert('to remove an item it has to be checked!');
  }
  else {
    item.remove();
  }
}

/* Step 11 below here */
function doAbout() {
  var div = document.getElementById('divabout');
  div.className = 'aboutcolor';
  div.innerHTML = ('This todolist is created by ABDELAZIZ JAIL');


}

/* Step 14 below here */
function clearAbout() {
  var div = document.getElementById('divabout');
  div.innerHTML = '';
}
const important = (item) => {
  if (item.className == 'finished') {
    window.alert('This item is already done');
  } else {

    if (item.className != 'important') {
      item.className = 'important';
      console.log('check');
    }
    else {
      item.className = '';
    }
  }

}
const addP = () => {
  var player1 = document.getElementById("player1");
  var player2 = document.getElementById("player2");
  var input = document.getElementById("input1");
  var point = input.value;
  var resultat1 = 0;
  var resultat2 = 0;
  if (point == "n") {
    resultat1++;
    player1.innerHTML = resultat1;
    console.log(resultat1);
  }
  if (point == "x") {
    resultat2++;
    player2.innerHTML = resultat2;
    console.log(resultat2);
  }


}