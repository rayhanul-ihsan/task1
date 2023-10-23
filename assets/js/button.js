let isOpen = false // true
function openmenu() {
  let menunav = document.getElementById("menu-nav-cont")
  if(!isOpen) {
    menunav.style.display= "block";
    isOpen = true
  } else {
    menunav.style.display= "none";
    isOpen = false
  }
}