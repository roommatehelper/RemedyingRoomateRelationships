

$(function(){
    var x = document.cookie;
    $("#ruleSum").text(x);
});


function getCookieValue(a) {
    var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
}




