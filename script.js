const icon = document.querySelector("i");
const sideBar = document.querySelector(".side-nav-bar");
const modalState = document.querySelector(".modal");
const noScroll = document.querySelector("html");

const sideBarOpen = () => {
  sideBar.style.visibility = "visible";
  sideBar.style.right = "0em";
  icon.classList.add("slide");
  modalState.classList.add("overlay");
  noScroll.style.overflow = "hidden";
};

const sideBarClose = () => {
  sideBar.style.visibility = "hidden";
  sideBar.style.right = "-20em";
  icon.classList.remove("slide");
  modalState.classList.remove("overlay");
  noScroll.style.overflow = "scroll";
};

sideBar.style.transition = " .5s ease-in-out";
icon.style.transition = " .3s ease-in-out";

const toggleIcon = () => {
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-arrow-left");
};

icon.addEventListener("click", () => {
  toggleIcon();
  !icon.classList.contains("fa-bars") ? sideBarOpen() : sideBarClose();
});

sideBar.addEventListener("click", () => {
  toggleIcon();
  sideBarClose();
});
