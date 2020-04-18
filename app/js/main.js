$(function () {

    $(".slider__resume").slick({
        appendArrows: $(".featured__button"),

        prevArrow: '<button class="slick-arrow slick-prev"> <img src="images/slider_resume/chevron-left.svg" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"> <img src="images/slider_resume/chevron-right.svg" alt=""></button>',

    });



    $(".slider__bottom").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        appendArrows: $(".followers__feed-button"),

        prevArrow: '<button class="slick-arrow slick-prev"> <img src="images/slider_resume/chevron-left.svg" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"> <img src="images/slider_resume/chevron-right.svg" alt=""></button>',

    });


    // рейтинг
    $(".rate-star").rateYo({

        rating: 4.5,
        starWidth: "12px",
        readOnly: true,

    });

    //<div class="rate-star"></div>



    $(".menu__btn").on("click", function () {
        $(".menu__list").slideToggle();
    });











    // search__products-form-one
    //js-example-basic-single
    $(".js-example-basic-single").select2();




    // для всех select
    $('select').styler();




















    // фильтер, if чтобы небыло ошибки 
    // для фильтра БЛОКА products всегда указываем внизу 
    if ($('.products__inner-box').length) {
        let mixer = mixitup('.products__inner-box');
    }

});