$(document).ready(function(){
  $("#remindButton").click(function(){
    document.cookie = "rules=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "rules=No people over the night before a midterm!;path=/";
    alert("A reminder was sent!");
  });
});

$(document).ready(function(){
  $("#remindButton2").click(function(){
    document.cookie = "rules=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "rules=Quiet on weekdays!;path=/";
    alert("A reminder was sent!");
  });
});

$(document).ready(function(){
  $("#remindButton3").click(function(){
    document.cookie = "chores=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "chores=Take out trash - TK;path=/";
    alert("A reminder was sent!");
  });
});

$(document).ready(function(){
  $("#remindButton4").click(function(){
    document.cookie = "chores=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "chores=Take out trash - Rabin;path=/";
    alert("A reminder was sent!");
  });
});

$(document).ready(function(){
  $("#remindButton5").click(function(){
    document.cookie = "pay=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "pay=Pay for blender - Purchased by TK;path=/";
    alert("A reminder was sent!");
  });
});

$(document).ready(function(){
  $("#remindButton6").click(function(){
    document.cookie = "pay=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "pay=Pay for table - Purcahsed by Daniella;path=/";
    alert("A reminder was sent!");
  });
});
