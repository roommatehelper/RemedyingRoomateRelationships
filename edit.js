$(document).ready(function(){
  $("#remindButton").click(function() {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "username=No people over the night before a midterm!;path=/";
  });
});

$(document).ready(function(){
  $("#remindButton2").click(function() {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "username=Quiet on weekdays!;path=/";
  });
});

$(document).ready(function(){
  $("#remindButton3").click(function() {
    document.cookie = "chore=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "chore=Clean the kitchen - Rabin;path=/";
  });
});

$(document).ready(function(){
  $("#remindButton4").click(function() {
    document.cookie = "pay=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "pay=Pay TK for blender;path=/";
  });
});
