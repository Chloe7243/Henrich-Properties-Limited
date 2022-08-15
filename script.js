const icon = document.querySelector("i");
const sideBar = document.querySelector(".side-nav-bar");
const modalState = document.querySelector(".modal");
const noScroll = document.querySelector("html");

// -------------CLEANER CODE (I HOPE)--------------
// ----- FN == FUNCTION ------

// FN FOR POSITION AND VISIBILITY OF SIDEBAR
const style = (visVal, posVal) => {
  sideBar.style.visibility = visVal;
  sideBar.style.right = posVal;
};

// FN FOR ADDING CLASS
const addClass = (el, className) => el.classList.add(className);

// FN FOR REMOVING CLASS
const removeClass = (el, className) => el.classList.remove(className);

// FN FOR STYLING ELEENTS
const styleEl = (el, choice, value) => (el.style[choice] = value);

// FN FOR SIDE NAV BAR TO SLIDE OUT
const sideBarOpen = () => {
  style("visible", "0em");
  addClass(icon, "slide");
  addClass(modalState, "overlay");
  styleEl(noScroll, "overflow", "hidden");
};

// FN FOR SIDE NAV BAR TO GO BACK IN
const sideBarClose = () => {
  style("hidden", "-20em");
  removeClass(icon, "slide");
  removeClass(modalState, "overlay");
  styleEl(noScroll, "overflow", "scroll");
};

// TRANSITION STYLE OF ICON AND SIDE NAV BAR
styleEl(sideBar, "transition", ".5s ease-in-out");
styleEl(icon, "transition", ".4s ease-in-out");

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

// ORIGINAL CODE

// FN FOR SIDE NAV BAR TO SLIDE OUT
/*const sideBarOpen = () => {
  sideBar.style.visibility = "visible";
  sideBar.style.right = "0em";
  icon.classList.add("slide");
  modalState.classList.add("overlay");
  noScroll.style.overflow = "hidden";
};

// FN FOR SIDE NAV BAR TO GO BACK IN
const sideBarClose = () => {
  sideBar.style.visibility = "hidden";
  sideBar.style.right = "-20em";
  icon.classList.remove("slide");
  modalState.classList.remove("overlay");
  noScroll.style.overflow = "scroll";
};

// TRANSITION STYLE OF ICON AND SIDE NAV BAR
sideBar.style.transition = " .5s ease-in-out";
icon.style.transition = " .3s ease-in-out";

// FN FOR TOGGLING ICON 
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
*/
