function addMember() {
  var elements = document.getElementById("newMemberForm").elements;
  var obj ={};
  for(var i = 0 ; i < elements.length ; i++){
      var item = elements.item(i);
      obj[item.name] = item.value;
  }
  var line = document.createElement("div");
  line.className += "line";
  var rule = document.createElement("button");
  rule.className += "ruleTitle";
  rule.type = "button";
  rule.innerHTML += obj["membername"];
  line.appendChild(rule);
  var etc = document.createElement("div");
  etc.className += "ruleDescription";
  var desc = document.createElement("p");
  var details = document.createElement("p");
  var del = document.createElement("input");
    del.setAttribute("type", "button");
    del.setAttribute("class", "descButton delete");
    del.setAttribute("value", "Uninvite");
    del.setAttribute("onclick", "removeMember(this)");
  details.innerHTML += "Invite Pending";
  etc.appendChild(details);
  etc.append(del);

  line.appendChild(etc);

  rule.setAttribute("onclick","toggleDropdown(this)");

  add(line);

}

function removeMember(el) {
  el.parentNode.parentNode.parentNode.removeChild(el.parentNode.parentNode);
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
  document.getElementById("newMemberForm").reset();
}
