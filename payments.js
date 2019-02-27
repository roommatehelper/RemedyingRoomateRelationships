var acc = "a";

window.addEventListener('DOMContentLoaded',
  restorePayments()
);

function restorePayments() {
  var payments = JSON.parse(localStorage.getItem("payments"));

  if(payments){
    for(var i = 1; i < payments.length; i+= 2){
      add($.parseHTML(payments[i])[0]);
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
  document.getElementById("newPaymentForm").reset();
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
  var del = document.createElement("input");
    del.setAttribute("type", "button");
    del.setAttribute("class", "descButton complete");
    del.setAttribute("value", "Complete");
    del.setAttribute("onclick", "deletePayment(this)");
  var remind = document.createElement("input");
    remind.setAttribute("type", "button");
    remind.setAttribute("class", "descButton remind");
    remind.setAttribute("value", "Remind");
    remind.setAttribute("onclick", "sendRuleReminder()");

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

  etc.appendChild(del);
  etc.appendChild(remind);

  line.appendChild(etc);

  payment.setAttribute("onclick","toggleDropdown(this)");

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

function toggleDropdown(el) {
  el.classList.toggle("active");
    var content = el.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
}

function sendPaymentReminder() {

}

function deletePayment(el) {
  var payments = JSON.parse(localStorage.getItem("payments"));
  var title = el.parentNode.previousSibling.innerHTML;
  var index = payments.indexOf(title);
  payments.splice(index, 2);
  localStorage.setItem("payments", JSON.stringify(payments));

  el.parentNode.parentNode.parentNode.removeChild(el.parentNode.parentNode);
}

//REMINDERS
function sendPaymentReminder(){

  //send payment title and amt owed to other user's dashboard

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
