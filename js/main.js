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

// Animate on Scroll
const animatedElements = document.querySelectorAll('.animate-on-scroll');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('is-visible');
        }
    });
});
animatedElements.forEach(el => observer.observe(el));

// Fixed Header
$(window).on('scroll', () => $(".header").toggleClass("fixed", $(window).scrollTop() > 50));

// Header Submenu
if ($(".navbar_sub").length) {
    const toggleNav = function() {
        const li = $(this), close = () => {
            li.removeClass("open");
            setTimeout(() => li.removeClass("active"), 300);
        };
        li.hasClass("active") ? close() : (li.addClass("active"), setTimeout(() => li.addClass("open"), 100));
        $(".main, .footer").off("click.closeNav").on("click.closeNav", close);
    };
    $(".header__navbar li, .dashboard__link li").click(toggleNav);
}

// Burger Menu
$(".header__burgir").click(() => {
    $("body").addClass("hidden");
    $(".header__menu").addClass("active");
    setTimeout(() => $(".header__menu").addClass("opacity"), 10);
});
$(".menu_close").click(() => {
    $("body").removeClass("hidden");
    $(".header__menu").removeClass("opacity");
    setTimeout(() => $(".header__menu").removeClass("active"), 600);
});

// Rellax
if ($(".rellax").length && window.innerWidth > 1199) new Rellax('.rellax');

// Question Toggle
if ($(".question").length) {
    $(".question__btn").each(function() {
        if ($(this).hasClass("open")) $(this).next().slideDown(0);
    }).click(function() {
        const btn = $(this);
        btn.toggleClass("open");
        btn.next().slideToggle(300);
    });
};

// Video Play
if ($(".videoMain__play").length) $(".videoMain__play").click(() => $(".videoMain").addClass("open"));