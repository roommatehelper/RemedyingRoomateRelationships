$(document).ready(function () {
    var current, next, prev;
    $("#begin").click(function () {
        current = $(this).parent();
        next = $(this).parent().next();
        next.show();
        current.hide();
    });

    $("#next").click(function () {
        current = $(this).parent();
        next = $(this).parent().next();
        next.show();
        current.hide();
    });

    $("#nextMiddle").click(function () {
        current = $(this).parent();
        next = $(this).parent().next();
        next.show();
        current.hide();
    });

    $("#previous").click(function () {
        current = $(this).parent();
        prev = $(this).parent().prev();
        prev.show();
        current.hide();
    });

    $("#previousLast").click(function () {
        current = $(this).parent();
        prev = $(this).parent().prev();
        prev.show();
        current.hide();
    });

    $("#submission").click(function () {
        return false;
    })
});
function changeWindow() {
    window.location="dashboard.html";
}
function changeWindowRules() {
    window.location = "rules.html";
}
