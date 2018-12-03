$(document).ready(function () {
    $("#about").click(function () {
        scroll(".about-section");
    });

    $("#resume").click(function() {
        scroll(".resume-section");
    });

    $("#contact").click(function() {
        scroll(".contact-section")
    });
});

function scroll(selector) {
    $(selector)[0].scrollIntoView({behavior: "smooth"});
}