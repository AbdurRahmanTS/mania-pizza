document.getElementById("menu-icon").addEventListener("click", function() {
    const menuItems = document.getElementById("menu-items").style;
    console.log(menuItems)
    if (menuItems.display == "none") {
        menuItems.display="flex";
    } else {
        menuItems.display="none";
    }
})

document.getElementById("explore-more").addEventListener("click", function() {
    document.getElementById("hidden-items-1").style.display = "flex";
    document.getElementById("hidden-items-2").style.display = "flex";
})