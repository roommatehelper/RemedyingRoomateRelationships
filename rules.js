var acc = "a";

window.addEventListener('DOMContentLoaded',
  restoreRules()
);

function restoreRules() {
  var rules = JSON.parse(localStorage.getItem("rules"));

  if(rules) {
    for(var i = 1; i < rules.length; i+= 2){
      add($.parseHTML(rules[i])[0]);
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
  document.getElementById("newRuleForm").reset();
}

function addRule() {
    var elements = document.getElementById("newRuleForm").elements;
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
    rule.innerHTML += obj["description"];
    line.appendChild(rule);

    var etc = document.createElement("div");
    etc.className += "ruleDescription";
    var details = document.createElement("p");
    var del = document.createElement("input");
      del.setAttribute("type", "button");
      del.setAttribute("class", "descButton delete");
      del.setAttribute("value", "Delete");
      del.setAttribute("onclick", "deleteRule(this)");
    var remind = document.createElement("input");
      remind.setAttribute("type", "button");
      remind.setAttribute("class", "descButton remind");
      remind.setAttribute("value", "Remind");

    if(obj["details"] != "") {
      details.innerHTML += "Details: " + obj["details"];
      etc.appendChild(details);
    }

    etc.appendChild(del);
    etc.appendChild(remind);

    line.appendChild(etc);

    rule.setAttribute("onclick","toggleDropdown(this)");

    add(line);

    var rules = JSON.parse(localStorage.getItem('rules'));

    if(rules) {
      rules.push(obj["description"], line.outerHTML.toString());
      localStorage.setItem('rules', JSON.stringify(rules));
    }
    else{
      rules = [obj["description"], line.outerHTML.toString()];
      localStorage.setItem('rules', JSON.stringify(rules));
    }
}

function add(el) {
  var list = document.getElementsByClassName("list");
  list[0].appendChild(el);

  window.location.hash = "#";

  closeModal();
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

function deleteRule(el) {
  var rules = JSON.parse(localStorage.getItem("rules"));
  var title = el.parentNode.previousSibling.innerHTML;
  var index = rules.indexOf(title);
  rules.splice(index, 2);
  localStorage.setItem('rules', JSON.stringify(rules));

  el.parentNode.parentNode.parentNode.removeChild(el.parentNode.parentNode);
}
