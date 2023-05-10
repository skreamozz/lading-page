const buttonMenu = document.getElementById("button-menu");
const itemsMenu = document.getElementById("items-menu");
const body = document.querySelector("body");
const header = document.querySelector("header");

let activeMenu = false;

buttonMenu.addEventListener("click", () => {
  activeMenu = !activeMenu;

  if (activeMenu) {
    itemsMenu.className =
      "absolute top-12 right-0 w-[70%] h-screen bg-black text-white transition-all  duration-300 z-50";

    header.className = "mb-8 relative overflow-visible";

    setTimeout(() => {}, 350);
  } else {
    header.className = "mb-8 relative overflow-hidden";

    itemsMenu.className =
      "absolute top-12 -right-[1000px] w-[70%] h-screen bg-black text-white transition-all duration-300 z-50";

    setTimeout(() => {}, 350);
  }
});
