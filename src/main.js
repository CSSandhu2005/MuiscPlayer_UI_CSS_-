let menuOpen = document.getElementById('menu-open');
let menuClose = document.getElementById('menu-close');
let sideBar = document.querySelector('.container .sidebar');

menuOpen.addEventListener("click", () => {
  sideBar.style.left = "0";
});

menuClose.addEventListener("click", () => {
    sideBar.style.left = "-100%";
});
