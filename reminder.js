$(document).ready(function(){
  $(".buttonToRemind").click(function(){
    document.cookie = "username=John Doe;path=/";
    alert("A reminder was sent!");
  });
});
