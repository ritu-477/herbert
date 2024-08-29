// function openNav() {
//     document.querySelector(".menuList").classList.toggle("start-0");
//     document.body.classList.toggle("overflow_hidden");
//     const menuIcon = document.querySelector(".menuIcon");
//     menuIcon.classList.toggle("active");
// };
function openNav() {
    document.querySelector(".menuList").classList.toggle("start-0");
    document.body.classList.toggle("overflowhidden");
    document.querySelector(".menuIcon").classList.toggle("cross");
}
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
