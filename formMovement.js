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

    $("#submission").click(function () {
      return false;
    })
});

function signIn() {
  var input = document.getElementsByClassName("signInInput");
  var valid = true;
  for (var i = 0; i < input.length; i++){
    if(!input[i].checkValidity()){
      valid = false;
      input[i].classList.add("error");
    }
    else {
      input[i].classList.remove("error");
    }
  }
  if(valid)
    changeWindow();
}

function changeWindow() {
    window.location="dashboard.html";
}

function checkPassword(p1, p2) {
    var secondPassword = document.getElementById("p2");
    if (p1.value != p2.value) {
        secondPassword.setCustomValidity('Passwords do not match');
    } else {
        secondPassword.setCustomValidity('');
    }
}
