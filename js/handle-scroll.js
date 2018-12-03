$(document).ready(function () {
    $("#about").click(function () {
        $(".about-section")[0].scrollIntoView({behavior: "smooth"});
        return false;
    });

    $("#resume").click(function() {
        scroll(".resume-section");
    });

    $("#contact").click(function() {
        scroll(".contact-section");
    });
});

function scroll(selector) {
    $(selector)[0].scrollIntoView({behavior: "smooth"});
}