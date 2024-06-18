$(document).ready(function() {
    $('.post-box.recent').hide();

    $('.filter-item').click(function() {
        const value = $(this).attr('data-filter');
        if (value == 'upcoming' || value == 'recent') {
            $('.post-box').hide('1000');
            $('.post-box.' + value).show('1000');
            $(this).addClass('active-filter').siblings().removeClass('active-filter');
        }
    });
});


    var modal = document.getElementById("myModal");

    var btn = document.getElementById("openModalBtn1");

    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    var modal = document.getElementById("myModal");

    var btn = document.getElementById("openModalBtn2");

    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    var modal = document.getElementById("myModal");

    var btn = document.getElementById("openModalBtn3");

    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    var modal = document.getElementById("myModal");

    var btn = document.getElementById("openModalBtn4");

    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }