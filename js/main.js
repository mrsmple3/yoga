const lenis = new Lenis({
    wrapper: document.querySelector('.scroll-container'),
    lerp: 0.1,
    duration: 1.2,
    smoothTouch: true
});
lenis.on('scroll', e => {
    console.log(e);
});
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// header burgir
$(".header__burgir").click(function() {
    $("body").addClass("hidden");
    $(".header__menu").addClass("active");
    setTimeout(function() {
        $(".header__menu").addClass("opacity");
    },10);
});
$(".menu_close").click(function() {
    $("body").removeClass("hidden");
    $(".header__menu").removeClass("opacity");
    setTimeout(function() {
        $(".header__menu").removeClass("active");
    },600);
});

// Header Fixed
$(window).on('scroll', function () {
    $(".header").toggleClass("fixed", $(this).scrollTop() > 50);
});