function addRule() {

    var line = document.createElement("div");
    line.className += "line";
    var rule = document.createElement("button");
    rule.className += "ruleTitle";
    rule.type = "button";
    line.appendChild(rule);
    var details = document.createElement("div");
    details.className += "ruleDescription";
    var date1 = document.createElement("p");
    var date2 = document.createElement("p");
    var roommates = document.createElement("p");
    details.appendChild(date1);
    details.appendChild(date2);
    details.appendChild(roommates);
    line.appendChild(details);

    var elements = document.getElementById("newRuleForm").elements;
    var obj ={};
    for(var i = 0 ; i < elements.length ; i++){
        var item = elements.item(i);
        obj[item.name] = item.value;
    }

    rule.innerHTML += obj["description"];
    date1.innerHTML += obj["date1"];
    date2.innerHTML += obj["date2"];
    roommates.innerHTML = obj["TK"] + ", " + obj["David"] + ", " +
                          obj ["Rabin"] + ", " + obj["Daniella"];


    var list = document.getElementsByClassName("rules");
    list[0].appendChild(line);

    rule.setAttribute("onclick","toggleDropdown(this)");

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
