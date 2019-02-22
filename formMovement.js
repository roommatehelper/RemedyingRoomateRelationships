$(document).ready(function () {
    var current, next, prev;
    $("#begin").click(function () {
        current = $(this).parent();
        next = $(this).parent().next();
        next.show();
        current.hide();
    });

    $("#next").click(function () {
        current = $(this).parent();
        next = $(this).parent().next();
        next.show();
        current.hide();
    });

    $("#nextMiddle").click(function () {
        current = $(this).parent();
        next = $(this).parent().next();
        next.show();
        current.hide();
    });

    $("#previous").click(function () {
        current = $(this).parent();
        prev = $(this).parent().prev();
        prev.show();
        current.hide();
    });

    $("#previousLast").click(function () {
        current = $(this).parent();
        prev = $(this).parent().prev();
        prev.show();
        current.hide();
    });

    $("#submission").click(function () {
      return false;
    })
});

function changeWindow() {
    window.location="dashboard.html";
}
function changeWindowRules() {

    window.location.hash = "#";

    var line = document.createElement("div");
    line.className += "line";
    var rule = document.createElement("button");
    rule.className += "ruleTitle";
    rule.type = "button";
    line.appendChild(rule);
    var desc = document.createElement("div");
    desc.className += "ruleDescription";
    line.appendChild(desc);

    var elements = document.getElementById("newRuleForm").elements;
    var obj ={};
    for(var i = 0 ; i < elements.length ; i++){
        var item = elements.item(i);
        obj[item.name] = item.value;
    }

    var node = obj["description"];

    rule.innerHTML += node;

    var list = document.getElementsByClassName("rules");
    list[0].appendChild(line);

    var start = document.getElementById("start");
    start.style.display = "block";
    var end = document.getElementById("end");
    end.style.display = "none";
}

function checkPassword(p1, p2) {
    var secondPassword = document.getElementById("p2");
    if (p1.value != p2.value) {
        secondPassword.setCustomValidity('Passwords do not match');
    } else {
        secondPassword.setCustomValidity('');
    }
}


var coll = document.getElementsByClassName("ruleTitle");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
