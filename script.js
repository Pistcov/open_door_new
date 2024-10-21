$(document).ready(function() {
    $("#hi").click(function() {
        $(this).addClass("hidden");
        $(".layer").addClass("clicked");
    });

    $("#remove").click(function() {
        $(".layer").removeClass("clicked");
        $("#hi").removeClass("hidden");
    });
});
