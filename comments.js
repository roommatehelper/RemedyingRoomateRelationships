$(window).on("load", function(){
    $("#hcb_form_content").on('focus', function() {

    var title = document.getElementById("hcb_form_name");
    var user = document.getElementById("profile");
    if(title) {
        title.value = user.innerHTML;
    }
    });
});
