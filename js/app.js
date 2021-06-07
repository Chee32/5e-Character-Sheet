function openPage(pageName) {
    var i;
    var x = document.getElementsByClassName("page");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(pageName).style.display = "";
}

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

$(document).ready(function() {
    $(".expando").click(function() {
        $(this).next().slideToggle();
    });
});

$(document).ready(function() {
    $("#scroll-to-top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });
});