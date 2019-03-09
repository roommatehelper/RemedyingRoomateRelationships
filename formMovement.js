$(document).ready(function () {
    var current, next, prev;

    $(".forward").click(function () {
            current = $(this).parent();
            next = $(this).parent().next();
            var valid = true;

            //if all fields are valid, continue, else error
            var fields = current.find("input");
            var checklist = false;
            var checked = false;

            for (var i = 0; i < fields.length; i++) {
              var input = fields[i];
              if((input.type !== "button") && (input.type !== "checkbox") && input.id !== "choreDay") {
                if(!input.checkValidity()) {
                  valid = false;
                  input.classList.add("error");
                }
                else
                  input.classList.remove("error");
            }

            else if(input.type === "checkbox") {
              checklist = true;
              if(input.checked)
                  checked = true;
            }

            else if(input.id === "choreDay"){
              var days = document.getElementsByClassName("searchList");
              var found = false;
              for(var i = 0; i < days.length; i++) {
                if(input.value === days[i].innerText) {
                  found = true;
                }
              }
              if(!found) {
                valid = false;
                input.classList.add("error");
              }
              else {
                input.classList.remove("error");
              }
            }
          }

          if(checklist) {
            var listError = document.getElementById("listError");
            if(!checked) {
              valid = false;
              if(!listError) {
                listError = document.createElement("p");
                listError.setAttribute("id", "listError");
                listError.classList = "subtitle error";
                listError.innerHTML = "Please select at least one name.";
                $("#checklistTitle").after(listError);
              }
            }
            else if(listError){
              listError.parentNode.removeChild(listError);
            }
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

//sign in/up functions
function signIn(form) {
  var signInEls = document.getElementsByClassName("signInInput");
  if(signInEls[0].value.toLowerCase() == "daniella@gmail.com")
    form.action = "dashboard2.html";
  else {
    form.action = "dashboard.html"
  }
}

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
    }
}

function changeWindow() {
  window.location = "dashboard.html";
}

//for rules/chores/payments
$(document).on('click', function(e){
  var el = e.target;
  if(el.tagName === "BUTTON"){
    el.classList.toggle("active");
    var content = el.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }

  }
})
