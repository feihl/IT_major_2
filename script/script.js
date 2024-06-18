var exlinks = document.getElementsByClassName("ex-links")
var contents = document.getElementsByClassName("contents")

function opentab(tabname) {
    for(exlink of exlinks){
        exlink.classList.remove("act-link");
    }
    for(content of contents){
        content.classList.remove("act-tab");
    }
    event.currentTarget.classList.add("act-link");
    document.getElementById(tabname).classList.add("act-tab");
}

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 3000);
}

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-links li");

    navLinks.forEach(function(navLink) {
        navLink.addEventListener("click", function() {
            navLinks.forEach(function(link) {
                link.classList.remove("active");
            });
            this.classList.add("active");
        });
    });
});
