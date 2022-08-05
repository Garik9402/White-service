// настройки слайдера
$(document).ready(function() {
    $(".specialists__slider").slick({
        arrows: true,
        dots: true,
        slidesToShow: 4,
        speed: 1000,
        autoplay: true,
        slidesToScroll: 4,
        responsive: [{
                breakpoint: 1367,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});
// открытие и заркытие мобильного меню
const burgerNode = document.querySelector(".header__burger");
const dropdownMenuNode = document.querySelector(".m-menu");
const contentNode = document.querySelector(".wrapper-content");
const closeMenuNode = document.querySelector(".m-menu__icon-close");
burgerNode.addEventListener("click", function() {
    dropdownMenuNode.classList.add("m-menu--js-dropdown");
    contentNode.classList.add("wrapper-content--js-close");
});

closeMenuNode.addEventListener("click", function() {
    dropdownMenuNode.classList.remove("m-menu--js-dropdown");
    contentNode.classList.remove("wrapper-content--js-close");
});