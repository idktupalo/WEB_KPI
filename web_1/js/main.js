$(function(){
    $('.about__slider').slick({
        arrows:false,
        dots:true,
        autoplay:true,
        fade:true
    });

    $('.menu__btn').on('click',function(){
        $('.menu__list').toggleClass('menu__list--active');
    })
});