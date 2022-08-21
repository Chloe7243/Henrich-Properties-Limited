"use strict";

// ===================
// LEARN MORE CONTENTS
// ===================

// =====================================

// ==================
// MOBILE NAVBAR
// ==================
const icon = document.querySelector("i");
const sideBar = document.querySelector(".side-nav-bar");
const modalState = document.querySelector(".modal");
const noScroll = document.querySelector("html");

// ----- FN == FUNCTION ------
// FN FOR POSITION AND VISIBILITY OF SIDEBAR
const style = (visVal, posVal) => {
    sideBar.style.visibility = visVal;
    sideBar.style.right = posVal;
};

// FN FOR ADDING CLASS
const addClass = (element, className) => element.classList.add(className);

// FN FOR REMOVING CLASS
const removeClass = (element, className) => element.classList.remove(className);

// FN FOR STYLING ELEENTS
const styleElement = (element, choice, value) =>
    (element.style[choice] = value);

// FN FOR SIDE NAV BAR TO SLIDE OUT
const sideBarOpen = () => {
    style("visible", "0em");
    addClass(icon, "slide");
    addClass(modalState, "overlay");
    styleElement(noScroll, "overflow", "hidden");
};

// FN FOR SIDE NAV BAR TO GO BACK IN
const sideBarClose = () => {
    style("hidden", "-20em");
    removeClass(icon, "slide");
    removeClass(modalState, "overlay");
    styleElement(noScroll, "overflow", "scroll");
};

// TRANSITION STYLE OF ICON AND SIDE NAV BAR
styleElement(sideBar, "transition", ".5s ease-in-out");
styleElement(icon, "transition", ".4s ease-in-out");

// TOGGLING ICON FN
const toggleIcon = () => {
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-arrow-left");
};

// THE EVENT LISTENER FOR WHEN ICON IS CLICKED
icon.addEventListener("click", () => {
    toggleIcon();
    !icon.classList.contains("fa-bars") ? sideBarOpen() : sideBarClose();
});

// THE EVENT LISTENER FOR WHEN ELEMENTS IN THE SIDE BAR IS CLICKED
sideBar.addEventListener("click", () => {
    toggleIcon();
    sideBarClose();
});

// ========================
//SWIPER SECTION
// ========================
const scrollable = document.querySelector(".services-cards-container");
const prev = document.querySelector(".button-next");
const next = document.querySelector(".button-prev");

next.addEventListener("click", () => {
    scrollable.scrollLeft -= 362;
});
prev.addEventListener("click", () => {
    scrollable.scrollLeft += 362;
});
// ==========================

// =====================
//INTERSECTION OBSERVER
// =====================
const homePage = document.querySelector(".home-page");
const nav = document.querySelector(".navbar");

const options = {
    rootMargin: "-90px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries, observer) => {
    if (!entries[0].isIntersecting) {
        nav.classList.add("bg-primary");
        nav.style.boxShadow = "0 0.5rem 1rem rgba(0, 0, 0, 0.2)";
    } else {
        nav.classList.remove("bg-primary");
        nav.style.boxShadow = "none";
    }
}, options);

observer.observe(homePage);
// =========================

// =======================
// LEARN MORE FUNCTIONALITY
// =======================
const buttons = document.querySelectorAll("[data-id]");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.dataset.id === "ee1") {
            localStorage.setItem("id", "ee1");
        } else if (button.dataset.id === "ee2") {
            localStorage.setItem("id", "ee2");
        } else if (button.dataset.id === "ee3") {
            localStorage.setItem("id", "ee3");
        } else if (button.dataset.id === "s1") {
            localStorage.setItem("id", "s1");
        } else if (button.dataset.id === "s2") {
            localStorage.setItem("id", "s2");
        } else if (button.dataset.id === "s3") {
            localStorage.setItem("id", "s3");
        } else if (button.dataset.id === "s4") {
            localStorage.setItem("id", "s4");
        } else if (button.dataset.id === "s5") {
            localStorage.setItem("id", "s5");
        }
    });
});
