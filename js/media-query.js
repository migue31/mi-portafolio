 let menuBar = document.getElementById("menuBar");
let mainMenu = document.getElementById("mainMenu");

menuBar.addEventListener("click", function() {
/*       alert("Holiiii, si funciona!! :)"); */
    if (mainMenu.classList.contains("main-menu")) {
        mainMenu.classList.add("main-menu-block");
        mainMenu.classList.remove("main-menu");
    }
     else {
        mainMenu.classList.add("main-menu");
        mainMenu.classList.remove("main-menu-block");

    }    
});
 /*    mainNAv.classList.remove("main-nav");
    mainNAv.classList.add("main-nav-2") */;
    /* mainMenu.classList.remove("main-menu")
    mainMenu.classList.add("main-menu-block") */
    