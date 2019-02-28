$(document).ready(function(){
  $("#remindButton").click(function(){
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "username=No people over the night before a midterm!;path=/";
    alert("A reminder was sent!");
  });
});

$(document).ready(function(){
  $("#remindButton2").click(function(){
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "username=Quiet on weekdays!;path=/";
    alert("A reminder was sent!");
  });
});
