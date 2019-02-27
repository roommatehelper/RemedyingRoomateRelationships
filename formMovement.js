$(document).ready(function () {
    var current, next, prev;

    $(".forward").click(function () {
        current = $(this).parent();
        next = $(this).parent().next();
        var valid = true;

        //if all fields are valid, continue, else error
        var fields = current.children();
        for (var i = 0; i < fields.length; i++) {
          if(fields[i].localName == "input" && fields[i].type != "button")
            if(!fields[i].checkValidity()) {
              valid = false;
              fields[i].classList.add("error");
            }
            else
              fields[i].classList.remove("error");
        }
        if(valid) {
          next.show();
          current.hide();
        }
    });

    $(".previous").click(function () {
        current = $(this).parent();
        prev = $(this).parent().prev();
        prev.show();
        current.hide();
    });
});

function checkPassword() {
    var password = document.getElementById("p1");
    var secondPassword = document.getElementById("p2");
    var error = document.getElementById("errormsg");
    if (password.value != secondPassword.value) {
      secondPassword.setCustomValidity('Passwords do not match');
      if(!error) {
        error = document.createElement("p");
        error.innerHTML = "passwords do not match";
        error.setAttribute("id", "errormsg");
        password.parentNode.appendChild(error);
      }
    }
    else {
      secondPassword.setCustomValidity('');
      error.parentNode.removeChild(error);
    }
}

function signIn(form) {
  form.action = "dashboard.html";
}

function restoreRules() {
  var rules = JSON.parse(localStorage.getItem("rules"));

  if(rules){
    for(var i = 1; i < rules.length; i+= 2){
      add($.parseHTML(rules[i])[0]);
    }
  }
}
