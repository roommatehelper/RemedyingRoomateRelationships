var acc = document.getElementById("profile");

window.addEventListener('DOMContentLoaded',
  restorePayments()
);

function restorePayments() {
  var payments = JSON.parse(localStorage.getItem("payments"));

  if(payments) {
    for(var i = 1; i < payments.length; i+= 2){
      var payment = $.parseHTML(payments[i])[0];
      add(payment);

      var user = payment.getElementsByClassName("user");
      //remove buttons and change text if not logged in as person who made payment
      if(user[0].innerHTML != acc.innerHTML) {

        var desc = payment.getElementsByClassName("payees");
          desc[0].innerHTML = "You owe " + user[0].innerHTML + " $";

        var buttons = payment.getElementsByClassName("descButton");
          for(var i = 0; i < buttons.length; i++) {
            buttons[i].style.display = "none";
          }
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

function addPayment() {
  var elements = document.getElementById("newItemForm").elements;
  var obj ={};
  for(var i = 0 ; i < elements.length ; i++){
      var item = elements.item(i);
      obj[item.name] = item.value;
  }

  var line = document.createElement("div");
  line.className += "line";
  var payment = document.createElement("button");
  var title = document.createElement("span");
  title.className = "title"
  title.innerHTML = obj["description"];
  var user = document.createElement("span");
  user.className = "user"
  user.innerHTML = acc.innerHTML;
  payment.className += "lineTitle";
  payment.type = "button";
  payment.appendChild(title);
  payment.innerHTML += " - Purchased by ";
  payment.appendChild(user);

  var etc = document.createElement("div");
  etc.className += "lineDescription";
  var price = document.createElement("p");
  var desc = document.createElement("span");
  desc.className = "payees";
  var details = document.createElement("p");
  var complete = document.createElement("input");
    complete.setAttribute("type", "button");
    complete.setAttribute("class", "descButton complete");
    complete.setAttribute("value", "Complete");
    complete.setAttribute("onclick", "deletePayment(this)");
  var remind = document.createElement("input");
    remind.setAttribute("type", "button");
    remind.setAttribute("class", "descButton remind");
    remind.setAttribute("value", "Remind");
  var del = document.createElement("input");
    del.setAttribute("type", "button");
    del.setAttribute("class", "delete");
    del.setAttribute("value", "Delete");
    del.setAttribute("onclick", "deleteFunction(this)");

  var cost = parseFloat(obj["cost"]);
  price.innerHTML = "$" + String(cost) + "<br><br>";

  var list = [];
  var inputElements = document.getElementsByClassName("checklist");
  for(var i=0; inputElements[i]; i++){
        if(inputElements[i].checked)
             list.push(inputElements[i].value);
  }

  for(var i = 0; i < list.length; i++){
    desc.innerHTML += list[i];
    if(i == list.length - 2){
      desc.innerHTML += " and ";
    }
    else if(i != list.length - 1) {
      desc.innerHTML += ", ";
    }
  }
  if(list.length == 1){desc.innerHTML += " owes you $";}
  else{desc.innerHTML += " owe you $";}
  price.appendChild(desc);

  var split = cost / (list.length + 1);
  price.innerHTML += String(split.toFixed(2));

  etc.appendChild(price);
  if(obj["details"] != "") {
    details.innerHTML += "Details: " + obj["details"];
    etc.appendChild(details);
  }

  etc.appendChild(del);

  payment.appendChild(remind);
  payment.appendChild(complete);
  line.appendChild(payment);
  line.appendChild(etc);

  add(line);

  var payments = JSON.parse(localStorage.getItem('payments'));

  if (payments) {
    payments.push(obj["description"], line.outerHTML.toString());
    localStorage.setItem('payments', JSON.stringify(payments));
  }
  else{
    payments = [obj["description"], line.outerHTML.toString()];
    localStorage.setItem('payments', JSON.stringify(payments));
  }
}

function add(el) {
  var list = document.getElementsByClassName("list");
  list[0].appendChild(el);

  window.location.hash = "#";

  closeModal();
}

function deleteFunction(el) {
  var del = window.confirm("Are you sure you want to delete this payment? This cannot be undone.");
  if(del)
    deletePayment(el);
}

function deletePayment(el) {
  var payments = JSON.parse(localStorage.getItem("payments"));
  if(payments) {
    var title = el.parentNode.parentNode.getElementsByClassName("title")[0];
    var index = payments.indexOf(title.innerHTML);
    if(index != -1)
      payments.splice(index, 2);
    localStorage.setItem("payments", JSON.stringify(payments));
  }

  el.parentNode.parentNode.parentNode.removeChild(el.parentNode.parentNode);
}
