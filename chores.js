var acc = document.getElementById("profile");

window.addEventListener('DOMContentLoaded',
  restoreChores()
);

function restoreChores() {
  var chores = JSON.parse(localStorage.getItem("chores"));

  if(chores){
    for(var i = 1; i < chores.length; i+= 2){
      var chore = $.parseHTML(chores[i])[0];
      add(chore);
      var responsible = false;

      var elements = chore.getElementsByClassName("roommate");
      var button = chore.getElementsByClassName("descButton")[0];

      for(var j = 0; j < elements.length; j++) {
        if (!responsible && elements[j].innerHTML == acc.innerHTML) {
          responsible = true;
          button.setAttribute("class", "descButton done");
          button.setAttribute("value", "Done");
          button.setAttribute("onclick", "deleteChore(this)");
        }
      }

      if(!responsible) {
        button.setAttribute("class", "descButton remind");
        button.setAttribute("value", "Remind");
        button.setAttribute("onclick", "sendChoreReminder()");
      }
    }
  }
}

function openModal() {
  document.getElementsByClassName("modal")[0].style.display = "block";
}

function closeModal() {
  var start = document.getElementById("start");
  start.style.display = "block";
  var end = document.getElementsByClassName("end");
  for(var i = 0; i < end.length; i++)
    end[i].style.display = "none";

  document.getElementsByClassName("modal")[0].style.display = "none";
  document.getElementById("newItemForm").reset();
}

function addChore() {
    var elements = document.getElementById("newItemForm").elements;
    var obj ={};
    for(var i = 0 ; i < elements.length ; i++){
        var item = elements.item(i);
        obj[item.name] = item.value;
    }

    var line = document.createElement("div");
    line.className += "line";
    var chore = document.createElement("button");
    chore.className += "ruleTitle";
    chore.type = "button";
    chore.innerHTML += obj["description"];
    var list = [];
    var inputElements = document.getElementsByClassName("checklist");
    for(var i=0; inputElements[i]; i++){
          if(inputElements[i].checked)
               list.push(inputElements[i].value);
    }

    var roommate = document.createElement("span");
    roommate.innerHTML = " - ";

    for(var i = 0; i < list.length; i++){
      roommate.classList="roommate";
      roommate.innerHTML += list[i]
      chore.appendChild(roommate);
      if(i != list.length - 1) {
        roommate.innerHTML += ", ";
      }
    }

    line.appendChild(chore);

    var del = document.createElement("input");
      del.setAttribute("type", "button");
      del.setAttribute("class", "delete");
      del.setAttribute("value", "Delete");
      del.setAttribute("onclick", "deleteFunction(this)");

    var etc = document.createElement("div");
    etc.className += "ruleDescription";
    var desc = document.createElement("p");
    var details = document.createElement("p");

    desc.innerHTML += obj["day"];
    etc.appendChild(desc);

    if(obj["details"] != "") {
      details.innerHTML += "Details: " + obj["details"];
      etc.appendChild(details);
    }

    var remind = document.createElement("input");
    remind.setAttribute("type", "button");
    var responsible = list.indexOf(acc.innerHTML);
    if(responsible == -1) {
      remind.setAttribute("class", "descButton remind");
      remind.setAttribute("value", "Remind");
    }
    else {
      remind.setAttribute("class", "descButton done");
      remind.setAttribute("value", "Done");
      remind.setAttribute("onclick", "deleteChore(this)");
    }


    chore.appendChild(remind);
    etc.appendChild(del);
    line.appendChild(etc);

    chore.setAttribute("onclick","toggleDropdown(this)");

    add(line);

    var chores = JSON.parse(localStorage.getItem('chores'));

    if(chores) {
      chores.push(obj["description"], line.outerHTML.toString());
      localStorage.setItem('chores', JSON.stringify(chores));
    }
    else{
      chores = [obj["description"], line.outerHTML.toString()];
      localStorage.setItem('chores', JSON.stringify(chores));
    }
}

function add(el) {
  var list = document.getElementsByClassName("list");
  list[0].appendChild(el);

  window.location.hash = "#";

  closeModal();
}

function deleteFunction(el) {
  var del = window.confirm("Are you sure you want to delete this chore? This cannot be undone.");
  if(del)
    button = el.parentNode.parentNode.getElementsByClassName("remind");
    deleteChore(button[0]);
}

function deleteChore(el) {
  var chores = JSON.parse(localStorage.getItem("chores"));
  if(chores){
    var title = el.previousSibling.previousSibling.wholeText;
    var index = chores.indexOf(title);
    if(index != -1)
      chores.splice(index, 2);

    localStorage.setItem('chores', JSON.stringify(chores));
  }

  el.parentNode.parentNode.parentNode.removeChild(el.parentNode.parentNode);
}

//show dropdown to select Chore day
function show() {
  document.getElementById("myDropdown").style.display="block";
}

//filter for day selection
function filterFunction() {
  var input, filter, ul, li, a, i, p;
  input = document.getElementById("choreDay");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  list = div.getElementsByClassName("searchList");
  for (i = 0; i < list.length; i++) {
    txtValue = list[i].textContent || list[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      list[i].style.display = "";
    } else {
      list[i].style.display = "none";
    }
  }
}

//set value on click
function clickday(el) {
  input = document.getElementById("choreDay");
  input.value = el.innerHTML;
  div = document.getElementById("myDropdown");
  div.style.display = "none";
}
