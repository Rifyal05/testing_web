const menuIcon = document.getElementById("icon_menu");
const menuList = document.getElementById("navigation");

menuIcon.addEventListener("click",()=>{
  menuList.classList.toggle("hidden")
});