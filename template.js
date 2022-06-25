function toggleMenu(){
    var menuTable = document.getElementById("menuItems")
    if(menuTable.style.visibility == "hidden"){
        menuTable.style.visibility = "visible"
    }
    else{
        menuTable.style.visibility = "hidden"
    }
}