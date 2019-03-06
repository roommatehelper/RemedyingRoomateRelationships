$(function(){
    var x = getCookieValue("rules");
    var y = getCookieValue("chores")
    var z = getCookieValue("pay")
    
    $("#ruleSum").text(x);
    $("#choreSum").text(y);
    $("#paySum").text(z);
});


function getCookieValue(a) {
    var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
}
