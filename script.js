const icon = document.querySelector("i");
const sideBar = document.querySelector(".side-nav-bar");

icon.addEventListener("click", () => {
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-arrow-left");

  if (!icon.classList.contains("fa-bars")) {
    icon.classList.add("slide");
    sideBar.style.right = "0em";
    sideBar.style.visibility = "visible";
  } else {
    sideBar.style.visibility = "hidden";
    sideBar.style.right = "-20em";
    icon.classList.remove("slide");
  }
});

sideBar.style.transition = " .5s ease-in-out";
icon.style.transition = " .3s ease-in-out";
