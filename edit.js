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

}

function addPayment() {
  var elements = document.getElementById("newPaymentForm").elements;
  var obj ={};
  for(var i = 0 ; i < elements.length ; i++){
      var item = elements.item(i);
      obj[item.name] = item.value;
  }

  var line = document.createElement("div");
  line.className += "line";
  var payment = document.createElement("button");
  payment.className += "ruleTitle";
  payment.type = "button";
  payment.innerHTML += obj["description"] + " - Purchased by You";
  line.appendChild(payment);

  var etc = document.createElement("div");
  etc.className += "ruleDescription";
  var desc = document.createElement("p");
  var details = document.createElement("p");

  var cost = parseFloat(obj["cost"]);
  desc.innerHTML += "$" + String(cost) + "<br><br>"

  var list = [];
  var inputElements = document.getElementsByClassName("checklist");
  for(var i=0; inputElements[i]; i++){
        if(inputElements[i].checked)
             list.push(inputElements[i].value);
  }

  for(var i = 0; i < list.length; i++){
    desc.innerHTML += list[i] + " ";
    if(i == list.length - 2){
      desc.innerHTML += ", and ";
    }
    else if(i != list.length - 1) {
      desc.innerHTML += ", ";
    }
  }

  var split = cost / (list.length + 1);
  desc.innerHTML += "owe you $" + String(split.toFixed(2));

  etc.appendChild(desc);
  if(obj["details"] != "") {
    details.innerHTML += "Details: " + obj["details"];
    etc.appendChild(details);
  }

  line.appendChild(etc);

  payment.setAttribute("onclick","toggleDropdown(this)");

  add(line);
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
