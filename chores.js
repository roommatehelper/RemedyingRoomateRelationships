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
  document.getElementById("newChoreForm").reset();
}

function addChore() {
    var elements = document.getElementById("newChoreForm").elements;
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
    chore.innerHTML += obj["description"] + " - ";
    var list = [];
    var inputElements = document.getElementsByClassName("checklist");
    for(var i=0; inputElements[i]; i++){
          if(inputElements[i].checked)
               list.push(inputElements[i].value);
    }

    for(var i = 0; i < list.length; i++){
      var roommate = document.createElement("span");
      roommate.classList="roommate";
      roommate.innerHTML = list[i]
      chore.appendChild(roommate);
      if(i != list.length - 1) {
        chore.innerHTML += ", ";
      }
    }
    line.appendChild(chore);

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
      remind.setAttribute("onclick", "sendChoreReminder()");
    }
    else {
      remind.setAttribute("class", "descButton done");
      remind.setAttribute("value", "Done");
      remind.setAttribute("onclick", "deleteChore(this)");
    }


    etc.appendChild(remind);

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

function toggleDropdown(el) {
  el.classList.toggle("active");
    var content = el.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
}

function tempAlert(msg,duration)
{
 var el = document.createElement("div");
 el.setAttribute("style","position:absolute;top:40%;left:20%;background-color:white;");
 el.innerHTML = msg;
 setTimeout(function(){
  el.parentNode.removeChild(el);
 },duration);
 document.body.appendChild(el);
}

function deleteChore(el) {
  var chores = JSON.parse(localStorage.getItem("chores"));
  var title = el.parentNode.previousSibling.innerHTML;
  var index = chores.indexOf(title);
  chores.splice(index, 2);
  localStorage.setItem('chores', JSON.stringify(chores));

  el.parentNode.parentNode.parentNode.removeChild(el.parentNode.parentNode);
}

//REMINDERS
function sendChoreReminder(){

  //send chore to other user's dashboard

  $('.reminderSent').css('display', 'block');

  //close popup after 5 seconds
  setTimeout(function(){
    $('.reminderSent').css('animation', 'none');
		$('.reminderSent').css('display', 'none');
  }, 5000)
}

//close popup when x is clicked
$('.closeAlert').click(function(){
    setTimeout(function(){
      $('.reminderSent').css('animation', 'none');
		  $('.reminderSent').css('display', 'none');
    }, 100);
});

function show() {
  document.getElementById("myDropdown").style.display="block";
}

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

function clickday(el) {
  input = document.getElementById("choreDay");
  input.value = el.innerHTML;
  div = document.getElementById("myDropdown");
  div.style.display = "none";
}
