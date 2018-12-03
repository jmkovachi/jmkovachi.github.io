$(document).ready(function () {
    $("#about").click(function () {
        scroll(".about-section");
        return false;
    });

    $("#resume").click(function() {
        scroll(".resume-section");
        return false;
    });

    $("#contact").click(function() {
        scroll(".contact-section");
        return false;
    });

    $("#top").click(function() {
        scroll(".main-nav");
        return false;
    });
});

function scroll(selector) {
    $(selector)[0].scrollIntoView({behavior: "smooth"});
}