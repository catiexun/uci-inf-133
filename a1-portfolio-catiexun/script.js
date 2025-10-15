// Nav Bar Icons
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

// Open menu when clicking hamburger icon
menuOpenButton.addEventListener("click", () => { 
    document.body.classList.toggle("show-mobile-menu"); 
});
// Close menu when clicking X button 
menuCloseButton.addEventListener("click", () => menuOpenButton.click());