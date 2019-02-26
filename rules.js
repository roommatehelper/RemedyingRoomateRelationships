var acc = "a";

window.addEventListener('DOMContentLoaded',
  restoreRules()
);

function restoreRules() {
  var rules = JSON.parse(localStorage.getItem("rules"));

  if(rules){
    for(var i = 1; i < rules.length; i+= 2){
      add($.parseHTML(rules[i])[0]);
    }
  }
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
    var desc = document.createElement("p");
    var details = document.createElement("p");

    desc.innerHTML += obj["date1"] + " to " + obj["date2"] + "<br><br>";

    var list = [];
    var inputElements = document.getElementsByClassName("checklist");
    for(var i=0; inputElements[i]; i++){
          if(inputElements[i].checked)
               list.push(inputElements[i].value);
    }

    for(var i = 0; i < list.length; i++){
      desc.innerHTML += list[i];
      if(i != list.length - 1) {
        desc.innerHTML += ", ";
      }
    }

    etc.appendChild(desc);
    if(obj["details"] != "") {
      details.innerHTML += "Details: " + obj["details"];
      etc.appendChild(details);
    }

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

  var start = document.getElementById("start");
  start.style.display = "block";
  var end = document.getElementById("end");
  end.style.display = "none";
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
