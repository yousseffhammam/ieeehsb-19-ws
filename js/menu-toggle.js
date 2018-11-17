let menu_button = document.getElementById('menu-toggle'),
    dash_menu_button = document.getElementById('dash-menu-toggle'),
    aside = document.querySelector('aside'),
    virtical_Menu = document.getElementById('virtical_menu');

dash_menu_button.addEventListener('click', function () {
    if (aside.style.display == "none") {
        aside.style.display = "block";
    } else {
        aside.style.display = "none";
    }
});

menu_button.addEventListener('click', function () {
    if (virtical_Menu.style.display == "none") {
        virtical_Menu.style.display = "block";
    } else {
        virtical_Menu.style.display = "none";
    }
});



$(window).scroll(function () {
    var scrollPos = $(window).scrollTop();

    if (scrollPos > 100) {
        $('header').addClass('sticky');
    } else {
        $('header').removeClass('sticky');
    }
});