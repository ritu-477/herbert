
const accordionbtn = document.querySelectorAll(".accordionbtn")
accordionbtn.forEach((e) => {
    e.addEventListener("click", () => {
        const activeaccodion = document.querySelector(".active")
        e.parentElement.classList.toggle("active")
        activeaccodion && activeaccodion.classList.remove("active")

    })

});
// // scroll-to -top-button////
const mybutton = document.querySelector(".topBtn");
const show = document.querySelector(".show")

window.addEventListener("scroll", function () {
    if (window.scrollY > 600) {
        mybutton.classList.add("show")
    }
    else {
        mybutton.classList.remove("show")
    }
})
mybutton.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;

});

function toggleMenuIcon() {
    const menuIconImage = document.getElementById('menuIconImage');
    if (menuIconImage.src.includes('menu-icon.png')) {
        menuIconImage.src = './assets/images/png/menu-icon-open.png';
    } else {
        menuIconImage.src = './assets/images/png/menu-icon.png';
    }
    document.querySelector("#menuList").classList.toggle("max-lg:left-[-100%]");
    document.body.classList.toggle("overflow-hidden");
    document.body.classList.toggle(".transition");

}

document.getElementById('menuToggle').addEventListener('click', toggleMenuIcon);

// Hero Section Animations
var tlHero = gsap.timeline();
tlHero.fromTo(
    ".herbertlogo",
    { y: -200 },
    { y: 0, duration: 1 },
);
tlHero.fromTo(
    ".navlinks",
    { y: -200 },
    { y: 0, stagger: 0.3 },
);

var tlHeroText = gsap.timeline();
tlHeroText.fromTo(
    ".heroText",
    { scale: 0 },
    { scale: 1, delay: 2, duration: 1, stagger: 0.5 },
);

// Card Animation with ScrollTrigger
var cardAnimation = gsap.timeline();
cardAnimation.from(".heroCardAnimation", {
    scale: 0,
    delay: 2,
    stagger: 0.5,
});

ScrollTrigger.create({
    trigger: '.heroCard',
    start: 'top 90%',
    end: 'bottom top',
    animation: cardAnimation,
    markers: false,
});

// Create a GSAP timeline for Features Section
// Create GSAP timeline for animations
var imageAnimation = gsap.timeline();
imageAnimation
    .from('.middleimg', { opacity: 0, scale: 0 })
    .from(".card_animation", { x: -1000, stagger: 0.3 },)
    .from(".card_animation2", { x: 1000, stagger: 0.3 },);


// Create the ScrollTrigger instance for Features Section
ScrollTrigger.create({
    trigger: '.main',
    start: '5% 75%',
    end: '120% 60%',
    animation: imageAnimation,
    markers: false,
    // toggleActions:"play",   
}
);
// pricing-section
var pricingHeading = gsap.timeline();
pricingHeading.fromTo(
    ".pricingText",
    { scale: 0 },
    { scale: 1, delay: 1.5, duration: 1, stagger: 0.3 }
);
ScrollTrigger.create({
    trigger: '.pricing',
    start: '40% 90%',
    end: '120% 60%',
    animation: pricingHeading,
    markers: false,
    toggleActions: "play",
}
);
var pricingPara = gsap.timeline();
pricingPara.from(
    ".pricingParaText",
    { x: -1000, stagger: 0.3, delay: 2, duration: 1, },
);
// teamresources
var teamResources = gsap.timeline();
teamResources.from(".resourcesTeam", { scale: 0, delay: 2, stagger: 0.5, })
    .from(".teamImage", { x: 1000, stagger: 0.3 },);
    
ScrollTrigger.create({
    trigger: '.teamCard',
    start: '50% 90%',
    end: 'bottom top',
    animation: teamResources,
    markers: false,
});

// faq-section

// Create a GSAP timeline for FAQ animations
var frequentlyAsked = gsap.timeline();

// Animate .faqHeading
frequentlyAsked.from(".faqHeading", {
    x: -1200,
    stagger: 0.3,
    delay: 2,
    duration: 1
});
frequentlyAsked.from(".accordionCard", {
    x: -1000,
    stagger: 0.3,
    delay: 2,
    duration: 1
}, 0);

// Animate .accordionCard2
frequentlyAsked.from(".accordionCard2", {
    x: 1000,
    stagger: 0.3,
    delay: 2,
    duration: 1
}, 0); 
frequentlyAsked.from(".accordionPara", {
    x: 1200,
    stagger: 0.3,
    delay: 2,
    duration: 1
}, 0); 
frequentlyAsked.from(".viewButton", {
    y: -100,
    stagger: 0.3,
    delay: 2,
    duration: 1
}, 0); 

ScrollTrigger.create({
    trigger: '.faqAsked',
    start: '80% 90%',
    end: 'bottom top',
    animation: frequentlyAsked,
    markers: false
});
// needhelp
var needHelp = gsap.timeline();
needHelp.from(".needCard", {
    x: 1500,
    stagger: 0.3,
    delay: 2,
    duration: 1
}, 0);
ScrollTrigger.create({
    trigger: '.needHelp',
    start: '90% 120%',
    end: 'bottom top',
    animation: needHelp,
    markers: false,
});







