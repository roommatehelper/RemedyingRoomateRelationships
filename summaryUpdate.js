
$(document).ready(function(){
    $.get( "ruleSum.txt", function( txt ) {
        $( "#ruleSum" ).text( txt );
      });
});




