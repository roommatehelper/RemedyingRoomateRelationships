$(window).on('load', function() {
 var title = document.getElementById("hcb_form_name");
 var user = document.getElementById("profile");
 if(title) {
   title.value = user.innerHTML;
   title.setAttribute('readonly', true);
 }
});
